(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[0],{133:function(e,a,t){e.exports=t(282)},281:function(e,a,t){},282:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),o=t.n(c),i=t(308),l=t(309),s=t(22),m=t(7),u=t(14),d=t(299),h=t(303),p=t(28),b=t(58),f=t(27),g=t.n(f),E=t(38),v=t(16),j=t(310),w=t(311),O=t(122),k=t.n(O),y=t(39),N=t(52),x=t.n(N),C=t(300),S=t(314),I=t(301),R=t(302),B=Object(d.a)((function(e){return{container:{width:"80ch",overflow:"auto",maxHeight:300,margin:"0 auto",backgroundColor:e.palette.common.white,borderRadius:"1rem",border:"1px solid #ccc",borderTopLeftRadius:0,borderTop:"none",borderTopRightRadius:0,position:"absolute",zIndex:1},movieItem:{cursor:"pointer","&:hover":{backgroundColor:Object(v.b)(e.palette.common.black,.05)}},movieImage:{width:40,height:40}}})),L=function(e){var a=e.movies,t=void 0===a?[]:a,n=B(),c=Object(m.f)();return r.a.createElement(C.a,{className:n.container},t.length>0?t.map((function(e){return r.a.createElement(S.a,{key:e._id,className:n.movieItem,onClick:function(){c.push("/search-detail/".concat(e._id))}},r.a.createElement(I.a,{className:n.movieImage},r.a.createElement(x.a,{src:e.image,alt:e.name,imageStyle:{borderRadius:"50%",width:40,height:40}})),r.a.createElement(R.a,null,e.name))})):r.a.createElement(S.a,null,r.a.createElement(R.a,null,"No results")))},D=t(121),M=t.n(D).a.create({baseURL:"https://t-connect-backend.koreasouth.cloudapp.azure.com/"});function P(e,a){return J.apply(this,arguments)}function J(){return(J=Object(E.a)(g.a.mark((function e(a,t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.post(a,t);case 3:return n=e.sent,e.abrupt("return",{hasError:!1,data:n.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{hasError:!0,data:JSON.stringify(e.t0)});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function U(){return(U=Object(E.a)(g.a.mark((function e(a){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get(a);case 3:return t=e.sent,e.abrupt("return",{hasError:!1,data:t.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{hasError:!0,data:JSON.stringify(e.t0)});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var W=Object(d.a)((function(e){return{container:{position:"relative"},search:{position:"relative",backgroundColor:Object(v.b)(e.palette.common.white,.15),border:"1px solid #ccc",borderRadius:"1rem","&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginLeft:0,width:"80ch"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:b.a[500]},inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1.5),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},hasSearchValue:{borderBottom:"none",borderBottomLeftRadius:0,borderBottomRightRadius:0}}}));var _=function(e){var a=e.value,t=void 0===a?"":a,c=e.onChange,o=e.onKeyDown,i=e.styleProp,l=e.onChangeMovie,s=Object(n.useState)(t),m=Object(u.a)(s,2),d=m[0],h=m[1],p=Object(n.useState)([]),b=Object(u.a)(p,2),f=b[0],v=b[1],O=Object(n.useState)(!1),N=Object(u.a)(O,2),x=N[0],C=N[1],S=Object(n.useState)(!0),I=Object(u.a)(S,2),R=I[0],B=I[1],D=Object(n.useCallback)((function(){B(!1)})),M=Object(n.useCallback)(Object(y.debounce)((function(){c&&c(d)}),[500]),[d]),J=Object(n.useCallback)(Object(E.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P("/search/",{name:d});case 2:(a=e.sent).hasError||(v(a.data),l&&l(a.data)),console.log(a);case 5:case"end":return e.stop()}}),e)}))),[d]),U=Object(n.useCallback)((function(e){h(e.target.value),C(!0)})),_=W(i);return Object(n.useEffect)((function(){M(),J()}),[d]),Object(n.useEffect)((function(){return window.addEventListener("click",D),function(){window.removeEventListener("click",D)}})),r.a.createElement(j.a,{className:_.container,onClick:function(e){e.stopPropagation(),B(!0)}},r.a.createElement("div",{className:"".concat(_.search," ").concat(d.length>0&&x&&R&&_.hasSearchValue)},r.a.createElement("div",{className:_.searchIcon},r.a.createElement(k.a,null)),r.a.createElement(w.a,{placeholder:"Search\u2026",classes:{root:_.inputRoot,input:_.inputInput},inputProps:{"aria-label":"search"},value:d,onChange:function(e){U(e)},onKeyDown:function(e){o&&o(e)}})),d.length>0&&x&&R&&r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"...")},r.a.createElement(L,{movies:f})))},T=Object(d.a)((function(e){return{container:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},header:{color:b.a[500],fontWeight:"medium",marginBottom:e.spacing(6)}}}));var q=function(e){var a=e.history,t=Object(n.useState)(""),c=Object(u.a)(t,2),o=c[0],i=c[1],l=T(),s=Object(n.useCallback)((function(e){13===e.keyCode&&a.push("/search?q=".concat(o))}),[o]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}})),r.a.createElement(h.a,{className:l.container},r.a.createElement(p.a,{variant:"h2",align:"center",className:l.header},"Movie Searcher"),r.a.createElement(_,{onChange:function(e){return i(e)}}))},z=t(304),G=t(59),K=Object(d.a)((function(e){return{header:{display:"flex",alignItems:"center",padding:e.spacing(1),borderBottom:"1px solid #eee"},title:{color:b.a[500],marginRight:e.spacing(2),"& a":{textDecoration:"none !important"}},watchBtn:{background:G.a[500],color:"#fff","&:hover":{background:G.a[700]}}}}));var V=function(e){var a=e.match.params.movieId,t=Object(n.useState)(null),c=Object(u.a)(t,2),o=c[0],i=c[1],l=K();return Object(n.useEffect)((function(){(function(e){return U.apply(this,arguments)})("/movie-detail/".concat(a)).then((function(e){e.hasError||i(e.data)}))}),[]),r.a.createElement(h.a,null,r.a.createElement("header",{className:l.header},r.a.createElement(p.a,{variant:"h4",className:l.title},r.a.createElement(s.b,{to:"/"},"Movie Searcher"))),r.a.createElement("main",null,o?r.a.createElement(j.a,{className:"movie-container"},r.a.createElement("div",{className:"movie-intro"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(o.image,")")}},r.a.createElement(x.a,{alt:"movie poster",src:o.image,style:{height:"100%"}}),r.a.createElement(j.a,{position:"absolute",bottom:0,margin:.5},r.a.createElement(z.a,{variant:"contained",className:l.watchBtn},"Watch movie"))),r.a.createElement("div",{className:"intro"},r.a.createElement("h2",{className:"title"},o.name),r.a.createElement("ul",{className:"detail"},r.a.createElement("li",null,"IDMB:"," ",r.a.createElement("span",null,Object(y.isEmpty)(o.imdb)?"Unknown":o.imdb)),r.a.createElement("li",null,"Nation: ",r.a.createElement("span",null,o.national)),r.a.createElement("li",null,"Genres:"," ",r.a.createElement("span",null,o.categories.map((function(e){return e.name})).join(", "))),r.a.createElement("li",null,"Release:",r.a.createElement("span",null," ",Object(y.isEmpty)(o.relases)?"Unknown":o.relases)),r.a.createElement("li",null,"Duration: ",r.a.createElement("span",null,o.time))))),r.a.createElement("div",{className:"story-line"},r.a.createElement("h2",null,"Description"),o.description)):r.a.createElement(p.a,null,"No movie detail found")))},A=t(123),H=t(315),$=t(305),F=t(306),Q=t(307),X=t(312),Y=t(124),Z=t.n(Y),ee=Object(d.a)((function(e){return{movie:Object(A.a)({width:"calc(100% / 5)",margin:e.spacing(2,0),padding:e.spacing(1),transition:"transform 0.5s ease",cursor:"pointer","&:hover":{transform:"scale(1.05)"}},e.breakpoints.down("sm"),{width:"calc(100% / 3)"}),media:{height:250,backgroundPosition:"center"}}})),ae=function(e){var a=e.movies,t=void 0===a?[]:a,n=e.history,c=ee();return r.a.createElement(Z.a,null,t.map((function(e){return r.a.createElement(H.a,{key:e._id,className:c.movie,onClick:function(){n.push("/search-detail/".concat(e._id))}},r.a.createElement($.a,{subheader:e.relases,title:e.name}),r.a.createElement(X.a,{max:10,value:parseInt(e.imdb)||0,disabled:!0,name:"rating"}),r.a.createElement(F.a,{title:e.name,image:e.image||"/fe/images/placeholder.JPG",className:c.media}),r.a.createElement(Q.a,null,e.description.length?e.description:"No descriptions"))})))},te=Object(d.a)((function(e){return{header:{display:"flex",alignItems:"center",padding:e.spacing(1),borderBottom:"1px solid #eee"},title:{color:b.a[500],marginRight:e.spacing(2),"& a":{textDecoration:"none !important"}}}})),ne=function(e){var a=e.location,t=e.history,c=new URLSearchParams(a.search).get("q")||"",o=Object(n.useState)(c),i=Object(u.a)(o,2),l=i[0],m=i[1],d=Object(n.useState)([]),b=Object(u.a)(d,2),f=b[0],g=b[1],E=te();return r.a.createElement(h.a,null,r.a.createElement("header",{className:E.header},r.a.createElement(p.a,{variant:"h4",className:E.title},r.a.createElement(s.b,{to:"/"},"Movie Searcher")),r.a.createElement(_,{value:l,onChangeMovie:function(e){g(e)},onChange:function(e){m(e)}})),r.a.createElement("main",null,r.a.createElement(p.a,{variant:"h6"},"Search results for: ",l," (",f.length,")"),l.length>0&&r.a.createElement(ae,{movies:f,history:t})))};t(281);var re=function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:q}),r.a.createElement(m.a,{exact:!0,path:"/search",component:ne}),r.a.createElement(m.a,{exact:!0,path:"/search-detail/:movieId",component:V}))},ce=t(125),oe=Object(ce.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:G.a.A400},background:{default:"#fff"}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{theme:oe},r.a.createElement(l.a,null),r.a.createElement(s.a,null,r.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.c8c6e5af.chunk.js.map