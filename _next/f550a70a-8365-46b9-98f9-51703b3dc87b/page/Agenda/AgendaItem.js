
          window.__NEXT_REGISTER_PAGE('/Agenda/AgendaItem', function() {
            var comp = module.exports=webpackJsonp([34],{170:function(e,t,n){var r=n(187),i=n(131)("toStringTag"),a="Arguments"==r(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=o(t=Object(e),i))?n:a?r(t):"Object"==(l=r(t))&&"function"==typeof t.callee?"Arguments":l}},184:function(e,t,n){var r=n(170),i=n(131)("iterator"),a=n(177);e.exports=n(53).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||a[r(e)]}},203:function(e,t,n){e.exports={default:n(222),__esModule:!0}},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(228),a=r(i),o=n(203),l=r(o);t.default=function(){function e(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,d=(0,l.default)(e);!(r=(o=d.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,a.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},222:function(e,t,n){n(181),n(175),e.exports=n(225)},225:function(e,t,n){var r=n(167),i=n(184);e.exports=n(53).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},228:function(e,t,n){e.exports={default:n(229),__esModule:!0}},229:function(e,t,n){n(181),n(175),e.exports=n(230)},230:function(e,t,n){var r=n(170),i=n(131)("iterator"),a=n(177);e.exports=n(53).isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||a.hasOwnProperty(r(t))}},243:function(e,t,n){(function(t){var n;n="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=n}).call(t,n(209))},557:function(e,t,n){e.exports=n(558)},558:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(207),a=r(i),o=n(12),l=r(o),d=n(10),m=r(d),f=n(11),u=r(f),c=n(13),p=r(c),s=n(14),g=r(s),h=n(143),_=r(h),y=n(3),v=r(y),w=n(27),I=r(w),x=n(54),b=(r(x),n(243)),E=r(b),C=I.default.div.withConfig({displayName:"AgendaItem__Wrapper",componentId:"s67mdp7-0"})(["display:flex;&:not(:first-child){margin-top:3.84rem;}"]),A=I.default.div.withConfig({displayName:"AgendaItem__Time",componentId:"s67mdp7-1"})(["color:white;font-size:1.13em;text-align:right;width:2.5em;flex-shrink:0;padding-left:0.6em;"]),k=I.default.div.withConfig({displayName:"AgendaItem__End",componentId:"s67mdp7-2"})(['margin-top:0.3rem;position:relative;;&:before{content:"~";position:absolute;left:-0.6em;}']),N=I.default.div.withConfig({displayName:"AgendaItem__Divider",componentId:"s67mdp7-3"})(['margin-left:1.79rem;margin-right:1.79rem;flex-shrink:0;display:flex;align-items:center;;flex-direction:column;&:before{content:"";display:block;width:0.9rem;height:0.9em;margin-top:0.15rem;background-color:#321F6E;border-radius:50%;opacity:0.5;border:#02f674 0.2rem solid;}&:after{content:"";display:block;width:1px;background-color:#02f674;flex-grow:1;}@media (max-width:30rem){margin-left:1.39rem;margin-right:0.79rem;}']),T=I.default.div.withConfig({displayName:"AgendaItem__Content",componentId:"s67mdp7-4"})(["position:relative;top:-0.1em;"]),M=I.default.h2.withConfig({displayName:"AgendaItem__Title",componentId:"s67mdp7-5"})(["font-size:1.5rem;margin-bottom:1.2rem;"]),O=I.default.p.withConfig({displayName:"AgendaItem__Tags",componentId:"s67mdp7-6"})(["display:block;margin-top:.6rem;margin-bottom:1.4rem;"]),j=I.default.p.withConfig({displayName:"AgendaItem__Tag",componentId:"s67mdp7-7"})(["display:inline-block;color:#C2B9EE;font-size:1.13rem;line-height:1.63rem;letter-spacing:-0.001rem;border:1px solid #C2B9EE;padding:.1rem .6rem;margin:.3rem;@media (max-width:30rem){font-size:0.63rem;margin-left:0.79rem;margin-right:0.79rem;}"]),z=I.default.div.withConfig({displayName:"AgendaItem__Speaker",componentId:"s67mdp7-8"})(["display:flex;flex-wrap:wrap;align-items:center;font-weight:500;color:#C2B9EE;letter-spacing:0.05rem;margin-bottom:1.2rem;"]),B=I.default.img.withConfig({displayName:"AgendaItem__Avatar",componentId:"s67mdp7-9"})(["width:2.5rem;margin-right:0.6rem;border-radius:100%;"]),P=I.default.div.withConfig({displayName:"AgendaItem__Name",componentId:"s67mdp7-10"})(['flex-grow:1;flex-basis:12rem;margin-top:1rem;&:after{content:">>";margin-left:0.2rem;}']),D=I.default.div.withConfig({displayName:"AgendaItem__WrapHighlight",componentId:"s67mdp7-11"})(["display:flex;flex-wrap:wrap;"]),F=I.default.div.withConfig({displayName:"AgendaItem__Highlight",componentId:"s67mdp7-12"})(["letter-spacing:.1rem;padding:.5rem;margin:.5rem .5rem .5rem 0;border:1px solid #02f694;"]),H=I.default.div.withConfig({displayName:"AgendaItem__Item",componentId:"s67mdp7-13"})(["margin-bottom:3rem;&:last-child{margin-bottom:1rem;}"]),S=I.default.div.withConfig({displayName:"AgendaItem__Description",componentId:"s67mdp7-14"})(["color:#C2B9EE;font-size:1rem;line-height:1.3rem;"]),W=function(e){function t(){var e,n,r,i;(0,m.default)(this,t);for(var a=arguments.length,o=Array(a),d=0;d<a;d++)o[d]=arguments[d];return n=r=(0,p.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(o))),r.onClick=function(e){E.default.location="/"+e},r.renderTag=function(e){return v.default.createElement(j,{key:e},e)},i=n,(0,p.default)(r,i)}return(0,g.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.time,r=t.items,i=(0,a.default)(n,2),o=i[0],l=i[1];return v.default.createElement(C,null,v.default.createElement(A,null,v.default.createElement("div",null,o),v.default.createElement(k,null,l)),v.default.createElement(N,null),v.default.createElement(T,null,(0,_.default)(r,function(t){var n=t.highlights,r=t.title,i=t.speakers,a=t.descriptions,o=t.tags;return v.default.createElement(H,{key:r},n&&v.default.createElement(D,null,n.map(function(e){return v.default.createElement(F,null,e)})),v.default.createElement(M,null,r),i&&i.map(function(t){return v.default.createElement(z,{onClick:function(){return e.onClick(t.id)}},v.default.createElement(B,{src:"/static/speaker/"+t.id+".png"}),v.default.createElement(P,null,t.name))}),a&&v.default.createElement(v.default.Fragment,null,(0,_.default)(a,function(e){return v.default.createElement(S,null,e)})),o&&v.default.createElement(O,null,o.map(e.renderTag)))})))}}]),t}(y.PureComponent);W.defaultProps={time:[],items:[]},t.default=W}},[557]);
            return { page: comp.default }
          })
        