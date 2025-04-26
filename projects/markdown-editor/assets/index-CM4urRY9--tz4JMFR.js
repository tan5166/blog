import{c as Je,d as Xe,r as tt,h as L,F as In,a as Vn,e as Ln,w as Sn,o as Pn}from"./purify.es-CuyYui_p.js";import{p as xn}from"./plus-lrX0Q75O-OLo2flMq.js";import{i as Bn,a as Wn}from"./index-BPG8iO8t-BYvbd5Wj.js";import{$ as at,e as je,f as tn,P as en,g as nn,N as Ge,h as I,j as $n,m as yt,n as Tn,T as Ut,o as En,p as Zn,q as sn,r as An,C as te,s as U,t as Rn,u as On,v as Dn,w as Nn,l as qn,x as ze,y as Fn,z as Gn}from"./index-Ch0y_Xfo.js";import{c as zn,f as Un}from"./functions-DlJPkGmE-TGlvEzlp.js";import{i as Kn,d as Qn}from"./image-DoB1o1sl-gtbatoU5.js";import{t as Yn}from"./index-DiyBWuwY.js";import{f as an,o as ln,c as on}from"./floating-ui.dom-DJfcjnnZ.js";import{I as ee}from"./index-SF0jcbH_.js";var rn=n=>{throw TypeError(n)},ae=(n,t,e)=>t.has(n)||rn("Cannot "+e),o=(n,t,e)=>(ae(n,t,"read from private field"),e?e.call(n):t.get(n)),y=(n,t,e)=>t.has(n)?rn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),u=(n,t,e,s)=>(ae(n,t,"write to private field"),t.set(n,e),e),Jn=(n,t,e)=>(ae(n,t,"access private method"),e),gt,Lt,K,T,ct,E,F,cn,dt,Q,Y,St,ht,ut,pt,Pt,J,P,O,et,nt,zt,vt,xt,Bt,mt,Ct,wt,ne,dn;function kt(n,t){return Object.assign(n,{meta:{package:"@milkdown/plugin-block",...t}}),n}const Xn=n=>!nn(e=>e.type.name==="table")(n),Kt=at({filterNodes:Xn},"blockConfig");kt(Kt,{displayName:"Ctx<blockConfig>"});function jn(n,t,e){var s;if(!n.dom.parentElement)return null;try{const l=(s=n.posAtCoords({left:t.x,top:t.y}))==null?void 0:s.inside;if(l==null||l<0)return null;let r=n.state.doc.resolve(l),c=n.state.doc.nodeAt(l),p=n.nodeDOM(l);const w=k=>{const V=r.depth>=1&&r.index(r.depth)===0;if(!(k||V))return;const H=r.before(r.depth);c=n.state.doc.nodeAt(H),p=n.nodeDOM(H),r=n.state.doc.resolve(H),e(r,c)||w(!0)},v=e(r,c);return w(!v),!p||!c?null:{node:c,$pos:r,el:p}}catch{return null}}let Ue=null;function ts(){return Ue||(Ue=document.implementation.createHTMLDocument("title"))}const es={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]};function ns(n,t){const e=[];let{openStart:s,openEnd:a,content:l}=t;for(;s>1&&a>1&&l.childCount===1&&l.firstChild.childCount===1;){s-=1,a-=1;const f=l.firstChild;e.push(f.type.name,f.attrs!==f.type.defaultAttrs?f.attrs:null),l=f.content}const r=n.someProp("clipboardSerializer")||$n.fromSchema(n.state.schema),c=ts(),p=c.createElement("div");p.appendChild(r.serializeFragment(l,{document:c}));let w=p.firstChild,v,k=0;for(;w&&w.nodeType===1&&(v=es[w.nodeName.toLowerCase()]);){for(let f=v.length-1;f>=0;f--){const H=c.createElement(v[f]);for(;p.firstChild;)H.appendChild(p.firstChild);p.appendChild(H),k++}w=p.firstChild}w&&w.nodeType===1&&w.setAttribute("data-pm-slice",`${s} ${a}${k?` -${k}`:""} ${JSON.stringify(e)}`);const V=n.someProp("clipboardTextSerializer",f=>f(t,n))||t.content.textBetween(0,t.content.size,`

`);return{dom:p,text:V}}const Ke=yt.ie&&yt.ie_version<15||yt.ios&&yt.webkit_version<604,Qe=20;class ss{constructor(){y(this,F),y(this,gt),y(this,Lt),y(this,K),y(this,T),y(this,ct),y(this,E),y(this,Q),y(this,Y),y(this,St),y(this,ht),y(this,ut),y(this,pt),y(this,Pt),y(this,J),u(this,Lt,()=>{if(!o(this,T))return null;const t=o(this,T),e=o(this,F,dt);if(e&&Ge.isSelectable(t.node)){const s=Ge.create(e.state.doc,t.$pos.pos);return e.dispatch(e.state.tr.setSelection(s)),e.focus(),u(this,K,s),s}return null}),u(this,K,null),u(this,T,null),u(this,ct,void 0),u(this,E,!1),u(this,Y,()=>{var t;(t=o(this,Q))==null||t.call(this,{type:"hide"}),u(this,T,null)}),u(this,St,t=>{var e;u(this,T,t),(e=o(this,Q))==null||e.call(this,{type:"show",active:t})}),this.bind=(t,e)=>{u(this,gt,t),u(this,Q,e)},this.addEvent=t=>{t.addEventListener("mousedown",o(this,ht)),t.addEventListener("mouseup",o(this,ut)),t.addEventListener("dragstart",o(this,pt))},this.removeEvent=t=>{t.removeEventListener("mousedown",o(this,ht)),t.removeEventListener("mouseup",o(this,ut)),t.removeEventListener("dragstart",o(this,pt))},this.unBind=()=>{u(this,Q,void 0)},u(this,ht,()=>{var t;u(this,ct,(t=o(this,T))==null?void 0:t.el.getBoundingClientRect()),o(this,Lt).call(this)}),u(this,ut,()=>{if(!o(this,E)){requestAnimationFrame(()=>{var t;o(this,ct)&&((t=o(this,F,dt))==null||t.focus())});return}u(this,E,!1),u(this,K,null)}),u(this,pt,t=>{var e;u(this,E,!0);const s=o(this,F,dt);if(!s)return;s.dom.dataset.dragging="true";const a=o(this,K);if(t.dataTransfer&&a){const l=a.content();t.dataTransfer.effectAllowed="copyMove";const{dom:r,text:c}=ns(s,l);t.dataTransfer.clearData(),t.dataTransfer.setData(Ke?"Text":"text/html",r.innerHTML),Ke||t.dataTransfer.setData("text/plain",c);const p=(e=o(this,T))==null?void 0:e.el;p&&t.dataTransfer.setDragImage(p,0,0),s.dragging={slice:l,move:!0}}}),this.keydownCallback=t=>(o(this,Y).call(this),u(this,E,!1),t.dom.dataset.dragging="false",!1),u(this,Pt,Yn((t,e)=>{if(!t.editable)return;const s=t.dom.getBoundingClientRect(),a=s.left+s.width/2;if(!(t.root.elementFromPoint(a,e.clientY)instanceof Element)){o(this,Y).call(this);return}const r=o(this,F,cn);if(!r)return;const c=jn(t,{x:a,y:e.clientY},r);if(!c){o(this,Y).call(this);return}o(this,St).call(this,c)},200)),this.mousemoveCallback=(t,e)=>(t.composing||!t.editable||o(this,Pt).call(this,t,e),!1),this.dragoverCallback=(t,e)=>{var s;if(o(this,E)){const a=(s=o(this,F,dt))==null?void 0:s.dom.parentElement;if(!a)return!1;const l=a.scrollHeight>a.clientHeight,r=a.getBoundingClientRect();if(l){if(a.scrollTop>0&&Math.abs(e.y-r.y)<Qe){const w=a.scrollTop>10?a.scrollTop-10:0;return a.scrollTop=w,!1}const c=Math.round(t.dom.getBoundingClientRect().height);if(Math.round(a.scrollTop+r.height)<c&&Math.abs(e.y-(r.height+r.y))<Qe){const w=a.scrollTop+10;return a.scrollTop=w,!1}}}return!1},this.dragenterCallback=t=>{t.dragging&&(u(this,E,!0),t.dom.dataset.dragging="true")},this.dragleaveCallback=(t,e)=>{const s=e.clientX,a=e.clientY;(s<0||a<0||s>window.innerWidth||a>window.innerHeight)&&(u(this,T,null),o(this,J).call(this,t))},this.dropCallback=t=>(o(this,J).call(this,t),!1),this.dragendCallback=t=>{o(this,J).call(this,t)},u(this,J,t=>{u(this,E,!1),t.dom.dataset.dragging="false"})}}gt=new WeakMap;Lt=new WeakMap;K=new WeakMap;T=new WeakMap;ct=new WeakMap;E=new WeakMap;F=new WeakSet;cn=function(){var n;return(n=o(this,gt))==null?void 0:n.get(Kt.key).filterNodes};dt=function(){var n;return(n=o(this,gt))==null?void 0:n.get(I)};Q=new WeakMap;Y=new WeakMap;St=new WeakMap;ht=new WeakMap;ut=new WeakMap;pt=new WeakMap;Pt=new WeakMap;J=new WeakMap;const le=at(()=>new ss,"blockService"),Qt=at({},"blockServiceInstance");kt(le,{displayName:"Ctx<blockService>"});kt(Qt,{displayName:"Ctx<blockServiceInstance>"});const Yt=at({},"blockSpec");kt(Yt,{displayName:"Ctx<blockSpec>"});const oe=je(n=>{const t=new tn("MILKDOWN_BLOCK"),s=n.get(le.key)();n.set(Qt.key,s);const a=n.get(Yt.key);return new en({key:t,...a,props:{...a.props,handleDOMEvents:{drop:l=>s.dropCallback(l),pointermove:(l,r)=>s.mousemoveCallback(l,r),keydown:l=>s.keydownCallback(l),dragover:(l,r)=>s.dragoverCallback(l,r),dragleave:(l,r)=>s.dragleaveCallback(l,r),dragenter:l=>s.dragenterCallback(l),dragend:l=>s.dragendCallback(l)}}})});kt(oe,{displayName:"Prose<block>"});class as{constructor(t){y(this,ne),y(this,P),y(this,O),y(this,et),y(this,nt),y(this,zt),y(this,vt),y(this,xt),y(this,Bt),y(this,mt),y(this,Ct),y(this,wt),u(this,nt,null),u(this,vt,!1),this.update=()=>{requestAnimationFrame(()=>{if(!o(this,vt))try{Jn(this,ne,dn).call(this),u(this,vt,!0)}catch{}})},this.destroy=()=>{var e,s;(e=o(this,et))==null||e.unBind(),(s=o(this,et))==null||s.removeEvent(o(this,P)),o(this,P).remove()},this.show=e=>{const s=e.el,a=o(this,O).get(I).dom,l={ctx:o(this,O),active:e,editorDom:a,blockDom:o(this,P)},r={contextElement:s,getBoundingClientRect:()=>o(this,Ct)?o(this,Ct).call(this,l):s.getBoundingClientRect()},c=[an()];if(o(this,mt)){const p=o(this,mt).call(this,l),w=ln(p);c.push(w)}on(r,o(this,P),{placement:o(this,wt)?o(this,wt).call(this,l):"left",middleware:[...c,...o(this,xt)],...o(this,Bt)}).then(({x:p,y:w})=>{Object.assign(o(this,P).style,{left:`${p}px`,top:`${w}px`}),o(this,P).dataset.show="true"}).catch(console.error)},this.hide=()=>{o(this,P).dataset.show="false"},u(this,O,t.ctx),u(this,P,t.content),u(this,mt,t.getOffset),u(this,Ct,t.getPosition),u(this,wt,t.getPlacement),u(this,xt,t.middleware??[]),u(this,Bt,t.floatingUIOptions??{}),u(this,zt,t.root),this.hide()}get active(){return o(this,nt)}}P=new WeakMap;O=new WeakMap;et=new WeakMap;nt=new WeakMap;zt=new WeakMap;vt=new WeakMap;xt=new WeakMap;Bt=new WeakMap;mt=new WeakMap;Ct=new WeakMap;wt=new WeakMap;ne=new WeakSet;dn=function(){const n=o(this,O).get(I);(o(this,zt)??n.dom.parentElement??document.body).appendChild(o(this,P));const e=o(this,O).get(Qt.key);e.bind(o(this,O),s=>{s.type==="hide"?(this.hide(),u(this,nt,null)):s.type==="show"&&(this.show(s.active),u(this,nt,s.active))}),u(this,et,e),o(this,et).addEvent(o(this,P)),o(this,P).draggable=!0};const Jt=[Yt,Kt,le,Qt,oe];Jt.key=Yt.key;Jt.pluginKey=oe.key;var hn=n=>{throw TypeError(n)},ie=(n,t,e)=>t.has(n)||hn("Cannot "+e),B=(n,t,e)=>(ie(n,t,"read from private field"),t.get(n)),W=(n,t,e)=>t.has(n)?hn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),$=(n,t,e,s)=>(ie(n,t,"write to private field"),t.set(n,e),e),ls=(n,t,e)=>(ie(n,t,"access private method"),e),ft,Wt,$t,Tt,Et,st,Zt,At,Rt,se,un;function os(n){const t=at({},`${n}_SLASH_SPEC`),e=je(a=>{const l=a.get(t.key);return new en({key:new tn(`${n}_SLASH`),...l})}),s=[t,e];return s.key=t.key,s.pluginKey=e.key,t.meta={package:"@milkdown/plugin-slash",displayName:`Ctx<slashSpec>|${n}`},e.meta={package:"@milkdown/plugin-slash",displayName:`Prose<slash>|${n}`},s}class is{constructor(t){W(this,se),W(this,ft),W(this,Wt),W(this,$t),W(this,Tt),W(this,Et),W(this,st),W(this,Zt),W(this,At),W(this,Rt),$(this,ft,!1),this.onShow=()=>{},this.onHide=()=>{},$(this,Rt,(e,s)=>{const{state:a,composing:l}=e,{selection:r,doc:c}=a,{ranges:p}=r,w=Math.min(...p.map(f=>f.$from.pos)),v=Math.max(...p.map(f=>f.$to.pos)),k=s&&s.doc.eq(c)&&s.selection.eq(r);if(B(this,ft)||((B(this,Tt)??e.dom.parentElement??document.body).appendChild(this.element),$(this,ft,!0)),l||k)return;if(!B(this,Zt).call(this,e,s)){this.hide();return}on({getBoundingClientRect:()=>Zn(e,w,v)},this.element,{placement:"bottom-start",middleware:[an(),ln(B(this,At)),...B(this,Wt)],...B(this,$t)}).then(({x:f,y:H})=>{Object.assign(this.element.style,{left:`${f}px`,top:`${H}px`})}).catch(console.error),this.show()}),this.update=(e,s)=>{Tn(B(this,Rt),B(this,Et))(e,s)},this.getContent=(e,s=a=>a.type.name==="paragraph")=>{const{selection:a}=e.state,{empty:l,$from:r}=a,c=e.state.selection instanceof Ut,p=this.element.contains(document.activeElement),w=!e.hasFocus()&&!p,v=!e.editable,V=!En(s)(e.state.selection);if(!(w||v||!l||!c||V))return r.parent.textBetween(Math.max(0,r.parentOffset-500),r.parentOffset,void 0,"￼")},this.destroy=()=>{},this.show=()=>{this.element.dataset.show="true",this.onShow()},this.hide=()=>{this.element.dataset.show="false",this.onHide()},this.element=t.content,$(this,Et,t.debounce??200),$(this,Zt,t.shouldShow??ls(this,se,un)),$(this,st,t.trigger??"/"),$(this,At,t.offset),$(this,Wt,t.middleware??[]),$(this,$t,t.floatingUIOptions??{}),$(this,Tt,t.root)}}ft=new WeakMap;Wt=new WeakMap;$t=new WeakMap;Tt=new WeakMap;Et=new WeakMap;st=new WeakMap;Zt=new WeakMap;At=new WeakMap;Rt=new WeakMap;se=new WeakSet;un=function(n){const t=this.getContent(n);if(!t)return!1;const e=t.at(-1);return e?Array.isArray(B(this,st))?B(this,st).includes(e):B(this,st)===e:!1};const rs=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8070)">
      <path
        d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM8 19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17H8C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19ZM8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13ZM7 6C7 6.55 7.45 7 8 7H20C20.55 7 21 6.55 21 6C21 5.45 20.55 5 20 5H8C7.45 5 7 5.45 7 6Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8070">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,cs=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7900)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 13H5C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H19C19.55 11 20 11.45 20 12C20 12.55 19.55 13 19 13Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7900">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ds=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5553)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM12 17H14V7H10V9H12V17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5553">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,hs=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5559)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H11V13H13C14.1 13 15 12.11 15 11V9C15 7.89 14.1 7 13 7H9V9H13V11H11C9.9 11 9 11.89 9 13V17H15V15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5559">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,us=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5565)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15V13.5C15 12.67 14.33 12 13.5 12C14.33 12 15 11.33 15 10.5V9C15 7.89 14.1 7 13 7H9V9H13V11H11V13H13V15H9V17H13C14.1 17 15 16.11 15 15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5565">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ps=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7757)">
      <path
        d="M19.04 3H5.04004C3.94004 3 3.04004 3.9 3.04004 5V19C3.04004 20.1 3.94004 21 5.04004 21H19.04C20.14 21 21.04 20.1 21.04 19V5C21.04 3.9 20.14 3 19.04 3ZM19.04 19H5.04004V5H19.04V19ZM13.04 17H15.04V7H13.04V11H11.04V7H9.04004V13H13.04V17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7757">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,vs=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7760)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15V13C15 11.89 14.1 11 13 11H11V9H15V7H9V13H13V15H9V17H13C14.1 17 15 16.11 15 15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7760">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ms=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7763)">
      <path
        d="M11 17H13C14.1 17 15 16.11 15 15V13C15 11.89 14.1 11 13 11H11V9H15V7H11C9.9 7 9 7.89 9 9V15C9 16.11 9.9 17 11 17ZM11 13H13V15H11V13ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7763">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Cs=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_971_7680)">
      <path
        d="M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_971_7680">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ws=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8067)">
      <path
        d="M8 7H20C20.55 7 21 6.55 21 6C21 5.45 20.55 5 20 5H8C7.45 5 7 5.45 7 6C7 6.55 7.45 7 8 7ZM20 17H8C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17ZM20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11ZM4.5 16H2.5C2.22 16 2 16.22 2 16.5C2 16.78 2.22 17 2.5 17H4V17.5H3.5C3.22 17.5 3 17.72 3 18C3 18.28 3.22 18.5 3.5 18.5H4V19H2.5C2.22 19 2 19.22 2 19.5C2 19.78 2.22 20 2.5 20H4.5C4.78 20 5 19.78 5 19.5V16.5C5 16.22 4.78 16 4.5 16ZM2.5 5H3V7.5C3 7.78 3.22 8 3.5 8C3.78 8 4 7.78 4 7.5V4.5C4 4.22 3.78 4 3.5 4H2.5C2.22 4 2 4.22 2 4.5C2 4.78 2.22 5 2.5 5ZM4.5 10H2.5C2.22 10 2 10.22 2 10.5C2 10.78 2.22 11 2.5 11H3.8L2.12 12.96C2.04 13.05 2 13.17 2 13.28V13.5C2 13.78 2.22 14 2.5 14H4.5C4.78 14 5 13.78 5 13.5C5 13.22 4.78 13 4.5 13H3.2L4.88 11.04C4.96 10.95 5 10.83 5 10.72V10.5C5 10.22 4.78 10 4.5 10Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8067">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,fs=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7897)">
      <path
        d="M7.17 17C7.68 17 8.15 16.71 8.37 16.26L9.79 13.42C9.93 13.14 10 12.84 10 12.53V8C10 7.45 9.55 7 9 7H5C4.45 7 4 7.45 4 8V12C4 12.55 4.45 13 5 13H7L5.97 15.06C5.52 15.95 6.17 17 7.17 17ZM17.17 17C17.68 17 18.15 16.71 18.37 16.26L19.79 13.42C19.93 13.14 20 12.84 20 12.53V8C20 7.45 19.55 7 19 7H15C14.45 7 14 7.45 14 8V12C14 12.55 14.45 13 15 13H17L15.97 15.06C15.52 15.95 16.17 17 17.17 17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7897">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,_s=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8078)">
      <path
        d="M20 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 5V8H5V5H20ZM15 19H10V10H15V19ZM5 10H8V19H5V10ZM17 19V10H20V19H17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8078">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,gs=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5547)">
      <path
        d="M5 5.5C5 6.33 5.67 7 6.5 7H10.5V17.5C10.5 18.33 11.17 19 12 19C12.83 19 13.5 18.33 13.5 17.5V7H17.5C18.33 7 19 6.33 19 5.5C19 4.67 18.33 4 17.5 4H6.5C5.67 4 5 4.67 5 5.5Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5547">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ks=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M5.66936 16.3389L9.39244 12.6158C9.54115 12.4671 9.71679 12.3937 9.91936 12.3957C10.1219 12.3976 10.2975 12.4761 10.4463 12.6312C10.5847 12.7823 10.654 12.9585 10.654 13.1599C10.654 13.3613 10.5847 13.5363 10.4463 13.6851L6.32704 17.8197C6.14627 18.0004 5.93538 18.0908 5.69436 18.0908C5.45333 18.0908 5.24243 18.0004 5.06166 17.8197L3.01744 15.7754C2.87899 15.637 2.81136 15.4629 2.81456 15.2533C2.81776 15.0437 2.88859 14.8697 3.02706 14.7312C3.16551 14.5928 3.34008 14.5235 3.55076 14.5235C3.76144 14.5235 3.93494 14.5928 4.07126 14.7312L5.66936 16.3389ZM5.66936 8.72359L9.39244 5.00049C9.54115 4.85177 9.71679 4.77838 9.91936 4.78031C10.1219 4.78223 10.2975 4.86075 10.4463 5.01586C10.5847 5.16691 10.654 5.34314 10.654 5.54454C10.654 5.74592 10.5847 5.92097 10.4463 6.06969L6.32704 10.2043C6.14627 10.3851 5.93538 10.4755 5.69436 10.4755C5.45333 10.4755 5.24243 10.3851 5.06166 10.2043L3.01744 8.16009C2.87899 8.02162 2.81136 7.84759 2.81456 7.63799C2.81776 7.42837 2.88859 7.25433 3.02706 7.11586C3.16551 6.97741 3.34008 6.90819 3.55076 6.90819C3.76144 6.90819 3.93494 6.97741 4.07126 7.11586L5.66936 8.72359ZM13.7597 16.5581C13.5472 16.5581 13.3691 16.4862 13.2253 16.3424C13.0816 16.1986 13.0097 16.0204 13.0097 15.8078C13.0097 15.5952 13.0816 15.4171 13.2253 15.2735C13.3691 15.13 13.5472 15.0582 13.7597 15.0582H20.7597C20.9722 15.0582 21.1503 15.1301 21.2941 15.2739C21.4378 15.4177 21.5097 15.5959 21.5097 15.8085C21.5097 16.0211 21.4378 16.1992 21.2941 16.3427C21.1503 16.4863 20.9722 16.5581 20.7597 16.5581H13.7597ZM13.7597 8.94276C13.5472 8.94276 13.3691 8.87085 13.2253 8.72704C13.0816 8.58324 13.0097 8.40504 13.0097 8.19244C13.0097 7.97985 13.0816 7.80177 13.2253 7.65819C13.3691 7.5146 13.5472 7.44281 13.7597 7.44281H20.7597C20.9722 7.44281 21.1503 7.51471 21.2941 7.65851C21.4378 7.80233 21.5097 7.98053 21.5097 8.19311C21.5097 8.40571 21.4378 8.5838 21.2941 8.72739C21.1503 8.87097 20.9722 8.94276 20.7597 8.94276H13.7597Z"
    />
  </svg>
