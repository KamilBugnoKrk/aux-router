(this["webpackJsonpaux-router-example"]=this["webpackJsonpaux-router-example"]||[]).push([[0],{36:function(e,a,n){e.exports=n(53)},37:function(e,a,n){},53:function(e,a,n){"use strict";n.r(a);n(37);var t,o=n(0),c=n.n(o),m=n(6),l=n.n(m),r=n(31),p=n(3),i=n(23),u=function(e){var a=Object(p.e)(),n=Object(o.useState)(l()),t=Object(r.a)(n,2),c=t[0],m=t[1];function l(){return a.location.pathname.indexOf("(".concat(e.componentName,"/").concat(e.componentValue?e.componentValue:"",")"))>=0&&e.activeClassName?e.activeClassName:""}return Object(o.useEffect)((function(){return a.listen((function(e){m(l()),console.log("You changed the page to: ".concat(e.pathname))}))}),[a]),Object(o.createElement)("a",{className:c,onClick:function(){var n,t=a.location.pathname,o=e.componentName,c=new RegExp("(".concat(o,"\\/[A-Za-z0-9_\\/\\-%$]*)"));n=t.match(c)?t.replace(c,"".concat(o,"/").concat(e.componentValue?e.componentValue:"")):t+"(".concat(o,"/").concat(e.componentValue?e.componentValue:"",")"),a.push(n)}},e.description)},s=function(e){var a=Object(p.e)(),n=Object(p.f)();return Object(o.createElement)(i.c,{to:function(){var t,o=a.location.pathname;return t=o.indexOf("(")>=0?e.path+o.slice(o.indexOf("(")):e.path,console.info(n),0==t.indexOf("/")&&(t=t.replace("/","")),"/"+t}(),activeStyle:e.activeStyle,activeClassName:e.activeClassName},e.description)},d=function(e){return Object(o.createElement)(i.b,null," ",e.children)},g=function(e){return Object(o.createElement)(p.a,{path:"*".concat(e.path,"*"),component:e.component},e.children)},E=function(e){return Object(o.createElement)(p.a,{path:function(){if(e.componentExactValue&&e.componentValue)throw"AuxRoute should have either componentValue or componentExactValue - not both at the same time!";return e.componentValue||e.componentExactValue?e.componentValue?"*\\(".concat(e.componentName,"/").concat(e.componentValue,"*"):"*\\(".concat(e.componentName,"/").concat(e.componentExactValue,"\\)*"):"*\\(".concat(e.componentName,"*")}(),component:e.component},e.children)};!function(e){e[e.Cat=0]="Cat",e[e.Dog=1]="Dog",e[e.Parrot=2]="Parrot",e[e.Owl=3]="Owl"}(t||(t={}));var f=function(e){return c.a.createElement("section",null,c.a.createElement("h1",null,e.name),c.a.createElement("ul",null,e.animals.map((function(a,n){return c.a.createElement("li",{key:"".concat(n).concat(a.name)},c.a.createElement("img",{alt:a.name,src:a.image}),c.a.createElement("div",null,c.a.createElement("h2",null,a.name),e.type===t.Cat&&c.a.createElement(u,{componentName:"modal-cat",componentValue:a.name,description:"Open modal"}),e.type===t.Dog&&c.a.createElement(u,{componentName:"panel-dog",componentValue:a.name,description:"Open panel"}),e.type===t.Parrot&&c.a.createElement(u,{componentName:"panel-parrot",componentValue:a.name,description:"Open panel"}),e.type===t.Owl&&c.a.createElement(u,{componentName:"modal-owl",componentValue:a.name,description:"Open modal"})))}))))},N=[{name:"Bella",age:3,image:"/aux-router/cat1.png",owner:{name:"John",age:34},food:[{name:"fish"}]},{name:"Kitty",age:2,image:"/aux-router/cat2.png",owner:{name:"Joanna",age:19},food:[{name:"meat"}]},{name:"Charlie",age:5,image:"/aux-router/cat3.png",owner:{name:"Adam",age:58},food:[{name:"milk"},{name:"white cheese"}]},{name:"Leo",age:3,image:"/aux-router/cat4.png",owner:{name:"Albert",age:24},food:[{name:"meat"}]},{name:"Milo",age:1,image:"/aux-router/cat5.png",owner:{name:"Grace",age:62},food:[{name:"milk"}]}],v=[{name:"Bean",age:5,image:"/aux-router/dog1.png",owner:{name:"Kamil",age:26},food:[{name:"meat"}]},{name:"Bella",age:2,image:"/aux-router/dog2.png",owner:{name:"Selin",age:32},food:[{name:"meat"}]},{name:"Axel",age:5,image:"/aux-router/dog3.png",owner:{name:"Victor",age:16},food:[{name:"meat"}]},{name:"Odie",age:3,image:"/aux-router/dog4.png",owner:{name:"Liza",age:52},food:[{name:"meat"}]},{name:"Sheba",age:1,image:"/aux-router/dog5.png",owner:{name:"Leonardo",age:34},food:[{name:"meat"}]}],h=[{name:"Dakota",age:1,image:"/aux-router/parrot1.png"},{name:"Jasper",age:3,image:"/aux-router/parrot2.png"},{name:"Ollie",age:2,image:"/aux-router/parrot3.png"}],w=[{name:"Max",age:3,image:"/aux-router/owl1.png"},{name:"Leo",age:2,image:"/aux-router/owl2.png"},{name:"Luck",age:3,image:"/aux-router/owl3.png"}],V=n(73),x=n(74),C=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Choose a type of birds:"),c.a.createElement(s,{activeClassName:"selected",path:"birds/parrots",description:"Parrots"}),c.a.createElement(s,{activeClassName:"selected",path:"birds/owls",description:"Owls"}),c.a.createElement(g,{path:"birds/parrots"},c.a.createElement(f,{type:t.Parrot,animals:h,name:"Parrots"})),c.a.createElement(g,{path:"birds/owls"},c.a.createElement(f,{type:t.Owl,animals:w,name:"Owls"})))},O=function(){return c.a.createElement(d,null,c.a.createElement("nav",null,c.a.createElement(s,{activeClassName:"selected",path:"/cats",description:"Cats"}),c.a.createElement(s,{activeClassName:"selected",path:"/dogs",description:"Dogs"}),c.a.createElement(s,{activeClassName:"selected",path:"/birds",description:"Birds"})),c.a.createElement(g,{path:"/cats"},c.a.createElement(f,{type:t.Cat,animals:N,name:"Cats"})),c.a.createElement(g,{path:"/dogs"},c.a.createElement(f,{type:t.Dog,animals:v,name:"Dogs"})),c.a.createElement(g,{path:"/birds",component:C}),v.map((function(e,a){var n,t,o;return c.a.createElement(E,{componentName:"panel-dog",componentValue:e.name},c.a.createElement(V.a,{anchor:"right",variant:"persistent",open:!0,onClose:function(){},onOpen:function(){},key:"".concat(e.name,"-").concat(a)},c.a.createElement("div",{className:"panel"},c.a.createElement("img",{src:e.image,alt:e.name}),c.a.createElement("div",{className:"links"},c.a.createElement(u,{activeClassName:"selected",componentName:"panel-dog",componentValue:"".concat(e.name),description:"Details of dog"}),c.a.createElement(u,{activeClassName:"selected",componentName:"panel-dog",componentValue:"".concat(e.name,"/").concat(e.name,"-food"),description:"Favourite dog`s food"}),c.a.createElement(u,{activeClassName:"selected",componentName:"panel-dog",componentValue:"".concat(e.name,"/").concat(e.name,"-owner"),description:"Details of owner"})),c.a.createElement(E,{componentName:"panel-dog",componentExactValue:e.name},c.a.createElement("p",null,"Name: ",e.name),c.a.createElement("p",null,"Age: ",e.age)),c.a.createElement(E,{componentName:"panel-dog",componentValue:"".concat(e.name,"/").concat(e.name,"-owner")},c.a.createElement("p",null,"Name of the owner: ",null===(n=e.owner)||void 0===n?void 0:n.name),c.a.createElement("p",null,"Age of the owner: ",null===(t=e.owner)||void 0===t?void 0:t.age)),c.a.createElement(E,{componentName:"panel-dog",componentValue:"".concat(e.name,"/").concat(e.name,"-food")},c.a.createElement("p",{className:"food"},e.name,"'s favourite food:"," ",null===(o=e.food)||void 0===o?void 0:o.map((function(a,n){var t=n!==e.food.length-1?", ":"";return c.a.createElement("span",{key:"".concat(a.name,"-").concat(n)},a.name+t)})))),c.a.createElement(u,{componentName:"panel-dog",description:"Close"}))))})),h.map((function(e,a){return c.a.createElement(E,{componentName:"panel-parrot",componentValue:e.name},c.a.createElement(V.a,{anchor:"bottom",variant:"persistent",open:!0,onClose:function(){},onOpen:function(){},key:"".concat(e.name,"-").concat(a)},c.a.createElement("div",{className:"panel"},c.a.createElement("img",{src:e.image,alt:e.name}),c.a.createElement("p",null,"Name: ",e.name),c.a.createElement("p",null,"Age: ",e.age),c.a.createElement(u,{componentName:"panel-parrot",description:"Close"}))))})),N.map((function(e,a){var n,t,o;return c.a.createElement(E,{componentName:"modal-cat",componentValue:e.name},c.a.createElement(x.a,{open:!0,onClose:function(){},key:"".concat(e.name,"-").concat(a)},c.a.createElement("div",{className:"modal"},c.a.createElement("img",{src:e.image,alt:e.name}),c.a.createElement("div",{className:"links"},c.a.createElement(u,{activeClassName:"selected",componentName:"modal-cat",componentValue:"".concat(e.name),description:"Details of cat"}),c.a.createElement(u,{activeClassName:"selected",componentName:"modal-cat",componentValue:"".concat(e.name,"/").concat(e.name,"-food"),description:"Favourite cat`s food"}),c.a.createElement(u,{activeClassName:"selected",componentName:"modal-cat",componentValue:"".concat(e.name,"/").concat(e.name,"-owner"),description:"Details of owner"})),c.a.createElement(E,{componentName:"modal-cat",componentExactValue:e.name},c.a.createElement("p",null,"Name: ",e.name),c.a.createElement("p",null,"Age: ",e.age)),c.a.createElement(E,{componentName:"modal-cat",componentValue:"".concat(e.name,"/").concat(e.name,"-owner")},c.a.createElement("p",null,"Name of the owner: ",null===(n=e.owner)||void 0===n?void 0:n.name),c.a.createElement("p",null,"Age of the owner: ",null===(t=e.owner)||void 0===t?void 0:t.age)),c.a.createElement(E,{componentName:"modal-cat",componentValue:"".concat(e.name,"/").concat(e.name,"-food")},c.a.createElement("p",{className:"food"},e.name,"'s favourite food:"," ",null===(o=e.food)||void 0===o?void 0:o.map((function(a,n){var t=n!==e.food.length-1?", ":"";return c.a.createElement("span",null,a.name+t)})))),c.a.createElement(u,{componentName:"modal-cat",description:"Close"}))))})),w.map((function(e,a){return c.a.createElement(E,{componentName:"modal-owl",componentValue:e.name},c.a.createElement(x.a,{open:!0,onClose:function(){},key:"".concat(e.name,"-").concat(a)},c.a.createElement("div",{className:"modal"},c.a.createElement("img",{src:e.image,alt:e.name}),c.a.createElement("p",null,"Name: ",e.name),c.a.createElement("p",null,"Age: ",e.age),c.a.createElement(u,{componentName:"modal-owl",description:"Close"}))))})))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.088a535f.chunk.js.map