(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{337:function(t,e,r){"use strict";r(12);var n=r(338),o=r.n(n),c=r(0),l=o.a.create({baseURL:"http://localhost:8080",timeout:5e4});l.interceptors.request.use((function(t){return t}),(function(t){return console.log(t),Promise.reject(t)})),l.interceptors.response.use((function(t){return t.data.data}),(function(t){return Promise.reject(t)})),c.default.prototype.$axios=l,e.a=l},366:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(55),r(337)),c={validate:function(t){var e=t.params;return/^\d+$/.test(e.page)},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,o.a.get("/post/list",{params:r.page});case 3:return data=e.sent,console.log(data),e.abrupt("return",{list:data.records});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{list:[]}}},l=r(34),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.list,(function(e){return r("div",{key:e.cid},[r("a",{attrs:{href:"/post/"+e.cid}},[t._v(t._s(e.title))])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);