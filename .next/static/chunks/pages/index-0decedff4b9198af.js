(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},l=r(6273),u=r(387),c=r(7190);var s={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),a=i.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,y=e.shallow,x=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,m=o(c.useIntersection({rootMargin:"200px"}),2),w=m[0],E=m[1],S=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=E&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,E,b,r,n]);var j={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}))}(e,n,d,p,v,y,x,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof b?b:n&&n.locale,M=n&&n.isLocaleDomain&&l.getDomainLocale(p,_,n&&n.locales,n&&n.domainLocales);j.href=M||l.addBasePath(l.addLocale(p,_,n&&n.defaultLocale))}return i.default.cloneElement(t,j)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,n=a.useRef(),c=o(a.useState(!1),2),s=c[0],f=c[1],d=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return a.useEffect((function(){if(!l&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var u=new Map},3678:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return i},default:function(){return l}});var n=r(5893),o=r(1664),a=r(5982),i=!0;function l(e){var t=e.posts,r="Gabriel Machado",i="Gabriel-025";return(0,n.jsxs)(a.xu,{styleSheet:{flexDirection:"column",margin:"32px auto",maxWidth:"800px",paddingHorizontal:"16px"},children:[(0,n.jsx)(a.Ee,{src:"https://github.com/".concat(i,".png"),styleSheet:{width:"150px",height:"150px",borderRadius:"50%",margin:"0 auto",border:"2px solid #F9703E"}}),(0,n.jsx)(a.xv,{variant:"heading1",tag:"h1",styleSheet:{color:"#F9703E",justifyContent:"center"},children:r}),(0,n.jsx)(o.default,{href:"/fullpost",children:(0,n.jsx)(a.xv,{tag:"a",variant:"heading4",styleSheet:{display:" block",color:"#F9703E",marginBottom:"8px",cursor:"pointer"},children:"Todos os posts"})}),(0,n.jsx)(a.xu,{styleSheet:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",marginTop:"16px",gridGap:"16px"},children:t.map((function(e,t){var r=e.title,o=e.content,a=e.id;return t<=10&&(0,n.jsx)(u,{title:r,content:o,id:a},a)}))})]})}function u(e){var t=e.title,r=e.content,i=e.id;return(0,n.jsxs)(a.xu,{styleSheet:{flexDirection:"column",border:"1px solid #F9703E",padding:"16px",boxShadow:"1px 1px 5px 0 rgba(255,69,0,0.2)",transition:".3s",borderRadius:"4px",hover:{boxShadow:"1px 1px 5px 5px rgba(255,69,0,0.2)"}},children:[(0,n.jsx)(o.default,{href:"posts/".concat(i),children:(0,n.jsx)(a.xv,{tag:"a",variant:"heading4",styleSheet:{display:" block",color:"#F9703E",marginBottom:"8px"},children:t})}),(0,n.jsxs)(a.xv,{children:[r.substring(0,140),"..."]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);