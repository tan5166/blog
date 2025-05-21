const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const bgImage = new Image();
bgImage.src = "grass.jpg";

const unit = 20;
const col = canvas.width / unit;
const row = canvas.height / unit;

let lastMoveTime = 0;
const moveInterval = 90;
let gameStarted = false;
let gameOver = false;

let score = 0;
let highestScore = localStorage.getItem("highestScore") || 0;
document.querySelector("#HighestScore").textContent = highestScore;

class SnakeBody {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Snake {
  constructor() {
    this.body = [
      new SnakeBody(4, 0),
      new SnakeBody(3, 0),
      new SnakeBody(2, 0),
      new SnakeBody(1, 0),
      new SnakeBody(0, 0),
    ];
    this.pressDirection = "right";
    this.moveDirection = "right";
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    for (let part of this.body) {
      ctx.fillRect(part.x * unit, part.y * unit, unit, unit);
    }
  }

  move() {
    const head = this.body[0];
    let newHead;

    if (this.pressDirection) {
      this.moveDirection = this.pressDirection;
    }

    switch (this.moveDirection) {
      case "right":
        newHead = new SnakeBody(head.x + 1, head.y);
        break;
      case "left":
        newHead = new SnakeBody(head.x - 1, head.y);
        break;
      case "up":
        newHead = new SnakeBody(head.x, head.y - 1);
        break;
      case "down":
        newHead = new SnakeBody(head.x, head.y + 1);
        break;
    }
    if (
      newHead.x < 0 ||
      newHead.x >= col ||
      newHead.y < 0 ||
      newHead.y >= row
    ) {
      gameOver = true;
      return;
    }

    if (
      this.body.some((part) => part.x === newHead.x && part.y === newHead.y)
    ) {
      gameOver = true;
      return;
    }

    this.body.unshift(newHead);

    if (newHead.x === food.position.x && newHead.y === food.position.y) {
      food = new Food();
      score++;
      document.querySelector("#Score").textContent = score;
      if (score > highestScore) {
        highestScore = score;
        document.querySelector("#HighestScore").textContent = highestScore;
        localStorage.setItem("highestScore", highestScore);
      }
    } else {
      this.body.pop();
    }
  }
}

class Food {
  constructor() {
    this.position = this.randomPosition();
  }

  randomPosition() {
    let x, y;
    do {
      x = Math.floor(Math.random() * col);
      y = Math.floor(Math.random() * row);
    } while (snake.body.some((part) => part.x === x && part.y === y));
    return { x, y };
  }

  draw(ctx) {
    ctx.fillStyle = "rgba(255, 8, 0, 0.5)";
    ctx.beginPath();
    ctx.arc(
      this.position.x * unit + unit / 2,
      this.position.y * unit + unit / 2,
      unit / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

let snake = new Snake(); // To store body of snake, each body is a object
let food = new Food();

function drawStartText() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "20px 'Press Start 2P', monospace";
  ctx.textAlign = "center";
  ctx.fillText("Press any key to start", canvas.width / 2, canvas.height / 2);
}

function drawGameOverText() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.font = "30px 'Press Start 2P', monospace";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);

  ctx.fillStyle = "white";
  ctx.font = "16px 'Press Start 2P', monospace";
  ctx.fillText(
    "Press SPACE to restart",
    canvas.width / 2,
    canvas.height / 2 + 30
  );
}

document.addEventListener("keydown", () => {
  if (!gameStarted) {
    gameStarted = true;
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(gameLoop);
  }
});

function handleKeyDown(e) {
  const key = e.key;
  if (key === "ArrowRight" && snake.moveDirection !== "left") {
    snake.pressDirection = "right";
  } else if (key === "ArrowLeft" && snake.moveDirection !== "right") {
    snake.pressDirection = "left";
  } else if (key === "ArrowUp" && snake.moveDirection !== "down") {
    snake.pressDirection = "up";
  } else if (key === "ArrowDown" && snake.moveDirection !== "up") {
    snake.pressDirection = "down";
  }
}

document.addEventListener("keydown", function (e) {
  if (gameOver && e.code === "Space") {
    restartGame();
  }
});

function restartGame() {
  gameOver = false;
  lastMoveTime = 0;
  score = 0;
  document.querySelector("#Score").textContent = score;
  snake = new Snake();
  food = new Food();
  requestAnimationFrame(gameLoop);
}

bgImage.onload = function () {
  drawStartText();
};

function gameLoop(timestamp) {
  if (gameOver) {
    drawGameOverText();
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  if (timestamp - lastMoveTime > moveInterval) {
    snake.move();
    lastMoveTime = timestamp;
  }
  food.draw(ctx);
  snake.draw(ctx);
  requestAnimationFrame(gameLoop);
}
