(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(6),o=n.n(a),c=(n(12),n(13),n(1)),u=n(2),i=n(3),m=n(4),d=["Intro","Project","OpenSource","ETC","AboutMe","Contact"],s=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var l=arguments.length,a=new Array(l),o=0;o<l;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).headerMode=0,e.headerRef=r.a.createRef(),e.state={selectedMenu:d[0]},e.initElements=function(){null==e.elProject&&(e.elProject=document.querySelector("#Project"),e.elOpenSource=document.querySelector("#OpenSource"),e.elETC=document.querySelector("#ETC"),e.elAboutMe=document.querySelector("#AboutMe"),e.elContact=document.querySelector("#Contact"))},e.handleScroll=function(t){e.initElements(),console.log(window.pageYOffset);var n=window.pageYOffset,l=window.innerHeight/2;if(n<l&&0!==e.headerMode)e.headerRef.current.style.backgroundColor="transparent",e.headerMode=0;else if(n>=l&&n<window.innerHeight){e.headerMode=1;var r=(n-l)/l*.85;e.headerRef.current.style.backgroundColor="rgba(0,0,0,".concat(r,")")}else n>=window.innerHeight&&2!==e.headerMode&&(e.headerMode=2,e.headerRef.current.style.backgroundColor="rgba(0,0,0,".concat(.85,")"));n<=e.elProject.offsetTop-l?e.setState({selectedMenu:"Intro"}):n<=e.elOpenSource.offsetTop-l?e.setState({selectedMenu:"Project"}):n<=e.elETC.offsetTop-l&&e.setState({selectedMenu:"OpenSource"})},e.MenuItem=function(t){var n=t.title,l="menu-item";return e.state.selectedMenu===n&&(l+=" selected"),r.a.createElement("div",{className:l,onClick:function(){var t=document.querySelector("#"+n);t&&(window.scrollTo(0,t.offsetTop-e.headerRef.current.offsetHeight),e.setState({selectedMenu:n}))}},n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),console.log("\ud5e4\ub354\uc758 \ub514\ub4dc\ub9c8\uc6b4\ud2b8.")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{ref:this.headerRef},r.a.createElement("div",{className:"wrapper wrap-header"},r.a.createElement("div",{style:{flexGrow:"1"}}),d.map((function(t,n){return r.a.createElement(e.MenuItem,{title:t,key:n})}))))}}]),n}(r.a.Component),h=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var l=arguments.length,a=new Array(l),o=0;o<l;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).introRef=r.a.createRef(),e.handleScroll=function(t){window.pageYOffset<window.innerHeight&&(e.introRef.current.style.backgroundPosition="right bottom -".concat(window.pageYOffset/2,"px"))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),console.log("\ucef4\ud3ec\ub10c\ud2b8 \ub514\ub4dc \ub9c8\uc6b4\ud2b8.",this.introRef.current)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){console.log("\ucef4\ud3ec\ub10c\ud2b8 \ub514\ub4dc \uc5c5\ub370\uc774\ud2b8.",this.introRef.current)}},{key:"render",value:function(){var e="url(".concat("/portfolio","/assets/profile1.jpg)");return r.a.createElement("div",{id:"Intro",style:{backgroundImage:e},ref:this.introRef},r.a.createElement("div",{id:"wrap-text"},r.a.createElement("h1",null,"Developer",r.a.createElement("br",null),"\uae40\ud604\uc6b0"),r.a.createElement("p",null,"#iOS, #ANDROID, #REACT, #PHP, #AWS")))}}]),n}(r.a.Component),f=function(){return r.a.createElement("div",{id:"Project"},r.a.createElement("h1",null,"\ud504\ub85c\uc81d\ud2b8"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"))},E=function(){return r.a.createElement("div",{id:"ETC"},r.a.createElement("h1",null,"ETC"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"))},p=function(){return r.a.createElement("div",{id:"OpenSource"},r.a.createElement("h1",null,"\uc624\ud508\uc18c\uc2a4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"),r.a.createElement("h1",null,"\ud3ec\ud3f4"))},v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(s,null),r.a.createElement(f,null),r.a.createElement(p,null),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7a077d3f.chunk.js.map