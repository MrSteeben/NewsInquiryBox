(this["webpackJsonpstephen-mcmullin-project-five"]=this["webpackJsonpstephen-mcmullin-project-five"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=(a(22),a(12)),o=a(13),s=a(16),u=a(15),m=a(14),h=a.n(m),p=function(e){return e.articles.map((function(e,t){return l.a.createElement("div",{key:t,className:"articleContainer"},l.a.createElement("div",null,l.a.createElement("img",{src:e.urlToImage,alt:""})),l.a.createElement("div",{className:"contentBox"},l.a.createElement("a",{href:e.url},l.a.createElement("h2",null,e.title)),l.a.createElement("h3",null,e.author),l.a.createElement("time",null,e.publishedAt),l.a.createElement("p",null,e.description),l.a.createElement("a",{href:e.url},"Read more..."),l.a.createElement("p",{className:"newsSource"},"Source: ",e.source.name)))}))},d=(a(40),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).apiCall=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Miscellaneous";h()({url:"https://proxy.hackeryou.com",method:"GET",responseType:"json",params:{reqUrl:"https://newsapi.org/v2/everything",params:{q:t,apiKey:"a488805f03984505903cf55f276798af",language:"en",pageSize:25}}}).then((function(t){e.setState({articles:t.data.articles})})).catch((function(){console.log("Something happened to axios call, look into it!")}))},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.handleClick=function(t){t.preventDefault(),e.apiCall(e.state.userInput),e.setState({userInput:""})},e.state={articles:[],userInput:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"render",value:function(){return l.a.createElement("div",{className:"header wrapper"},l.a.createElement("div",{className:"siteName"},l.a.createElement("h1",null,"The News Inquiry Box")),l.a.createElement("fieldset",null,l.a.createElement("form",{onSubmit:this.handleClick,action:"submit"},l.a.createElement("label",{htmlFor:"newArticle"},"Search for a particular news article"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.userInput,type:"text",id:"newArticle"}),l.a.createElement("button",{onClick:this.handleClick},"Search"))),l.a.createElement("div",null,this.state.articles.length>0?l.a.createElement(p,{articles:this.state.articles}):l.a.createElement("p",null,"Try search again")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.b15a3bc5.chunk.js.map