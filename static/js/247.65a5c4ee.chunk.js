"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(n,t,e){e.r(t);var r=e(439),c=e(791),a=e(390),i=e(689),u=e(854),o=e(424),s=e(184);t.default=function(){var n=(0,c.useState)(!1),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,c.useState)([]),l=(0,r.Z)(f,2),h=l[0],d=l[1],x=(0,i.UO)().movieId;return(0,c.useEffect)((function(){x&&(p(!0),(0,a.uV)("/movie",x).then((function(n){d(n.cast)})).catch(a.NI).finally(p(!1)))}),[x]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Cast:"}),e&&(0,s.jsx)(u.a,{}),h&&(0,s.jsx)(o.c0,{children:h.map((function(n){var t=n.id,e=n.name,r=n.character,c=n.profile_path;return(0,s.jsxs)(o.iH,{children:[(0,s.jsx)("b",{children:e}),(0,s.jsxs)("p",{children:["character:",r]}),(0,s.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500/".concat(c):(0,s.jsx)("p",{children:"Ups, ... noImagefound"}),alt:e,width:"100"})]},t)}))})]})}},854:function(n,t,e){e.d(t,{a:function(){return a}});var r=e(137),c=e(184),a=function(){return(0,c.jsx)(r.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},424:function(n,t,e){e.d(t,{$j:function(){return p},c0:function(){return o},iH:function(){return s}});var r,c,a,i=e(168),u=e(867),o=u.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),s=u.ZP.li(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 10px;\n  width: 154px;\n  max-height: 400px;\n  cursor: pointer;\n  overflow: hidden;\n"]))),p=u.ZP.div(a||(a=(0,i.Z)(["\n  min-height: 169px;\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n"])))},390:function(n,t,e){e.d(t,{Hx:function(){return v},NI:function(){return g},Y5:function(){return d},uV:function(){return w},v9:function(){return l},vw:function(){return p}});var r=e(861),c=e(757),a=e.n(c),i=e(294),u=e(694),o="https://api.themoviedb.org/3",s="43596775cda6588db61d2519acdb98b6";function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o).concat(t,"?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"?api_key=").concat(s,"&query=").concat(e),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"/credits?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"/reviews?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){u.Notify.failure("Oops! Something went wrong! Try reloading the page",{position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"})}}}]);
//# sourceMappingURL=247.65a5c4ee.chunk.js.map