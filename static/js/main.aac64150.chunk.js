(this["webpackJsonpaux-router-example"]=this["webpackJsonpaux-router-example"]||[]).push([[0],{35:function(e,n,a){e.exports=a(52)},36:function(e,n,a){},52:function(e,n,a){"use strict";a.r(n);a(36);var t,l=a(0),m=a.n(l),c=a(6),o=a.n(c),r=a(3),p=a(29),i=function(e){var n=Object(r.e)(),a=Object(r.f)();return Object(l.createElement)("button",{onClick:function(){var t,l=n.location.pathname,m=e.componentName?e.componentName:function(){if(a.url.lastIndexOf("(")<0)throw"AuxLink should have componentName if it is not within AuxRoute element!";return a.url.substring(a.url.lastIndexOf("(")+1)}();m.indexOf(")")>=0?(m=m.replace(")",""),t=new RegExp("("+m+")")):t=new RegExp("("+m+"\\/\\w*)"),l.match(t)?n.push(l.replace(t,m+"/"+(e.componentValue?e.componentValue:""))):n.push(l+"("+m+"/"+(e.componentValue?e.componentValue:"")+")")}},e.description)},u=function(e){var n=Object(r.e)();return Object(l.createElement)("button",{onClick:function(){var a,t=n.location.pathname;a=t.indexOf("(")>=0?e.path+t.slice(t.indexOf("(")):e.path,n.push(a)}},e.description)},g=function(e){return Object(l.createElement)(p.a,null," ",e.children)},s=function(e){return Object(l.createElement)(r.a,{path:"*"+e.path+"*",component:e.component},e.children)},d=function(e){var n=Object(r.f)();return Object(l.createElement)(r.a,{path:e.componentValue?n.url&&"/"!=n.url?"*"+n.url.replace(/[(]/g,"\\(").replace(/[)]/,"\\)")+"/"+e.componentValue+"\\)*":"*\\("+e.componentName+"/"+e.componentValue+"\\)*":"*\\("+e.componentName,component:e.component},e.children)};!function(e){e[e.Panel=0]="Panel",e[e.Modal=1]="Modal"}(t||(t={}));var E=function(e){return m.a.createElement("section",null,m.a.createElement("h1",null,e.name),m.a.createElement("ul",null,e.animals.map((function(n,a){return m.a.createElement("li",{key:"".concat(a).concat(n.name)},m.a.createElement("img",{alt:n.name,src:n.image}),m.a.createElement("div",null,m.a.createElement("h2",null,n.name),e.type===t.Modal&&m.a.createElement(i,{componentName:"modal",componentValue:n.name,description:"Open modal"}),e.type===t.Panel&&m.a.createElement(i,{componentName:"panel",componentValue:n.name,description:"Open panel"})))}))))},h=[{name:"Bella",age:3,image:"/cat1.png"},{name:"Kitty",age:2,image:"/cat2.png"},{name:"Charlie",age:5,image:"/cat3.png"},{name:"Leo",age:3,image:"/cat4.png"},{name:"Milo",age:1,image:"/cat5.png"}],f=[{name:"Bean",age:5,image:"/dog1.png"},{name:"Bella",age:2,image:"/dog2.png"},{name:"Axel",age:5,image:"/dog3.png"},{name:"Odie",age:3,image:"/dog4.png"},{name:"Sheba",age:1,image:"/dog5.png"}],O=a(72),b=a(73),x=function(){return m.a.createElement(g,null,m.a.createElement("nav",null,m.a.createElement(u,{path:"/cats",description:"Cats"}),m.a.createElement(u,{path:"/dogs",description:"Dogs"})),m.a.createElement(s,{path:"/cats"},m.a.createElement(E,{type:t.Modal,animals:h,name:"Cats"})),m.a.createElement(s,{path:"/dogs"},m.a.createElement(E,{type:t.Panel,animals:f,name:"Dogs"})),f.map((function(e){return m.a.createElement(d,{componentName:"panel",componentValue:e.name},m.a.createElement(O.a,{anchor:"right",variant:"persistent",open:!0,onClose:function(){},onOpen:function(){}},m.a.createElement("div",{className:"panel"},m.a.createElement("img",{src:e.image,alt:e.name}),m.a.createElement("p",null,"Name: ",e.name),m.a.createElement("p",null,"Age: ",e.age),m.a.createElement(i,{componentName:"panel",description:"Close"}))))})),h.map((function(e){return m.a.createElement(d,{componentName:"modal",componentValue:e.name},m.a.createElement(b.a,{open:!0,onClose:function(){}},m.a.createElement("div",{className:"modal"},m.a.createElement("img",{src:e.image,alt:e.name}),m.a.createElement("p",null,"Name: ",e.name),m.a.createElement("p",null,"Age: ",e.age),m.a.createElement(i,{componentName:"modal",description:"Close"}))))})))};o.a.render(m.a.createElement(x,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.aac64150.chunk.js.map