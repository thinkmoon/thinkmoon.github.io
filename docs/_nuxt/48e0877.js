(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{339:function(t,e,r){"use strict";r(17);var n=r(340),c=r.n(n),o=r(0),l=c.a.create({baseURL:"http://localhost:8080",timeout:5e4});l.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t.data.data}),(function(t){return Promise.reject(t)})),o.default.prototype.$axios=l,e.a=l},370:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(57),r(73),r(104),r(339)),o=r(369),l=r.n(o),d=new l.a.Renderer;l.a.setOptions({renderer:d,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var f=l.a,m={validate:function(t){var e=t.params;return/^\d+$/.test(e.cid)},head:function(){return{title:this.article.title}},computed:{content:function(){return f(this.article.text.replace("\x3c!--markdown--\x3e",""),{breaks:!0})}},data:function(){return{params:{},article:{text:""}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.abrupt("return",{params:r});case 2:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;c.a.get("/post/".concat(this.params.cid)).then((function(e){t.article=e,t.$nextTick((function(){hljs.highlightAll()}))}))}},h=r(51),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"article-content"},[r("h1",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.content)}})])])}),[],!1,null,null,null);e.default=component.exports}}]);