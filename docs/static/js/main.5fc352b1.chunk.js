(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),a=n.n(r),i=(n(10),n(4)),o=n(0),l=function(e){var t=e.personajes,n=t.name,s=t.species,c=t.gender,r=t.status,a=t.image;t.id;return Object(o.jsxs)("article",{children:[Object(o.jsx)("img",{className:"img",src:a,alt:"foto de ".concat(a)}),Object(o.jsxs)("p",{children:[" ",n," "]}),Object(o.jsxs)("p",{children:[" ",s]}),Object(o.jsxs)("p",{children:[" ",c]}),Object(o.jsxs)("p",{children:[" ",r]})]})},j=function(e){var t=e.personajes.map((function(e){return Object(o.jsx)(l,{personajes:e})}));return Object(o.jsx)("section",{className:"",children:Object(o.jsxs)("ul",{className:"listPersons",children:[" ",t]})})},u=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)("div",{className:"",children:Object(o.jsx)("input",{name:"nombre",className:"",type:"text",id:"",placeholder:"Busca a tu personaje",onChange:function(e){console.log(e.target.value)}})}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("select",{className:"formControl",name:"especie",children:Object(o.jsx)("option",{value:"",children:" Selecciona la especie"})})})]}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("input",{type:"submit",className:"classBtn",value:"Buscar personaje"})})]}),Object(o.jsx)("fieldset",{className:"claim",children:"\xa1Aqu\xed encontrar\xe1s m\xe1s info de tus personajes favoritos!"}),Object(o.jsx)("div",{children:Object(o.jsx)("h4",{children:" Tus resultados"})})]})},d=(n(12),n.p+"static/media/rickandmorty-logo.de13d484.png"),m=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,gender:e.gender,image:e.image,origin:e.origin.name,origin2:e.origin.url,episode:e.episode.length}}))}))},h={get:function(e,t){var n=localStorage.getItem(e);return null===n?t:JSON.parse(n)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},b=function(){var e=Object(s.useState)(h.get("pj",[])),t=Object(i.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(s.useEffect)((function(){0===n.length&&m().then((function(e){c(e),console.table(e)}))}),[]),Object(s.useEffect)((function(){h.set("personajes",n)}),[n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{className:"",children:Object(o.jsx)("h1",{children:Object(o.jsx)("img",{src:d,alt:"Rick and Morty logo",className:"logo"})})}),Object(o.jsxs)("main",{children:[Object(o.jsx)(u,{children:" "}),Object(o.jsx)(j,{personajes:n})]}),Object(o.jsx)("footer",{className:"footer",children:"Marina Ben\xedtez S\xe1nchez"})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.5fc352b1.chunk.js.map