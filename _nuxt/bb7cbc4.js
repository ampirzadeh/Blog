(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{187:function(t,e,r){"use strict";r.r(e);var n=r(23),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"w-auto h-16 rounded-full",attrs:{src:"/images/me.jpg",alt:"A picture of me"}})}),[],!1,null,null,null);e.default=component.exports},188:function(t,e,r){"use strict";r.r(e);r(126),r(24);var n=r(2),l={data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}},c=r(23),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full py-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-500 truncate bg-white border border-gray-500 rounded-md focus:border-gray-300 focus:outline-none focus:bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"absolute z-10 flex-1 w-auto overflow-hidden bg-white border border-gray-300 rounded-md top-40"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex items-center px-4 py-2 leading-5 text-green-500 transition duration-150 ease-in-out hover:text-black",attrs:{to:{name:"slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},189:function(t,e,r){var content=r(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("90f0709c",content,!0,{sourceMap:!1})},192:function(t,e,r){"use strict";r(189)},193:function(t,e,r){(e=r(38)(!1)).push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}",""]),t.exports=e},210:function(t,e,r){"use strict";r.r(e);var n=r(23),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"flex"},[e("NuxtLink",{attrs:{to:"/"}},[e("Logo",{staticClass:"mb-4"})],1),this._v(" "),e("AppSearchInput",{staticClass:"ml-8"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(187).default,AppSearchInput:r(188).default})},214:function(t,e,r){"use strict";r.r(e);r(24);var n=r(2),l={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.next=6,r("tags",n.slug).only(["name","description","img","slug"]).sortBy("createdAt","asc").fetch();case 6:return c=e.sent,e.abrupt("return",{articles:l,tags:c});case 8:case"end":return e.stop()}}),e)})))()}},c=(r(192),r(23)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-8"},[r("TheHeader"),t._v(" "),r("h1",{staticClass:"text-4xl font-bold"},[t._v("Blog Posts")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"px-2 xs:w-full md:w-1/2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"slug",params:{slug:article.slug}}}},[article.img?r("img",{staticClass:"object-cover h-48 xxlmin:w-1/2 xxlmax:w-full",style:{filter:"brightness(0.6)"},attrs:{src:article.img}}):t._e(),t._v(" "),r("div",{staticClass:"flex flex-col justify-between p-6 xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v("by "+t._s(article.author.name))]),t._v(" "),r("p",{staticClass:"text-sm font-bold text-gray-600"},[t._v("\n            "+t._s(article.description)+"\n          ")])])])],1)})),0),t._v(" "),r("h3",{staticClass:"mb-4 text-2xl font-bold text-center uppercase"},[t._v("Topics")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"px-2 text-center xs:w-full md:w-1/3 lg:flex-1"},[r("NuxtLink",{attrs:{to:"/blog/tag/"+e.slug}},[r("p",{staticClass:"font-medium font-bold tracking-wider text-gray-600 uppercase text-ss"},[t._v("\n          "+t._s(e.name)+"\n        ")])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:r(210).default})}}]);