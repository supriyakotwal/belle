(this.webpackJsonpBelle=this.webpackJsonpBelle||[]).push([[0],{38:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(15),c=s.n(r),i=s(5),o=s(44),l=s(3),j=s(4),d=s(7),m=s(6),b=s(10),h=Object(b.a)({forceRefresh:!0}),u=s(1),O=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(l.a)(this,s),t.call(this)}return Object(j.a)(s,[{key:"render",value:function(){return window.sessionStorage.getItem("isUserLoggedIn")||h.push("/"),Object(u.jsx)(n.a.Fragment,{children:Object(u.jsxs)("center",{children:["Welcome ",window.sessionStorage.getItem("name"),Object(u.jsx)("br",{}),Object(u.jsx)("img",{className:"justify-content-center mb-4",src:"../../assets/bella=radiant.png",alt:""})]})})}}]),s}(n.a.Component);var g=Object(i.b)((function(e){return{}}))(O),p=s(22);function x(){return{type:"LOGIN_SUCCESS",payload:fetch("https://hub.dummyapis.com/vj/CWmKHMw",{method:"GET"}).then((function(e){return e.json()}))}}var f=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.authenticateUser=function(){var e=a.state.loginDetails;e&&(a.state.email===e.email&&a.state.password===e.password?(window.sessionStorage.setItem("name",e.name),window.sessionStorage.setItem("isUserLoggedIn",!0),h.push("/home")):(window.sessionStorage.setItem("isUserLoggedIn",!1),a.setState({errorMessages:"Invalid Username or Password"})))},a.login=function(){""===a.state.email?a.setState({errorMessages:"Please enter Username"}):""===a.state.password?a.setState({errorMessages:"Please enter Password"}):(a.setState({errorMessages:""}),a.props.dispatch(x()))},a.state={email:"",password:"",message:"",errorMessages:"",loginDetails:""},a}return Object(j.a)(s,[{key:"componentWillReceiveProps",value:function(e){return e.login&&e.login[0]&&e.login[0].token&&(this.setState({loginDetails:e.login}),this.authenticateUser()),null}},{key:"render",value:function(){return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)("div",{className:"login-container"}),Object(u.jsxs)("div",{className:"login",children:[" ",Object(u.jsx)("br",{}),Object(u.jsx)("center",{children:Object(u.jsx)("img",{className:"justify-content-center mb-4",src:"../../assets/Logo-Butterfly.svg",alt:"",width:"72",height:"57"})}),Object(u.jsxs)("main",{className:"form-signin",children:[Object(u.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Login"}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"email",name:"email",required:!0,className:"form-control",id:"floatingInput",placeholder:"name@example.com",onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"floatingInput",children:"Email"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"password",name:"password",required:!0,className:"form-control",id:"floatingPassword",placeholder:"Password",onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"floatingPassword",error:"invalid",children:"Password"})]}),Object(u.jsx)("div",{className:"checkbox mb-3",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(u.jsx)("p",{className:"mt-5 mb-3 errorMessages",children:this.state.errorMessages}),Object(u.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",onClick:this.login,children:"Login"}),Object(u.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"\xa9 2020\u20132021"})]})]})]})}}]),s}(n.a.Component);var v=Object(i.b)((function(e){return{login:e.login}}))(f);function w(){return{type:"PRODUCT_LIST",payload:fetch("https://hub.dummyapis.com/vj/NpB8oPO",{method:"GET"}).then((function(e){return e.json()}))}}var y=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={products:null},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.props.dispatch(w())}},{key:"render",value:function(){var e,t=this.props.productList;return t&&t.map((function(t){e=t.product})),Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)("div",{className:"row",style:{marginLeft:"15px"},children:e&&e.map((function(e){return Object(u.jsx)("div",{className:"col-sm-6",style:{marginBottom:"15px"},children:Object(u.jsxs)("div",{className:"card",style:{width:"10rem"},children:[Object(u.jsx)("img",{src:e.imgUrl,className:"card-img-top",alt:"...",style:{height:"5rem"}}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:e.name}),Object(u.jsx)("p",{className:"card-text",children:e.category}),Object(u.jsx)("a",{href:"/",className:"btn btn-primary",children:"Go somewhere"})]})]})},e.id)}))})})}}]),s}(n.a.Component);var N=Object(i.b)((function(e){return{productList:e.product}}))(y);function S(){return Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(v,{})}),Object(u.jsx)(o.a,{path:"/home",children:Object(u.jsx)(g,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/products",children:Object(u.jsx)(N,{})})]})}s(38);var I=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).logout=function(){window.sessionStorage.removeItem("isUserLoggedIn"),window.sessionStorage.removeItem("name"),window.sessionStorage.removeItem("token"),h.push("/")},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"navSidebar",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"navsidebar-image",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/",children:Object(u.jsx)("img",{className:"justify-content-center mb-4",src:"../../assets/Logo-Butterfly.svg",alt:"",width:"72",height:"57"})})}),Object(u.jsx)("li",{className:"navsidebar-item",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/home",children:"Home"})}),Object(u.jsx)("li",{className:"navsidebar-item",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/products",children:"Products"})}),Object(u.jsx)("li",{className:"navsidebar-item",children:Object(u.jsx)("a",{href:"/",onClick:this.logout,children:"Logout"})})]})})}}]),s}(n.a.Component),C=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=null;return"true"===window.sessionStorage.getItem("isUserLoggedIn")&&(e=Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsx)(I,{})})),Object(u.jsxs)(n.a.Fragment,{children:[e,Object(u.jsx)(S,{})]})}}]),s}(n.a.Component);var L=Object(i.b)()(C),k=s(14),U=s(23),P=s.n(U),M=Object(k.b)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_LIST":return t.payload;default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return t.payload;default:return e}}}),B=Object(k.c)(M,Object(k.a)(P.a));c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(i.a,{store:B,children:Object(u.jsx)(o.b,{history:h,children:Object(u.jsx)(L,{})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.31174477.chunk.js.map