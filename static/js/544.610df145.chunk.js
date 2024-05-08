"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{854:function(n,t,e){e.d(t,{a:function(){return a}});var r=e(137),c=e(184),a=function(){return(0,c.jsx)(r.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},368:function(n,t,e){var r=e(424),c=e(689),a=e(87),i=e(184);t.Z=function(n){var t=n.films,e=(0,c.TH)();return console.log(e),(0,i.jsx)(r.c0,{children:t.map((function(n){var t=n.id,c=n.title,u=n.poster_path;return(0,i.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,i.jsxs)(r.iH,{children:[(0,i.jsx)("img",{src:u?"https://image.tmdb.org/t/p/w500/".concat(u):(0,i.jsx)("p",{children:"Ups, ... noImagefound"}),alt:c,width:"154",height:"231"}),(0,i.jsx)(r.$j,{children:(0,i.jsx)("h3",{children:c})})]},t)},t)}))})}},424:function(n,t,e){e.d(t,{$j:function(){return p},c0:function(){return o},iH:function(){return s}});var r,c,a,i=e(168),u=e(867),o=u.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),s=u.ZP.li(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 10px;\n  width: 154px;\n  max-height: 400px;\n  cursor: pointer;\n  overflow: hidden;\n"]))),p=u.ZP.div(a||(a=(0,i.Z)(["\n  min-height: 169px;\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n"])))},544:function(n,t,e){e.r(t);var r=e(439),c=e(854),a=e(368),i=e(791),u=e(390),o=e(558),s=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,i.useState)(!0),l=(0,r.Z)(f,2),d=l[0],h=l[1];return(0,i.useEffect)((function(){e.length>0||(0,u.vw)("/trending/movie/day").then((function(n){p(n.results)})).catch(u.NI).finally(h(!1))}),[e]),(0,s.jsxs)(o.d,{children:[d&&(0,s.jsx)(c.a,{}),(0,s.jsx)("h2",{children:"Movies in trend"}),(0,s.jsx)(a.Z,{films:e})]})}},558:function(n,t,e){e.d(t,{Z:function(){return o},d:function(){return u}});var r,c,a=e(168),i=e(867),u=i.ZP.section(r||(r=(0,a.Z)(["\n/* padding: 80px; */\ndisplay: flex;\nflex-direction: column;\ngap: 20px;"]))),o=i.ZP.ul(c||(c=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n  text-decoration: underline;\n \n"])))},390:function(n,t,e){e.d(t,{Hx:function(){return w},NI:function(){return y},Y5:function(){return h},uV:function(){return g},v9:function(){return l},vw:function(){return p}});var r=e(861),c=e(757),a=e.n(c),i=e(294),u=e(694),o="https://api.themoviedb.org/3",s="43596775cda6588db61d2519acdb98b6";function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o).concat(t,"?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"?api_key=").concat(s,"&query=").concat(e),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"/credits?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"/reviews?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(){u.Notify.failure("Oops! Something went wrong! Try reloading the page",{position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"})}}}]);
//# sourceMappingURL=544.610df145.chunk.js.map