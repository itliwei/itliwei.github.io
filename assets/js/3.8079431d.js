(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{161:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));n(18),n(50),n(112),n(165),n(166),n(49),n(31),n(162),n(48),n(167),n(51);var r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,a=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=s(t);return o.test(i)?t:i+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&s(t.path)===s(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var s=o[a];".."===s?i.pop():"."!==s&&i.push(s)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=s(e),i=0;i<t.length;i++)if(s(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,r){var i=n.pages,o=n.themeConfig,a=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||a.sidebar||o.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var s=a.sidebar||o.sidebar;if(s){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,s),c=u.base,l=u.config;return l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});var o=e.children||[];return 0===o.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},162:function(t,e,n){"use strict";var r=n(107),i=n(8),o=n(12),a=n(17),s=n(108),u=n(109);r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=i(t),c=String(this);if(!a.global)return u(a,c);var l=a.unicode;a.lastIndex=0;for(var f,h=[],p=0;null!==(f=u(a,c));){var d=String(f[0]);h[p]=d,""===d&&(a.lastIndex=s(c,o(a.lastIndex),l)),p++}return 0===p?null:h}]}))},164:function(t,e,n){"use strict";var r=n(0),i=n(22).find,o=n(70),a=n(13),s=!0,u=a("find");"find"in[]&&Array(1).find((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},165:function(t,e,n){n(0)({target:"Array",stat:!0},{isArray:n(33)})},166:function(t,e,n){"use strict";var r=n(0),i=n(52),o=n(14),a=n(34),s=[].join,u=i!=Object,c=a("join",",");r({target:"Array",proto:!0,forced:u||!c},{join:function(t){return s.call(o(this),void 0===t?",":t)}})},167:function(t,e,n){"use strict";var r=n(107),i=n(111),o=n(8),a=n(17),s=n(299),u=n(108),c=n(12),l=n(109),f=n(53),h=n(2),p=[].push,d=Math.min,g=!h((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);for(var s,u,c,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,h+"g");(s=f.call(g,r))&&!((u=g.lastIndex)>d&&(l.push(r.slice(d,s.index)),s.length>1&&s.index<r.length&&p.apply(l,s.slice(1)),c=s[0].length,d=u,l.length>=o));)g.lastIndex===s.index&&g.lastIndex++;return d===r.length?!c&&g.test("")||l.push(""):l.push(r.slice(d)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var f=o(t),h=String(this),p=s(f,RegExp),v=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),b=new p(g?f:"^(?:"+f.source+")",m),_=void 0===i?4294967295:i>>>0;if(0===_)return[];if(0===h.length)return null===l(b,h)?[h]:[];for(var x=0,y=0,k=[];y<h.length;){b.lastIndex=g?y:0;var $,S=l(b,g?h:h.slice(y));if(null===S||($=d(c(b.lastIndex+(g?0:y)),h.length))===x)y=u(h,y,v);else{if(k.push(h.slice(x,y)),k.length===_)return k;for(var w=1;w<=S.length-1;w++)if(k.push(S[w]),k.length===_)return k;y=x=$}}return k.push(h.slice(x)),k}]}),!g)},168:function(t,e){var n=Array.isArray;t.exports=n},169:function(t,e,n){var r=n(328)(Object,"create");t.exports=r},170:function(t,e,n){var r=n(369);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},171:function(t,e,n){var r=n(375);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},299:function(t,e,n){var r=n(8),i=n(71),o=n(1)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[o])?e:i(n)}},300:function(t,e,n){},301:function(t,e,n){var r=n(302),i=n(327);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},302:function(t,e,n){var r=n(303),i=n(347),o=n(348),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},303:function(t,e,n){var r=n(304).Symbol;t.exports=r},304:function(t,e,n){var r=n(346),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},305:function(t,e,n){},306:function(t,e,n){},307:function(t,e,n){},308:function(t,e,n){},309:function(t,e,n){},310:function(t,e,n){},313:function(t,e,n){},314:function(t,e,n){},316:function(t,e,n){},323:function(t,e,n){"use strict";var r=n(0),i=n(114).trim;r({target:"String",proto:!0,forced:n(341)("trim")},{trim:function(){return i(this)}})},324:function(t,e,n){var r=n(6),i=n(3),o=n(54),a=n(76),s=n(7).f,u=n(35).f,c=n(111),l=n(113),f=n(117),h=n(10),p=n(2),d=n(23).set,g=n(119),v=n(1)("match"),m=i.RegExp,b=m.prototype,_=/a/g,x=/a/g,y=new m(_)!==_,k=f.UNSUPPORTED_Y;if(r&&o("RegExp",!y||k||p((function(){return x[v]=!1,m(_)!=_||m(x)==x||"/a/i"!=m(_,"i")})))){for(var $=function(t,e){var n,r=this instanceof $,i=c(t),o=void 0===e;if(!r&&i&&t.constructor===$&&o)return t;y?i&&!o&&(t=t.source):t instanceof $&&(o&&(e=l.call(t)),t=t.source),k&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var s=a(y?new m(t,e):m(t,e),r?this:b,$);return k&&n&&d(s,{sticky:n}),s},S=function(t){t in $||s($,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},w=u(m),C=0;w.length>C;)S(w[C++]);b.constructor=$,$.prototype=b,h(i,"RegExp",$)}g("RegExp")},325:function(t,e,n){"use strict";var r=n(10),i=n(8),o=n(2),a=n(113),s=RegExp.prototype,u=s.toString,c=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(c||l)&&r(RegExp.prototype,"toString",(function(){var t=i(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n)}),{unsafe:!0})},326:function(t,e,n){"use strict";var r,i=n(0),o=n(19).f,a=n(12),s=n(74),u=n(17),c=n(75),l=n(24),f="".endsWith,h=Math.min,p=c("endsWith");i({target:"String",proto:!0,forced:!!(l||p||(r=o(String.prototype,"endsWith"),!r||r.writable))&&!p},{endsWith:function(t){var e=String(u(this));s(t);var n=arguments.length>1?arguments[1]:void 0,r=a(e.length),i=void 0===n?r:h(a(n),r),o=String(t);return f?f.call(e,o,i):e.slice(i-o.length,i)===o}})},327:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},328:function(t,e,n){var r=n(356),i=n(361);t.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0}},329:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},330:function(t,e){t.exports=function(t){return null==t}},332:function(t,e,n){"use strict";n.r(e);n(110);var r=n(161),i={name:"SidebarGroup",components:{DropdownTransition:n(334).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(332).default},methods:{isActive:r.e}},o=(n(394),n(11));function a(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?a(t,e):"page"===e.type&&Object(r.e)(t,e.path)}))}var s={name:"SidebarLinks",components:{SidebarGroup:Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports,SidebarLink:n(453).a},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(a(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},u=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},334:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(385),n(11)),o=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},335:function(t,e,n){"use strict";var r=n(0),i=n(336);r({target:"String",proto:!0,forced:n(337)("link")},{link:function(t){return i(this,"a","href",t)}})},336:function(t,e,n){var r=n(17),i=/"/g;t.exports=function(t,e,n,o){var a=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),s+">"+a+"</"+e+">"}},337:function(t,e,n){var r=n(2);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},338:function(t,e,n){"use strict";var r=n(300);n.n(r).a},339:function(t,e,n){var r=n(0),i=n(340);r({global:!0,forced:parseInt!=i},{parseInt:i})},340:function(t,e,n){var r=n(3),i=n(114).trim,o=n(115),a=r.parseInt,s=/^[+-]?0[Xx]/,u=8!==a(o+"08")||22!==a(o+"0x16");t.exports=u?function(t,e){var n=i(String(t));return a(n,e>>>0||(s.test(n)?16:10))}:a},341:function(t,e,n){var r=n(2),i=n(115);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},342:function(t,e,n){var r=n(343);t.exports=function(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i}},343:function(t,e,n){var r=n(344),i=n(382);t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[i(e[n++])];return n&&n==o?t:void 0}},344:function(t,e,n){var r=n(168),i=n(345),o=n(349),a=n(379);t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:o(a(t))}},345:function(t,e,n){var r=n(168),i=n(301),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(a.test(t)||!o.test(t)||null!=e&&t in Object(e))}},346:function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},347:function(t,e,n){var r=n(303),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[s]=n:delete t[s]),i}},348:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},349:function(t,e,n){var r=n(350),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,(function(t,n,r,i){e.push(r?i.replace(o,"$1"):n||t)})),e}));t.exports=a},350:function(t,e,n){var r=n(351);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},351:function(t,e,n){var r=n(352);function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(i.Cache||r),n}i.Cache=r,t.exports=i},352:function(t,e,n){var r=n(353),i=n(374),o=n(376),a=n(377),s=n(378);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},353:function(t,e,n){var r=n(354),i=n(366),o=n(373);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}},354:function(t,e,n){var r=n(355),i=n(362),o=n(363),a=n(364),s=n(365);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},355:function(t,e,n){var r=n(169);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},356:function(t,e,n){var r=n(357),i=n(358),o=n(329),a=n(360),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,l=u.toString,f=c.hasOwnProperty,h=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||i(t))&&(r(t)?h:s).test(a(t))}},357:function(t,e,n){var r=n(302),i=n(329);t.exports=function(t){if(!i(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},358:function(t,e,n){var r,i=n(359),o=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!o&&o in t}},359:function(t,e,n){var r=n(304)["__core-js_shared__"];t.exports=r},360:function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},361:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},362:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},363:function(t,e,n){var r=n(169),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return i.call(e,t)?e[t]:void 0}},364:function(t,e,n){var r=n(169),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t)}},365:function(t,e,n){var r=n(169);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},366:function(t,e,n){var r=n(367),i=n(368),o=n(370),a=n(371),s=n(372);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},367:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},368:function(t,e,n){var r=n(170),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():i.call(e,n,1),--this.size,!0)}},369:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},370:function(t,e,n){var r=n(170);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},371:function(t,e,n){var r=n(170);t.exports=function(t){return r(this.__data__,t)>-1}},372:function(t,e,n){var r=n(170);t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},373:function(t,e,n){var r=n(328)(n(304),"Map");t.exports=r},374:function(t,e,n){var r=n(171);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},375:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},376:function(t,e,n){var r=n(171);t.exports=function(t){return r(this,t).get(t)}},377:function(t,e,n){var r=n(171);t.exports=function(t){return r(this,t).has(t)}},378:function(t,e,n){var r=n(171);t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},379:function(t,e,n){var r=n(380);t.exports=function(t){return null==t?"":r(t)}},380:function(t,e,n){var r=n(303),i=n(381),o=n(168),a=n(301),s=r?r.prototype:void 0,u=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return i(e,t)+"";if(a(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},381:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},382:function(t,e,n){var r=n(301);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},383:function(t,e,n){"use strict";var r=n(305);n.n(r).a},384:function(t,e,n){"use strict";var r=n(306);n.n(r).a},385:function(t,e,n){"use strict";var r=n(307);n.n(r).a},386:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},387:function(t,e,n){"use strict";var r=n(308);n.n(r).a},388:function(t,e,n){"use strict";var r=n(309);n.n(r).a},389:function(t,e,n){"use strict";var r=n(310);n.n(r).a},391:function(t,e,n){var r=n(302),i=n(168),o=n(327);t.exports=function(t){return"string"==typeof t||!i(t)&&o(t)&&"[object String]"==r(t)}},393:function(t,e,n){"use strict";var r=n(313);n.n(r).a},394:function(t,e,n){"use strict";var r=n(314);n.n(r).a},396:function(t,e,n){"use strict";var r=n(316);n.n(r).a},458:function(t,e,n){"use strict";n.r(e);n(110),n(72),n(335);var r=n(161),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},o=n(11),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,s={name:"Home",components:{NavLink:a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(338),Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(339),n(18),n(116),n(112),n(165),n(31),n(118),n(162),n(323),n(166),n(49),n(324),n(325),n(326),n(48),n(167),n(342)),l=n.n(c),f=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=l()(e,"title","");return l()(e,"frontmatter.tags")&&(r+=" ".concat(e.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),h(t,r)},h=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t})),i=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||i?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},p={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=[],o=0;o<e.length&&!(i.length>=n);o++){var a=e[o];if(this.getPageLocalePath(a)===r&&this.isSearchable(a))if(f(t,a))i.push(a);else if(a.headers)for(var s=0;s<a.headers.length&&!(i.length>=n);s++){var u=a.headers[s];u.title&&f(t,a,u.title)&&i.push(Object.assign({},a,{path:a.path+"#"+u.slug,header:u}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},d=(n(383),Object(o.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),g=(n(384),Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),v=(n(122),n(44)),m=n(334),b=n(386),_=n.n(b),x={name:"DropdownLink",components:{NavLink:a,DropdownTransition:m.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return _()(e)===t}}},y=(n(387),{name:"NavLinks",components:{NavLink:a,DropdownLink:Object(o.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(r){return n("li",{key:r.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:r},on:{focusout:function(n){t.isLastItemOfArray(r,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(o){var a,s=e[o],u=i[o]&&i[o].label||s.lang;return s.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,o),r.some((function(t){return t.path===a}))||(a=o)),{text:u,link:a}}))};return[].concat(Object(v.a)(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(r.j)(t),{items:(t.items||[]).map(r.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}}),k=(n(388),Object(o.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function $(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var S={name:"Navbar",components:{SidebarButton:g,NavLinks:k,SearchBox:d,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt($(this.$el,"paddingLeft"))+parseInt($(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},w=(n(389),Object(o.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),C=n(451),O=n(452),L={components:{PageEdit:C.a,PageNav:O.a},props:["sidebarItems"]},j=(n(393),Object(o.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),I={name:"Sidebar",components:{SidebarLinks:n(332).default,NavLinks:k},props:["items"]},E=(n(396),{name:"Layout",components:{Home:u,Page:j,Sidebar:Object(o.a)(I,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:w},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),A=Object(o.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=A.exports}}]);