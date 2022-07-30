"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[410],{1167:function(e,n,t){t.d(n,{Z:function(){return c}});var r="PageHeading_title__a9rfW",a=t(184);function c(e){var n=e.text;return(0,a.jsx)("h1",{className:r,children:n})}},5493:function(e,n,t){var r=t(501),a=t(184);n.Z=function(e){var n=e.movies,t=e.prevLocation;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:n.map((function(e){var n=e.id,c=e.original_title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(n),state:{from:t},children:(0,a.jsx)("h3",{children:c})})},n)}))})})}},478:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(885),a=t(6871),c=t(2791),u=t(501),o={SearchForm:"SearchForm_SearchForm__jbIQn","SearchForm-button":"SearchForm_SearchForm-button__IrjWW","SearchForm-button-label":"SearchForm_SearchForm-button-label__xPh3F","SearchForm-input":"SearchForm_SearchForm-input__v5K3g"},i=t(184),s=function(e){var n=e.onSearch,t=(0,c.useState)(""),a=(0,r.Z)(t,2),u=a[0],s=a[1],f=function(){return s("")};return(0,i.jsxs)("form",{className:o.SearchForm,onSubmit:function(e){e.preventDefault(),u.trim()&&(n(u),f())},children:[(0,i.jsx)("input",{className:o["SearchForm-input"],type:"text",name:"query",value:u,onChange:function(e){s(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Enter movie name.."}),(0,i.jsx)("button",{type:"submit",className:o.button,children:"Search"})]})},f=t(4390),l=t(5493),h=t(1167),p=function(){var e=(0,u.lr)(),n=(0,r.Z)(e,2),t=n[0],o=n[1],p=(0,c.useState)([]),v=(0,r.Z)(p,2),m=v[0],d=v[1],g=(0,c.useState)(""),_=(0,r.Z)(g,2),S=_[0],x=_[1],b=(0,c.useState)(!1),w=(0,r.Z)(b,2),F=w[0],y=w[1],j=(0,a.TH)(),k=t.get("query");return(0,c.useEffect)((function(){if(k){y(!0),(0,f.Hq)(k).then((function(e){e.length||alert("No movies found!"),d(e)})).catch((function(e){x("Ooops. Something went wrong..."),console.log(e)})).finally(y(!1))}}),[k]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{text:"Movie Search"}),F&&"Loading ...",S&&(0,i.jsx)("div",{children:S}),(0,i.jsx)(s,{onSearch:function(e){o({query:"".concat(e)})}}),m&&(0,i.jsx)(l.Z,{movies:m,prevLocation:j})]})}},4390:function(e,n,t){t.d(n,{Hq:function(){return m},XT:function(){return v},fU:function(){return g},l2:function(){return d},sv:function(){return _}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),o=t.n(u),i="d2088e493093cc1b7e7b50d5b735bf4d";o().defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/get-trending",f="/search/movie",l="/movie",h="/credits",p="/reviews",v=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,o().get("".concat(s,"?api_key=").concat(i,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,o().get("".concat(f,"?api_key=").concat(i,"&page=").concat(t,"&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(l,"/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(n).concat(h,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,o().get("/movie/".concat(n).concat(p,"?api_key=").concat(i,"&language=en-US&page=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=MoviesPage.d09ce0da.chunk.js.map