`;var pn=n=>{throw TypeError(n)},vn=(n,t,e)=>t.has(n)||pn("Cannot "+e),it=(n,t,e)=>(vn(n,t,"read from private field"),e?e.call(n):t.get(n)),Ye=(n,t,e)=>t.has(n)?pn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Ms=(n,t,e,s)=>(vn(n,t,"write to private field"),t.set(n,e),e),X,Ot;class ys{constructor(){Ye(this,X,[]),this.clear=()=>(Ms(this,X,[]),this),Ye(this,Ot,t=>{const e={group:t,addItem:(s,a)=>{const l={key:s,...a};return t.items.push(l),e},clear:()=>(t.items=[],e)};return e}),this.addGroup=(t,e)=>{const a={key:t,label:e,items:[]};return it(this,X).push(a),it(this,Ot).call(this,a)},this.getGroup=t=>{const e=it(this,X).find(s=>s.key===t);if(!e)throw new Error(`Group with key ${t} not found`);return it(this,Ot).call(this,e)},this.build=()=>it(this,X)}}X=new WeakMap;Ot=new WeakMap;function Xt(n){const{$from:t,$to:e}=n.selection,{pos:s}=t,{pos:a}=e;return n=n.deleteRange(s-t.node().content.size,a),n}function Hs(n,t,e=null){const{from:s,to:a}=n.selection;return n.setBlockType(s,a,t,e)}function bs(n,t,e=null){const{$from:s,$to:a}=n.selection,l=s.blockRange(a),r=l&&Gn(l,t,e);return r?n.wrap(l,r):null}function Is(n,t,e=null){const s=t.createAndFill(e);return s?n.replaceSelectionWith(s):null}function D(n,t=null){return(e,s)=>{if(s){const a=Hs(Xt(e.tr),n,t);s(a.scrollIntoView())}return!0}}function Ht(n,t=null){return(e,s)=>{const a=bs(Xt(e.tr),n,t);return a?(s&&s(a.scrollIntoView()),!0):!1}}function bt(n,t=null){return(e,s)=>{const a=Is(Xt(e.tr),n,t);return a?(s&&s(a.scrollIntoView()),!0):!1}}function Vs(n,t,e){var s,a,l,r,c,p,w,v,k,V,f,H,d,M,g,C,S,A,R,ce,de,he,ue,pe,ve,me,Ce,we,fe,_e,ge,ke,Me,ye,He,be,Ie,Ve,Le,Se,Pe,xe,Be,We,$e,Te,Ee,Ze,Ae,Re,Oe,De;const z=e==null?void 0:e.get(An),gn=z==null?void 0:z.includes(te.Latex),kn=z==null?void 0:z.includes(te.ImageBlock),Mn=z==null?void 0:z.includes(te.Table),lt=new ys;lt.addGroup("text",(s=t==null?void 0:t.slashMenuTextGroupLabel)!=null?s:"Text").addItem("text",{label:(a=t==null?void 0:t.slashMenuTextGroupLabel)!=null?a:"Text",icon:(r=(l=t==null?void 0:t.slashMenuTextIcon)==null?void 0:l.call(t))!=null?r:gs,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;D(sn.type(i))(_,m)}}).addItem("h1",{label:(c=t==null?void 0:t.slashMenuH1Label)!=null?c:"Heading 1",icon:(w=(p=t==null?void 0:t.slashMenuH1Icon)==null?void 0:p.call(t))!=null?w:ds,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;D(U.type(i),{level:1})(_,m)}}).addItem("h2",{label:(v=t==null?void 0:t.slashMenuH2Label)!=null?v:"Heading 2",icon:(V=(k=t==null?void 0:t.slashMenuH2Icon)==null?void 0:k.call(t))!=null?V:hs,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;D(U.type(i),{level:2})(_,m)}}).addItem("h3",{label:(f=t==null?void 0:t.slashMenuH3Label)!=null?f:"Heading 3",icon:(d=(H=t==null?void 0:t.slashMenuH3Icon)==null?void 0:H.call(t))!=null?d:us,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;D(U.type(i),{level:3})(_,m)}}).addItem("h4",{label:(M=t==null?void 0:t.slashMenuH4Label)!=null?M:"Heading 4",icon:(C=(g=t==null?void 0:t.slashMenuH4Icon)==null?void 0:g.call(t))!=null?C:ps,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;D(U.type(i),{level:4})(_,m)}}).addItem("h5",{label:(S=t==null?void 0:t.slashMenuH5Label)!=null?S:"Heading 5",icon:(R=(A=t==null?void 0:t.slashMenuH5Icon)==null?void 0:A.call(t))!=null?R:vs,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;D(U.type(i),{level:5})(_,m)}}).addItem("h6",{label:(ce=t==null?void 0:t.slashMenuH6Label)!=null?ce:"Heading 6",icon:(he=(de=t==null?void 0:t.slashMenuH6Icon)==null?void 0:de.call(t))!=null?he:ms,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;D(U.type(i),{level:6})(_,m)}}).addItem("quote",{label:(ue=t==null?void 0:t.slashMenuQuoteLabel)!=null?ue:"Quote",icon:(ve=(pe=t==null?void 0:t.slashMenuQuoteIcon)==null?void 0:pe.call(t))!=null?ve:fs,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;Ht(Rn.type(i))(_,m)}}).addItem("divider",{label:(me=t==null?void 0:t.slashMenuDividerLabel)!=null?me:"Divider",icon:(we=(Ce=t==null?void 0:t.slashMenuDividerIcon)==null?void 0:Ce.call(t))!=null?we:cs,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;bt(On.type(i))(_,m)}}),lt.addGroup("list",(fe=t==null?void 0:t.slashMenuListGroupLabel)!=null?fe:"List").addItem("bullet-list",{label:(_e=t==null?void 0:t.slashMenuBulletListLabel)!=null?_e:"Bullet List",icon:(ke=(ge=t==null?void 0:t.slashMenuBulletListIcon)==null?void 0:ge.call(t))!=null?ke:rs,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;Ht(Dn.type(i))(_,m)}}).addItem("ordered-list",{label:(Me=t==null?void 0:t.slashMenuOrderedListLabel)!=null?Me:"Ordered List",icon:(He=(ye=t==null?void 0:t.slashMenuOrderedListIcon)==null?void 0:ye.call(t))!=null?He:ws,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;Ht(Nn.type(i))(_,m)}}).addItem("todo-list",{label:(be=t==null?void 0:t.slashMenuTaskListLabel)!=null?be:"Todo List",icon:(Ve=(Ie=t==null?void 0:t.slashMenuTaskListIcon)==null?void 0:Ie.call(t))!=null?Ve:ks,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;Ht(qn.type(i),{checked:!1})(_,m)}});const Mt=lt.addGroup("advanced",(Le=t==null?void 0:t.slashMenuAdvancedGroupLabel)!=null?Le:"Advanced");kn&&Mt.addItem("image",{label:(Se=t==null?void 0:t.slashMenuImageLabel)!=null?Se:"Image",icon:(xe=(Pe=t==null?void 0:t.slashMenuImageIcon)==null?void 0:Pe.call(t))!=null?xe:Kn,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;bt(Qn.type(i))(_,m)}}),Mt.addItem("code",{label:(Be=t==null?void 0:t.slashMenuCodeBlockLabel)!=null?Be:"Code",icon:($e=(We=t==null?void 0:t.slashMenuCodeBlockIcon)==null?void 0:We.call(t))!=null?$e:zn,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;bt(ze.type(i))(_,m)}}),Mn&&Mt.addItem("table",{label:(Te=t==null?void 0:t.slashMenuTableLabel)!=null?Te:"Table",icon:(Ze=(Ee=t==null?void 0:t.slashMenuTableIcon)==null?void 0:Ee.call(t))!=null?Ze:_s,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;let{tr:b}=_;b=Xt(b);const jt=b.selection.from,yn=Fn(i,3,3);b=b.replaceSelectionWith(yn),m(b),requestAnimationFrame(()=>{const qe=h.state.doc.content.size,Hn=h.state.doc.resolve(jt>qe?qe:jt<0?0:jt),bn=Ut.near(Hn),Fe=h.state.tr;Fe.setSelection(bn),m(Fe.scrollIntoView())})}}),gn&&Mt.addItem("math",{label:(Ae=t==null?void 0:t.slashMenuMathLabel)!=null?Ae:"Math",icon:(Oe=(Re=t==null?void 0:t.slashMenuMathIcon)==null?void 0:Re.call(t))!=null?Oe:Un,onRun:i=>{const h=i.get(I),{dispatch:m,state:_}=h;bt(ze.type(i),{language:"LaTex"})(_,m)}}),(De=t==null?void 0:t.buildMenu)==null||De.call(t,lt);let ot=lt.build();n&&(ot=ot.map(i=>{const h=i.items.filter(m=>m.label.toLowerCase().includes(n.toLowerCase()));return{...i,items:h}}).filter(i=>i.items.length>0));const Ne=ot.flatMap(i=>i.items);return Ne.forEach((i,h)=>{Object.assign(i,{index:h})}),ot.reduce((i,h)=>{const m=i+h.items.length;return Object.assign(h,{range:[i,m]}),m},0),{groups:ot,size:Ne.length}}const Ls=Xe({props:{ctx:{type:Object,required:!0},show:{type:Object,required:!0},filter:{type:Object,required:!0},hide:{type:Function,required:!0},config:{type:Object,required:!1}},setup({ctx:n,show:t,filter:e,hide:s,config:a}){const l=tt(),r=Vn(()=>Vs(e.value,a,n)),c=tt(0),p=tt({x:-999,y:-999}),w=d=>{const{x:M,y:g}=d;p.value={x:M,y:g}};Ln([r,t],()=>{const{size:d}=r.value;d===0&&t.value?s():c.value>=d&&(c.value=0)});const v=(d,M)=>{const g=c.value,C=typeof d=="function"?d(g):d;M==null||M(C),c.value=C},k=d=>{var M,g;const C=(M=l.value)==null?void 0:M.querySelector(`[data-index="${d}"]`),S=(g=l.value)==null?void 0:g.querySelector(".menu-groups");!C||!S||(S.scrollTop=C.offsetTop-S.offsetTop)},V=d=>{const M=r.value.groups.flatMap(g=>g.items).at(d);M&&n&&M.onRun(n),s()},f=d=>{const{size:M,groups:g}=r.value;if(d.key==="Escape"){d.preventDefault(),s==null||s();return}if(d.key==="ArrowDown")return d.preventDefault(),v(C=>C<M-1?C+1:C,k);if(d.key==="ArrowUp")return d.preventDefault(),v(C=>C<=0?C:C-1,k);if(d.key==="ArrowLeft")return d.preventDefault(),v(C=>{const S=g.find(R=>R.range[0]<=C&&R.range[1]>C);if(!S)return C;const A=g[g.indexOf(S)-1];return A?A.range[1]-1:C},k);if(d.key==="ArrowRight")return d.preventDefault(),v(C=>{const S=g.find(R=>R.range[0]<=C&&R.range[1]>C);if(!S)return C;const A=g[g.indexOf(S)+1];return A?A.range[0]:C},k);d.key==="Enter"&&(d.preventDefault(),V(c.value))},H=d=>M=>{const g=p.value;if(!g)return;const{x:C,y:S}=M;C===g.x&&S===g.y||v(d)};return Sn(()=>{t.value?window.addEventListener("keydown",f,{capture:!0}):window.removeEventListener("keydown",f,{capture:!0})}),Pn(()=>{window.removeEventListener("keydown",f,{capture:!0})}),()=>L("div",{ref:l,onPointerdown:d=>d.preventDefault()},L("nav",{class:"tab-group"},L("ul",null,r.value.groups.map(d=>L("li",{key:d.key,onPointerdown:()=>v(d.range[0],k),class:c.value>=d.range[0]&&c.value<d.range[1]?"selected":""},d.label)))),L("div",{class:"menu-groups",onPointermove:w},r.value.groups.map(d=>L("div",{key:d.key,class:"menu-group"},L("h6",null,d.label),L("ul",null,d.items.map(M=>L("li",{key:M.key,"data-index":M.index,class:c.value===M.index?"hover":"",onPointerenter:H(M.index),onPointerdown:()=>{var g,C;(C=(g=l.value)==null?void 0:g.querySelector(`[data-index="${M.index}"]`))==null||C.classList.add("active")},onPointerup:()=>{var g,C;(C=(g=l.value)==null?void 0:g.querySelector(`[data-index="${M.index}"]`))==null||C.classList.remove("active"),V(M.index)}},L(ee,{icon:M.icon}),L("span",null,M.label))))))))}});var mn=n=>{throw TypeError(n)},Cn=(n,t,e)=>t.has(n)||mn("Cannot "+e),x=(n,t,e)=>(Cn(n,t,"read from private field"),e?e.call(n):t.get(n)),rt=(n,t,e)=>t.has(n)?mn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),N=(n,t,e,s)=>(Cn(n,t,"write to private field"),t.set(n,e),e),_t,Dt,Nt,Z,j;const wn=os("CREPE_MENU"),re=at({show:()=>{},hide:()=>{}},"menuAPICtx");function Ss(n,t){n.set(wn.key,{view:e=>new Ps(n,e,t)})}class Ps{constructor(t,e,s){rt(this,_t),rt(this,Dt),rt(this,Nt),rt(this,Z),rt(this,j,null),this.update=v=>{x(this,Z).update(v)},this.show=v=>{N(this,j,v),x(this,Nt).value="",x(this,Z).show()},this.hide=()=>{N(this,j,null),x(this,Z).hide()},this.destroy=()=>{x(this,Z).destroy(),x(this,Dt).unmount(),x(this,_t).remove()};const a=document.createElement("div");a.classList.add("milkdown-slash-menu");const l=tt(!1),r=tt("");N(this,Nt,r);const c=this.hide,p=Je(Ls,{ctx:t,config:s,show:l,filter:r,hide:c});N(this,Dt,p),p.mount(a),N(this,_t,a);const w=this;N(this,Z,new is({content:x(this,_t),debounce:20,shouldShow(v){if(Bn(v.state.selection)||Wn(v.state.selection))return!1;const k=this.getContent(v,f=>["paragraph","heading"].includes(f.type.name));if(k==null||!xs(v.state.selection))return!1;const V=x(w,j);return r.value=k.startsWith("/")?k.slice(1):k,typeof V=="number"?v.state.doc.resolve(V).node()!==v.state.doc.resolve(v.state.selection.from).node()?(N(w,j,null),!1):!0:!!k.startsWith("/")},offset:10})),x(this,Z).onShow=()=>{l.value=!0},x(this,Z).onHide=()=>{l.value=!1},this.update(e),t.set(re.key,{show:v=>this.show(v),hide:()=>this.hide()})}}_t=new WeakMap;Dt=new WeakMap;Nt=new WeakMap;Z=new WeakMap;j=new WeakMap;function xs(n){if(!(n instanceof Ut))return!1;const{$head:t}=n,e=t.parent;return t.parentOffset===e.content.size}const Bs=Xe({props:{onAdd:{type:Function,required:!0},addIcon:{type:Function,required:!0},handleIcon:{type:Function,required:!0}},setup(n){const t=tt();return()=>L(In,null,L("div",{ref:t,class:"operation-item",onPointerdown:e=>{var s;e.preventDefault(),e.stopPropagation(),(s=t.value)==null||s.classList.add("active")},onPointerup:e=>{var s;e.preventDefault(),e.stopPropagation(),(s=t.value)==null||s.classList.remove("active"),n.onAdd()}},L(ee,{icon:n.addIcon()})),L("div",{class:"operation-item"},L(ee,{icon:n.handleIcon()})))}});var fn=n=>{throw TypeError(n)},_n=(n,t,e)=>t.has(n)||fn("Cannot "+e),q=(n,t,e)=>(_n(n,t,"read from private field"),e?e.call(n):t.get(n)),It=(n,t,e)=>t.has(n)?fn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Vt=(n,t,e,s)=>(_n(n,t,"write to private field"),t.set(n,e),e),qt,G,Ft,Gt;class Ws{constructor(t,e){It(this,qt),It(this,G),It(this,Ft),It(this,Gt),this.update=()=>{q(this,G).update()},this.destroy=()=>{q(this,G).destroy(),q(this,qt).remove(),q(this,Ft).unmount()},this.onAdd=()=>{const c=q(this,Gt),p=c.get(I);p.hasFocus()||p.focus();const{state:w,dispatch:v}=p,k=q(this,G).active;if(!k)return;const f=k.$pos.pos+k.node.nodeSize;let H=w.tr.insert(f,sn.type(c).create());H=H.setSelection(Ut.near(H.doc.resolve(f))),v(H.scrollIntoView()),q(this,G).hide(),c.get(re.key).show(H.selection.from)};var s,a;Vt(this,Gt,t);const l=document.createElement("div");l.classList.add("milkdown-block-handle");const r=Je(Bs,{onAdd:this.onAdd,addIcon:(s=e==null?void 0:e.handleAddIcon)!=null?s:()=>xn,handleIcon:(a=e==null?void 0:e.handleDragIcon)!=null?a:()=>Cs});r.mount(l),Vt(this,Ft,r),Vt(this,qt,l),Vt(this,G,new as({ctx:t,content:l,getOffset:()=>16,getPlacement:({active:c,blockDom:p})=>{if(c.node.type.name==="heading")return"left";let w=0;c.node.descendants(C=>{w+=C.childCount});const v=c.el,k=v.getBoundingClientRect(),V=p.getBoundingClientRect(),f=window.getComputedStyle(v),H=Number.parseInt(f.paddingTop,10)||0,d=Number.parseInt(f.paddingBottom,10)||0,M=k.height-H-d,g=V.height;return w>2||g<M?"left-start":"left"}})),this.update()}}qt=new WeakMap;G=new WeakMap;Ft=new WeakMap;Gt=new WeakMap;function $s(n,t){n.set(Kt.key,{filterNodes:e=>!nn(a=>["table","blockquote","math_inline"].includes(a.type.name))(e)}),n.set(Jt.key,{view:()=>new Ws(n,t)})}const Fs=(n,t)=>{n.config(e=>$s(e,t)).config(e=>Ss(e,t)).use(re).use(Jt).use(wn)};export{Fs as defineFeature};
