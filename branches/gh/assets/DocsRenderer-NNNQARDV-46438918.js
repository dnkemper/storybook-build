import{_ as h}from"./iframe-a2d9ccde.js";import{g as d,R as o,r as a,h as E,A as R,H as x,D as y}from"./index-eb85e5ee.js";import"../sb-preview/runtime.js";import"./index-f4dda215.js";import"./index-1b441bc2.js";import"./index-356e4a49.js";var c={},u=d;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await v(t);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},e))})},g=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},w={code:E,a:R,...x},f=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},O=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components},i=y;return new Promise((m,p)=>{h(()=>import("./index-9f991e00.js"),["assets/index-9f991e00.js","assets/index-603d7ee5.js","assets/index-eb85e5ee.js","assets/iframe-a2d9ccde.js","assets/index-f4dda215.js","assets/index-1b441bc2.js","assets/index-356e4a49.js"]).then(({MDXProvider:l})=>_(o.createElement(f,{showException:p,key:Math.random()},o.createElement(l,{components:s},o.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{g(e)}}};export{O as DocsRenderer,w as defaultComponents};
