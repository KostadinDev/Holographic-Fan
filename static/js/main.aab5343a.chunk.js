(this["webpackJsonpspring-tester"]=this["webpackJsonpspring-tester"]||[]).push([[0],{27:function(e,t,n){e.exports=n(63)},32:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){e.exports=n.p+"static/media/ComputerScience-no-background-pc.07615a85.png"},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=(n(32),n(4)),s=n(5),u=n(8),l=n(7),m=n(10),d=n.n(m),p=(n(50),n(25)),h=(n(53),n(9)),f=(n(54),function(e){var t=e.children,n=Object(h.a)(e,["children"]);return r.a.createElement("button",Object.assign({className:"custom-button"},n),t)}),v=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return r.a.createElement("input",Object.assign({className:"custom-input"},n),t)},b=n(3),g=(r.a.Component,n(55),n(56),n(57),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.example.com/items").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.items;return t?r.a.createElement("div",null,"Error: ",t.message):n?r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.price)}))):r.a.createElement("div",null,"Loading...")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.aab5343a.chunk.js.map