(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),s=a(4),l=a(5),c=a(8),u=a(6),m=a(7),d=(a(14),[{id:1,name:"Leanne Graham",userNames:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",userNames:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",userNames:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",userNames:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",userNames:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",userNames:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",userNames:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",userNames:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",userNames:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",userNames:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],p=a(1),g=a.n(p),b=(g.a.shape({toggle:g.a.func.isRequired,todoList:g.a.arrayOf(g.a.any).isRequired}),g.a.shape({userNames:g.a.arrayOf(g.a.any).isRequired,options:g.a.func.isRequired}),function(e){var t=e.todoList,a=e.toggle;return r.a.createElement("ul",{className:"todoList"},t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"todoList__checkbox",type:"checkbox",onChange:a,value:e.completed}),r.a.createElement("div",{className:"todo"},r.a.createElement("p",null,e.title),r.a.createElement("p",null,e.name),r.a.createElement("p",null,"User ID:",e.userId)))})))}),y=function(e){var t=e.options,a=e.userNames;return r.a.createElement("select",{className:"input",onChange:t},r.a.createElement("option",{selected:"selected"},"Choose a user"),a.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))},f=d.map((function(e){return{name:e.name,id:e.id}})),E=Object(m.a)(h),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todo:"",name:[],userId:0,todoTextError:!1,userError:!1},e.handleChange=function(t){var a=t.target.value;e.setState({todo:a.replace(/\s/," "),todoTextError:!1})},e.handleSelect=function(t){var a=t.target.value;e.setState({userId:Number(a),userError:!1})},e.handleClick=function(){var t=e.state,a=t.todo,n=t.name,r=t.userId;0===a.trim().length&&e.setState({todoTextError:!0}),0===r&&e.setState({userError:!0}),0!==a.trim().length&&0!==r&&(E.push({title:a,name:n,userId:r,completed:!1}),e.setState({todo:""}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"input",placeholder:"Write your text",onChange:this.handleChange,value:this.state.todo}),this.state.todoTextError&&r.a.createElement("div",null,"Enter text"),r.a.createElement(y,{options:this.handleSelect,userNames:f}),r.a.createElement("button",{type:"button",onClick:this.handleClick},"ADD"),this.state.userError&&r.a.createElement("div",null,"Choose a user"),r.a.createElement(b,{toggle:this.toggle,todoList:E})))}}]),a}(n.Component);o.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.861e1f17.chunk.js.map