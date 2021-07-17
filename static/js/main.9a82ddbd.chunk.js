(this["webpackJsonpmovie-website"]=this["webpackJsonpmovie-website"]||[]).push([[0],{33:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(12),a=c.n(i),r=c(15),o=c(9),l=c(23),j=c(22),d=c(10),u=(c(32),c(33),c(1)),b=function(e){var t=e.favouriteComponent,c=e.detailComponent;return void 0===e.movies?Object(u.jsx)("h5",{children:"Loading... "}):Object(u.jsx)(u.Fragment,{children:e.movies.map((function(n,s){return Object(u.jsxs)("div",{className:"image-container  d-flex flex-column justify-content-start m-3",children:[Object(u.jsx)("img",{src:"http://image.tmdb.org/t/p/w185".concat(n.poster_path),alt:"movie"}),Object(u.jsxs)("div",{className:" d-flex justify-content-space-around ",children:[Object(u.jsx)("div",{onClick:function(){return e.handleFavouritesClick(n)},className:" d-flex align-items-center justify-content-center",children:Object(u.jsx)(t,{})}),Object(u.jsx)("div",{onClick:function(){return e.handleMovieDetailClick(n.id)},className:" d-flex align-items-center justify-content-center",children:Object(u.jsx)(c,{})})]})]},n.id)}))})},h=function(e){return Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("h1",{style:{textAlign:"center"},children:e.heading})})},v=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:"mr-2",children:Object(u.jsx)("button",{type:"button",className:"btn btn-success",children:"Add to Favourites"})})})},m=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("span",{className:"mr-2",children:[" ",Object(u.jsxs)("button",{type:"button",className:"btn btn-danger",children:["Remove from favourites ",Object(u.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]}),"  "]})," "]})})},x=function(e){return{type:"RECIEVE_API_DATA",data:e}},p=c(20),O=function(e){var t=Object(n.useState)(!1),c=Object(d.a)(t,2),s=c[0],i=c[1],a=e.movie,r=a.release_date.split("-").reverse().join("/");return console.log(r),Object(u.jsxs)("div",{className:"container jumbotron",style:{backgroundImage:"url(".concat("http://image.tmdb.org/t/p/original".concat(a.backdrop_path),")"),backgroundSize:"cover",marginTop:10},children:[Object(u.jsxs)("div",{onClick:e.handleMovieDetailClick,style:{cursor:"pointer"},children:[Object(u.jsx)("img",{style:{width:40,height:40},src:"https://img.icons8.com/ios-glyphs/90/000000/left.png",alt:""}),Object(u.jsx)("span",{style:{marginLeft:10,color:"black"},children:"Go back"})," "]}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"d-flex flex-direction-column details",children:[Object(u.jsx)("img",{src:"http://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:"movie poster",style:{width:300,height:400,opacity:1,marginRight:20}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)("h1",{children:a.original_title})}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("p",{children:r}),"  |  ",Object(u.jsxs)("p",{children:[" Language : ",a.original_language]})]}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsxs)("p",{children:[" User Score : ",10*a.vote_average,"%  "]}),"|  ",Object(u.jsxs)("p",{children:[" Total Votes : ",a.vote_count]}),"|  ",Object(u.jsxs)("p",{onClick:function(){i(!s)},style:{cursor:"pointer"},children:[Object(u.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/90/000000/circled-play.png",style:{width:20,height:20}})," Preview "]})]}),s&&Object(u.jsxs)("div",{children:["  ",Object(u.jsx)(p.a,{src:"https://content.jwplatform.com/manifests/yp34SRmf.m3u8",autoPlay:!0,controls:!0,width:"100%",height:"auto"})]}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("h3",{children:"OverView"}),Object(u.jsx)("span",{className:"text",children:a.overview})]})]})]})})]})},f=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:"mr-2 ",children:Object(u.jsx)("button",{type:"button",className:"btn btn-info",children:"Details"})})})},g=Object(r.b)((function(e){return console.log(e),{movies:e.data}}),{requestApiData:function(){return{type:"REQUEST_API_DATA"}}})((function(e){var t=e.movies.results,c=Object(n.useState)([]),s=Object(d.a)(c,2),i=s[0],a=s[1],r=Object(n.useState)(null),o=Object(d.a)(r,2),l=o[0],x=o[1],p=Object(n.useState)(!0),g=Object(d.a)(p,2),w=g[0],y=g[1],k=Object(n.useState)(!1),N=Object(d.a)(k,2),C=(N[0],N[1]);Object(n.useEffect)((function(){e.requestApiData(),console.log(e.movies);var t=JSON.parse(localStorage.getItem("react-movie-app-favourites"));t&&a(t)}),[]);var _=function(e){var c=t.filter((function(t){return t.id==e})),n=c.length>0?c[0]:null;x(n)},A=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return l?Object(u.jsx)("div",{children:Object(u.jsx)(O,{movie:l,handleMovieDetailClick:function(){return x(null)}})}):Object(u.jsxs)("div",{className:"container-fluid movie-app",children:[Object(u.jsx)("ul",{class:"nav justify-content-start",children:Object(u.jsx)("li",{class:"nav-item nav-link",style:{cursor:"pointer"},onClick:function(){y(!1),C(!0)},children:"Scroll down to see your Favourites"})}),w&&Object(u.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(u.jsx)(h,{heading:"Movies"})}),w&&Object(u.jsx)("div",{id:"movies",className:"row",children:Object(u.jsx)(b,{movies:t,handleFavouritesClick:function(e){var t=[].concat(Object(j.a)(i),[e]);a(t),A(t)},handleMovieDetailClick:_,favouriteComponent:v,detailComponent:f})}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(u.jsx)(h,{heading:"Favourites"})}),Object(u.jsx)("div",{id:"favorites",className:"row",children:Object(u.jsx)(b,{movies:i,handleFavouritesClick:function(e){var t=i.filter((function(t){return t.id!==e.id}));a(t),A(t)},handleMovieDetailClick:_,favouriteComponent:m,detailComponent:f})})]})})),w=Object(o.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.data;switch(c){case"RECIEVE_API_DATA":return console.log("123"),n;default:return e}}}),y=c(8),k=c.n(y),N=c(16),C=c(21),_="".concat("https://api.themoviedb.org/3","/discover/movie?sort_by=vote_average.desc&").concat("api_key=4e44d9029b1270a757cddc766a1bcb63"),A=function(){var e=Object(C.a)(k.a.mark((function e(){var t,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(_);case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),S=k.a.mark(E),D=k.a.mark(F);function E(e){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("saga"),e.next=4,Object(N.a)(A);case 4:return t=e.sent,e.next=7,Object(N.b)(x(t));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),S,null,[[0,9]])}function F(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)("REQUEST_API_DATA",E);case 2:case"end":return e.stop()}}),D)}var I=Object(l.a)(),M=Object(o.d)(w,Object(o.a)(I));I.run(F),a.a.render(Object(u.jsx)(r.a,{store:M,children:Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9a82ddbd.chunk.js.map