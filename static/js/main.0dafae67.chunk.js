(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(e,t,a){},43:function(e,t,a){e.exports=a(57)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=(a(48),a(49),a(23)),E=a(24),c=a(28),s=a(29),B=a(80),u=a(78),m=a(81),C=(a(50),["Intro","Projects","OpenSource","ETC","AboutMe","Contact"]),A=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).headerMode=0,e.headerRef=r.a.createRef(),e.state={selectedMenu:C[0],isDrawerShow:!1},e.initElements=function(){null==e.elProject&&(e.elProject=document.querySelector("#Projects"),e.elOpenSource=document.querySelector("#OpenSource"),e.elETC=document.querySelector("#ETC"),e.elAboutMe=document.querySelector("#AboutMe"),e.elContact=document.querySelector("#Contact"),e.elBody=document.querySelector("body"))},e.handleScroll=function(t){e.initElements(),console.log(window.pageYOffset);var a=window.pageYOffset,n=window.innerHeight/2;if(a<n&&0!==e.headerMode)e.headerRef.current.style.backgroundColor="transparent",e.headerMode=0,e.headerRef.current.style.boxShadow="none";else if(a>=n&&a<window.innerHeight){e.headerMode=1;var r=(a-n)/n*.85;e.headerRef.current.style.backgroundColor="rgba(0,0,0,".concat(r,")")}else a>=window.innerHeight&&2!==e.headerMode&&(e.headerMode=2,e.headerRef.current.style.backgroundColor="rgba(0,0,0,".concat(.85,")"),e.headerRef.current.style.boxShadow="0 1px 8px rgba(0,0,0,0.7)");var l=e.state.selectedMenu;a>=e.elBody.clientHeight-window.innerHeight-20?"Contact"!==l&&e.setState({selectedMenu:"Contact"}):a<=e.elProject.offsetTop-n?"Intro"!==l&&e.setState({selectedMenu:"Intro"}):a<=e.elOpenSource.offsetTop-n?"Projects"!==l&&e.setState({selectedMenu:"Projects"}):a<=e.elETC.offsetTop-n?"OpenSource"!==l&&e.setState({selectedMenu:"OpenSource"}):a<=e.elAboutMe.offsetTop-n?"ETC"!==l&&e.setState({selectedMenu:"ETC"}):a<=e.elContact.offsetTop-n?"AboutMe"!==l&&e.setState({selectedMenu:"AboutMe"}):"Contact"!==l&&e.setState({selectedMenu:"Contact"})},e.scrollToMenu=function(t){var a=document.querySelector("#"+t);a&&window.scrollTo(0,a.offsetTop-e.headerRef.current.offsetHeight),e.setState({selectedMenu:t,isDrawerShow:!1})},e.MenuItem=function(t){var a=t.title,n="menu-item";return e.state.selectedMenu===a&&(n+=" selected"),r.a.createElement("div",{className:n,onClick:function(){e.scrollToMenu(a)}},a)},e.drawerOpen=function(){e.setState({isDrawerShow:!0})},e.drawerClose=function(){e.setState({isDrawerShow:!1})},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),console.log("\ud5e4\ub354\uc758 \ub514\ub4dc\ub9c8\uc6b4\ud2b8.")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;console.log("\ub80c\ub354\ub7ec");var t=this.state,a=t.selectedMenu,n=t.isDrawerShow;return r.a.createElement("header",{ref:this.headerRef},r.a.createElement("div",{className:"wrapper wrap-header"},C.map((function(t,a){return r.a.createElement(e.MenuItem,{title:t,key:a})})),r.a.createElement("div",{onClick:this.drawerOpen,className:"menu-mobile"},a),r.a.createElement("i",{onClick:this.drawerOpen,className:"fas fa-angle-down"})),r.a.createElement(B.a,{open:n,onClose:this.drawerClose,anchor:"top",classes:{paper:"headerDrawerPaper"}},r.a.createElement(u.a,null,C.map((function(t,a){return r.a.createElement(m.a,{button:!0,className:"drawerItemText",onClick:function(){e.scrollToMenu(t)}},t)})))))}}]),a}(r.a.Component),d=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).introRef=r.a.createRef(),e.handleScroll=function(t){window.pageYOffset<window.innerHeight&&(e.introRef.current.style.backgroundPosition="right bottom -".concat(window.pageYOffset/2,"px"))},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),console.log("\ucef4\ud3ec\ub10c\ud2b8 \ub514\ub4dc \ub9c8\uc6b4\ud2b8.",this.introRef.current)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){console.log("\ucef4\ud3ec\ub10c\ud2b8 \ub514\ub4dc \uc5c5\ub370\uc774\ud2b8.",this.introRef.current)}},{key:"render",value:function(){return r.a.createElement("div",{id:"Intro",ref:this.introRef},r.a.createElement("div",{id:"wrap-text"},r.a.createElement("h1",null,"Developer",r.a.createElement("br",null),"\uae40\ud604\uc6b0"),r.a.createElement("p",null,"#iOS, #ANDROID, #REACT, #PHP, #AWS")))}}]),a}(r.a.Component),p=(a(55),function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"MyLink"},r.a.createElement("i",{className:"fas fa-link"}),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t))}),h=[{title:"\ubc38\ub958\ud1b5 Valuetong.com - \ubd80\ub3d9\uc0b0 \uc2e4\uac70\ub798 \uc815\ubcf4",imgSrc:"/assets/vt1.jpg",tags:"#AWS, #HybridApp, #React, #MobX, #KakaoMap, #Geometry, #\uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138, #\ubd80\ub3d9\uc0b0\uc2e4\uac70\ub798",desc:"\uac10\uc815\ud3c9\uac00\uc0ac 3\ubd84\uacfc \ud568\uaed8 \ub9cc\ub4e0 \ud504\ub85c\uc81d\ud2b8.\n\ub9ac\uc561\ud2b8\ub85c \ubc18\uc751\ud615 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4e4\uace0, Android \uc640 iOS \ub294 \uc6f9\ubdf0\ub85c \ud328\ud0a4\uc9d5\ud558\uc5ec \ud558\uc774\ube0c\ub9ac\ub4dc\uc571\uc73c\ub85c \uac1c\ubc1c\ud588\ub2e4. \uacf5\uacf5\ub370\uc774\ud130 \ud3ec\ud138\uc5d0\uc11c \ud1a0\uc9c0\uc815\ubcf4\uc640 \uac74\ubb3c\uc815\ubcf4\ub97c \uc0ac\uc6a9\ud588\uc73c\uba70, \uc815\ud655\ud55c \uc9c0\ubc88\uc8fc\uc18c\uac00 \uacf5\uac1c\ub418\uc9c0 \uc54a\ub294 \ubd80\ub3d9\uc0b0 \uc2e4\uac70\ub798 \uc815\ubcf4\ub97c \uac10\uc815\ud3c9\uac00\uc0ac \ubd84\ub4e4\uc758 \ube44\ubc95\uc54c\uace0\ub9ac\uc998(?)\uc73c\ub85c \uc9c0\ubc88\uc8fc\uc18c\ub97c \uc720\ucd94 - \ub9e4\uce6d\ud558\uc5ec \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud574\uc8fc\ub294 \uac83\uc774 \ud575\uc2ec\uc778 \uc11c\ube44\uc2a4\uc774\ub2e4.",contrib:"Android(Hybrid), \ubc18\uc751\ud615 \uc6f9(React), \uad00\ub9ac\uc790\ud398\uc774\uc9c0, API\uc11c\ubc84 \ubaa8\ub450 100% \uac1c\ubc1c",links:[{title:"[\uac1c\ubc1c\ud6c4\uae30] Valuetong.com \ubd80\ub3d9\uc0b0 \uc2e4\uac70\ub798 \uc815\ubcf4 \uc11c\ube44\uc2a4",url:"https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-Valuetongcom-%EB%B6%80%EB%8F%99%EC%82%B0-%EC%8B%A4%EA%B1%B0%EB%9E%98-%EC%82%AC%EC%9D%B4%ED%8A%B8"},{title:"\uc548\ub4dc\ub85c\uc774\ub4dc \ud558\uc774\ube0c\ub9ac\ub4dc\uc571 \uc6f9\ubdf0 WebView \uc5d0\uc11c \uce74\uce74\uc624\ud1a1 \ub85c\uadf8\uc778 (\uc571) \uc0ac\uc6a9\ud558\uae30",url:"https://kokohapps.tistory.com/entry/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C%EC%95%B1-%EC%9B%B9%EB%B7%B0-WebView-%EC%97%90%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%95%B1-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0"},{title:"iOS \ud558\uc774\ube0c\ub9ac\ub4dc\uc571, Javascript \ub85c \uc6f9\ubdf0\uc5d0 \uba54\uc138\uc9c0 \ubcf4\ub0b4\uae30 (\ub124\uc774\ud2f0\ube0c \ucf54\ub4dc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d)",url:"https://kokohapps.tistory.com/entry/iOS-%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C%EC%95%B1-Javascript-%EB%A1%9C-%EC%9B%B9%EB%B7%B0%EC%97%90-%EB%A9%94%EC%84%B8%EC%A7%80-%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%BD%94%EB%93%9C-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8F%84%EB%A1%9D"},{title:"\uc6f9 \uc0ac\uc774\ud2b8 https://valuetong.com",url:"https://valuetong.com"}]},{title:"\uc54c\uc9c0\ub137 ALZi.net - \uc9c1\uc7a5\uc778 \uc790\uae30\uacc4\ubc1c & \ubc95\uc815\uc758\ubb34\uad50\uc721 \uc601\uc0c1 \uad6c\ub3c5 \uc11c\ube44\uc2a4",imgSrc:"/assets/alzi_ios.png",tags:"#AWS, #iOS, #Android, #React, #MobX, #\uc815\uae30\uacb0\uc81c, #iamport, #\ube45\uce74\uc778\uc988 \ub274\uc2a4\uac80\uc0c9API",desc:"(\uc8fc)\uc54c\ub824\uc90c\uc5d0\uc11c \uac1c\ubc1c. \uc18c\uaddc\ubaa8 \uae30\uc5c5\uc5d0\uc11c \ubc95\uc815\uc758\ubb34\uad50\uc721\uc744 '\uc601\uc0c1'\uc73c\ub85c \uc774\uc218\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4. Netflix\uc758 \ub514\uc790\uc778\uc744 \ubca4\uce58\ub9c8\ud0b9\ud588\uace0, \uad6c\ub3c5 \ube44\uc988\ub2c8\uc2a4\ubaa8\ub378\ub85c \uc815\uae30\uacb0\uc81c\ub97c \ubd99\uc600\ub2e4(iamport).\n\ub610\ud55c \ube45\uce74\uc778\uc988 \ub274\uc2a4\uac80\uc0c9 API\ub97c \uc774\uc6a9\ud558\uc5ec, \ucf58\ud150\uce20\ubcc4 \uad00\ub828 \ucd5c\uc2e0 \ub274\uc2a4\ub97c \ud568\uaed8 \uc11c\ube44\uc2a4\ub418\ub3c4\ub85d \uac1c\ubc1c\ud558\uc600\ub2e4.",contrib:"iOS, Android, \ubc18\uc751\ud615 \uc6f9(React), \uad00\ub9ac\uc790\ud398\uc774\uc9c0, API\uc11c\ubc84 \ubaa8\ub450 100% \uac1c\ubc1c",links:[{title:"[\uac1c\ubc1c\ud6c4\uae30] ALZi.net \uac1c\ubc1c \ud6c4\uae30",url:"https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-ALZinet-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},{title:"iamport \uc774\uc6a9\ud558\uc5ec, \uc815\uae30\uacb0\uc81c \ubd99\uc774\uae30.",url:"https://kokohapps.tistory.com/entry/iamport-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%A0%95%EA%B8%B0%EA%B2%B0%EC%A0%9C-%EB%B6%99%EC%9D%B4%EA%B8%B0"},{title:"\uc6f9 \uc0ac\uc774\ud2b8 https://alzi.net",url:"https://alzi.net"}]},{title:"\ub9e4\uc77c\uac10\uc0ac \ub9e4\uc77c\uae30\ub3c4 - \uae30\ub3c4\uc751\ub2f5\ub178\ud2b8, \uac10\uc0ac/\uae30\ub3c4 \ud3b8\uc9c0",imgSrc:"/assets/maeil.png",tags:"#AWS, #iOS, #Android",desc:"\uac1c\uc778 \ud504\ub85c\uc81d\ud2b8. \ud63c\uc790 \ub9cc\ub4e4\uace0 \ud63c\uc790 \uc6b4\uc601\uc911.\n\ub2e8 \ud55c\ubc88\ub3c4 \ud64d\ubcf4\ud65c\ub3d9\uc744 \ud55c\uc801 \uc5c6\uc9c0\ub9cc, \uc57d 7,000\uba85 \uc774\uc0c1\uc758 \uac00\uc785\uc790\uac00 \uc0ac\uc6a9\uc911\uc774\uba70, \ub9e4\uc77c \uafb8\uc900\ud788 \ub298\uace0 \uc788\uc73c\uba70, \ub9e4\uc6b0 \uc88b\uc740 \ud3c9\uc810\uc744 \uc720\uc9c0\ud558\uace0 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8. \ud3b8\uc9c0\uc9c0\uc5d0 \uac10\uc0ac\uc77c\uae30\ub098 \uae30\ub3c4\ud3b8\uc9c0\ub97c \uc791\uc131\ud558\ub294 \ub290\ub08c\uc744 \ucd5c\ub300\ud55c \uc0b4\ub9ac\uace0 \uc2f6\uc5b4\uc11c \uac1c\ubc1c. \uc21c\uc218\ud558\uac8c \uc7ac\ub2a5\uae30\ubd80(?)\ud615\uc2dd\uc73c\ub85c \uc6b4\uc601\ud558\ub294 \uac83\ub2e4\ubcf4\ub2c8, \uc544\ubb34\ub798\ub3c4 \uc0dd\uc5c5\ubcf4\ub2e4 \ub4b7\uc804\uc73c\ub85c \ubc00\ub824 \uc5c5\ub370\uc774\ud2b8\ub97c \ub9ce\uc774 \ubabb\ud558\uc9c0\ub9cc, \uc560\ucc29\uc744 \uac00\uc9c0\uace0 \uc6b4\uc601\ud558\uace0 \uc788\ub294 \uc11c\ube44\uc2a4.",contrib:"iOS, Android, \uad00\ub9ac\uc790\ud398\uc774\uc9c0, API\uc11c\ubc84 100% \uac1c\ubc1c",links:[{title:"[\uac1c\ubc1c\ud6c4\uae30] \ub9e4\uc77c\uac10\uc0ac \ub9e4\uc77c\uae30\ub3c4 - iOS, Android \uc571",url:"https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-%EB%A7%A4%EC%9D%BC%EA%B0%90%EC%82%AC-%EB%A7%A4%EC%9D%BC%EA%B8%B0%EB%8F%84-iOS-Android-%EC%95%B1"},{title:"iOS - Apple Appstore",url:"https://apps.apple.com/us/app/%EB%A7%A4%EC%9D%BC%EA%B0%90%EC%82%AC-%EB%A7%A4%EC%9D%BC%EA%B8%B0%EB%8F%84-%EA%B8%B0%EB%8F%84%EC%9D%91%EB%8B%B5%EB%85%B8%ED%8A%B8-%EB%A7%A4%EC%9D%BC-%EA%B0%90%EC%82%AC%EC%9D%BC%EA%B8%B0/id1330919615?l=ko&ls=1&mt=8"},{title:"Android - Google PlayStore",url:"https://play.google.com/store/apps/details?id=kokohapps.com.dailythanks"}]},{title:"\uc54c\uc9c0 \ubbf8\ub514\uc5b4 | \ub300\uc911\ubb38\ud654 \ube44\ud3c9/\ub9ac\ubdf0 \uc6f9\uc9c4",imgSrc:"/assets/alzime.jpg",tags:"#AWS, #React+next.js, #MobX, Material-UI, node.js ",desc:"(\uc8fc)\uc54c\ub824\uc90c\uc5d0\uc11c \uac1c\ubc1c. \uae30\uc874\uc5d0 Angular \ub85c \uac1c\ubc1c\ub418\uc5b4\uc788\ub358 fanzeel.com \uc644\uc804\ud788 \uc0c8\ub85c \ub9cc\ub4e4\uc5c8\ub2e4. SEO\ucd5c\uc801\ud654\ub97c \uc704\ud574\uc11c next.js + \ub9ac\uc561\ud2b8\ub85c \ub9cc\ub4e4\uba74\uc11c, \ucc98\uc74c\uc73c\ub85c node \uc11c\ubc84\ub97c \ub9cc\ub4e4\uc5c8\ub2e4. \uc601\ud654/\uc0ac\ub78c/\uc791\ud488\ub4f1\ub9c8\ub2e4 \uac1c\ubcc4\uc801\uc73c\ub85c \ud32c \ud398\uc774\uc9c0\ub97c \uad6c\uc131\ud574\uc8fc\uace0, \ud32c\ub4e4\uc774 \uae30\uace0\ubb38\uc744 \uc791\uc131\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\uc774\ub2e4.",contrib:"\ubc18\uc751\ud615 \uc6f9(React), \uad00\ub9ac\uc790\ud398\uc774\uc9c0, API\uc11c\ubc84 100% \uac1c\ubc1c",links:[{title:"[\uac1c\ubc1c\ud6c4\uae30] \uc54c\uc9c0\ubbf8\ub514\uc5b4 ALZi.me (FANZEEL.COM \ub9ac\ub274\uc5bc)",url:"https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-FANZEELCOM-%EB%A6%AC%EB%89%B4%EC%96%BC"},{title:"Angular5 -> React + next.js\ub85c \ud504\ub85c\uc81d\ud2b8 \uac08\uc544\uc5ce\uc740 \uc370(Angular vs React \uac1c\uc778\uc801 \ube44\uad50)",url:"https://kokohapps.tistory.com/entry/Angular5-React-nextjs-%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%88%EC%95%84-%EC%97%8E%EC%9D%80-%ED%9B%84%EA%B8%B0"},{title:"\uc6f9 \uc0ac\uc774\ud2b8 https://alzi.me",url:"https://alzi.me"}]},{title:"\ud22c\uc774\ud1a1 (\ud22c\uc774\uc544\uce74\ub370\ubbf8) - iOS, Android \uc571",imgSrc:"/assets/twoe.png",tags:"#iOS, #Android, #APNS, #FCM",desc:"(\uc8fc)2e \ucee8\uc124\ud305 \uc678\uc8fc \uac1c\ubc1c. \uae30\uc874 \uc81c\ub85c\ubcf4\ub4dc \uae30\ubc18 \ud648\ud398\uc774\uc9c0\uc758 \uac00\uc785\uc790 \ubc0f \ub370\uc774\ud130\uc640 \uc5f0\ub3d9\ud558\uc5ec \uc571 \uac1c\ubc1c. iOS\uc640, Android \uc758 \ub124\uc774\ud2f0\ube0c \ucef4\ud3ec\ub10c\ud2b8\uc778 UILabel \uacfc TextView \uc5d0\uc11c, HTML \ud615\uc2dd\uc758 \uae00 \ub0b4\uc6a9\uc744 \ubcf4\uc5ec\uc8fc\uae30. \ud558\uc774\ube0c\ub9ac\ub4dc \ubc29\uc2dd\uc758 \uc218\uac15\uc2e0\uccad \uae30\ub2a5\n\ud604\uc7ac\ub294 \ud0c0 \uc5c5\uccb4\uc5d0 \uc758\ud574 \ub9ac\ub274\uc5bc\ub41c \uc0c1\ud0dc\uc784.",contrib:"iOS, Android, \uad00\ub9ac\uc790\ud398\uc774\uc9c0, API\uc11c\ubc84 \ubaa8\ub450 100% \uac1c\ubc1c",links:[{title:"[\uac1c\ubc1c\ud6c4\uae30 - iOS, Android] \ud22c\uc774\ud1a1 (2E \uc544\uce74\ub370\ubbf8) \uc571",url:"https://kokohapps.tistory.com/entry/%ED%88%AC%EC%9D%B4%ED%86%A1-2E-%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8-Android-iOS-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},{title:"Android - HTML \ud615\uc2dd\uc758 TextView \uc5d0\uc11c <img> \ud0dc\uadf8 \uc774\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0 \ubd88\ub7ec\uc624\uae30.",url:"https://kokohapps.tistory.com/entry/Android-HTML-%ED%98%95%EC%8B%9D%EC%9D%98-TextView-%EC%97%90%EC%84%9C-img-%ED%83%9C%EA%B7%B8-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0"}]},{title:"\ud32c\uc9c8 - FANZEEL.COM",imgSrc:"/assets/fanzeel.jpg",tags:"#AWS, #Angular, #\ud06c\ub77c\uc6b0\ub4dc\ub77c\uc774\ud305",desc:"(\uc8fc)\uc54c\ub824\uc90c\uc5d0\uc11c \uac1c\ubc1c. \uc11c\ube0c\ub3c4\uba54\uc778\uc744 \ud65c\uc6a9\ud574\uc11c, \ucf58\ud150\uce20\ubcc4\ub85c \ubbf8\ub2c8 \ud648\ud398\uc774\uc9c0\ub97c \ud37c\ube14\ub9ac\uc2f1\ud574\uc8fc\ub294 \uc2dc\uc2a4\ud15c\uc744 \ub9cc\ub4e4\uc5b4\uc57c \ud588\ub2e4. \ub610\ud55c \uae00\uc758 \ub0b4\uc6a9\uc744 '\ubb38\uc7a5' \ub2e8\uc704\ub85c \ub098\ub204\uc5b4 \ubb38\uc7a5 \uc218\uc815 \uc694\uccad\uc744 \ud560 \uc218 \uc788\uace0, \uae00\uc758 \uc18c\uc720\uc790\ub294 \uadf8\uac83\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\ub294 '\ud06c\ub77c\uc6b0\ub4dc \ub77c\uc774\ud305'\uc774\ub77c\ub294 \uba4b\uc9c4(?)\uc774\ub984\uc758 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud588\ub2e4.",contrib:"\uc6f9(Angular)-80%, \uad00\ub9ac\uc790\ud398\uc774\uc9c0-100%, API\uc11c\ubc84-100% \uac1c\ubc1c",links:[{title:"[\uac1c\ubc1c\ud6c4\uae30 - WEB] FANZEEL.COM - \uc11c\ube0c\ub3c4\uba54\uc778\uc744 \ud65c\uc6a9\ud55c, \ucf58\ud150\uce20\ubcc4 \ubbf8\ub2c8 \ud648\ud398\uc774\uc9c0 \ud37c\ube14\ub9ac\uc2f1 \uc2dc\uc2a4\ud15c",url:"https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-FANZEELCOM-%EC%84%9C%EB%B8%8C%EB%8F%84%EB%A9%94%EC%9D%B8%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%BD%98%ED%85%90%EC%B8%A0%EB%B3%84-%EB%AF%B8%EB%8B%88-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%8B%B1-%EC%8B%9C%EC%8A%A4%ED%85%9C"},{title:"Angular4, SEO \uc640 \ud398\uc774\uc2a4\ubd81 \uacf5\uc720 \ud06c\ub864\ub9c1 \ubd07\uc744 \uc704\ud55c \ubab8\ubd80\ub9bc.",url:"https://kokohapps.tistory.com/entry/Angular4-SEO-%EC%99%80-%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81-%EA%B3%B5%EC%9C%A0-%ED%81%AC%EB%A1%A4%EB%A7%81-%EB%B4%87%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%AA%B8%EB%B6%80%EB%A6%BC"},{title:"Angular4 - Route \uc0c1\ud0dc \uc800\uc7a5\ud574\ub450\uae30. RouteReuseStrategy \uad6c\ud604.",url:"https://kokohapps.tistory.com/entry/Angular4-Route-%EC%83%81%ED%83%9C-%EC%A0%80%EC%9E%A5%ED%95%B4%EB%91%90%EA%B8%B0-RouteReuseStrategy-%EA%B5%AC%ED%98%84"}]},{title:"IT\uc54c\ub824\uc90c, \uc904\uac70\ub9ac \uc54c\ub824\uc90c - iOS, Android \uc571",imgSrc:"/assets/allyeozum.png",tags:"#iOS, #Android, #\uc778\uc571\uacb0\uc81c In-App Purchase",desc:"(\uc8fc)\uc54c\ub824\uc90c\uc5d0\uc11c \uac1c\ubc1c. \uc624\ub9ac\uc9c0\ub110 \uc601\uc0c1 \ucf58\ud150\uce20\ub97c \uc11c\ube44\uc2a4\ud558\ub294 \ucf58\ud150\uce20 \uc571\uc744 \uac1c\ubc1c. \ucc98\uc74c\uc5d0\ub294 \ucee8\uc124\ud134\ud2b8\uc758 \uc720\ub8cc \ub9ac\ud3ec\ud2b8\ub97c PDF\ub85c \ub2e4\uc6b4\ub85c\ub4dc \ud560 \uc218 \uc788\ub3c4\ub85d \uc778\uc571\uacb0\uc81c\ub97c \uad6c\ud604\ud55c IT\uc54c\ub824\uc90c \uc571\uc744 \uac1c\ubc1c\ud588\ub2e4\uac00, \uc601\ud654/\uc791\ud488\uc5d0 \ub300\ud55c \uc601\uc0c1\uc744 \uc11c\ube44\uc2a4\ud558\uae30 \uc704\ud55c \uc904\uac70\ub9ac \uc54c\ub824\uc90c \uc571\uc744 \uac1c\ubc1c\ud588\ub2e4. \uc55e\uc73c\ub85c\ub3c4 \uc885\ub958\ubcc4 '\uc54c\ub824\uc90c' \uc571\uc744 \uac1c\ubc1c\ud55c\ub2e4\uace0 \ud558\uc5ec, \uac19\uc740 \ubaa8\ub4c8\uc744 \uc774\uc6a9\ud558\uc5ec \ube44\uc2b7\ud55c \uc571\uc744 \ucc0d\uc5b4\ub0bc \uc218 \uc788\ub294 \uad6c\uc870\ub97c \ub9cc\ub4e4\uc5c8\ub2e4.",contrib:"iOS, Android, \uad00\ub9ac\uc790\ud398\uc774\uc9c0%, API\uc11c\ubc84 \ubaa8\ub450 100% \uac1c\ubc1c",links:[{title:"[\uac1c\ubc1c\ud6c4\uae30 - iOS, Android] IT \uc54c\ub824\uc90c \uc571",url:"https://kokohapps.tistory.com/entry/IT-%EC%95%8C%EB%A0%A4%EC%A4%8C-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},{title:"[\uac1c\ubc1c\ud6c4\uae30 - iOS, Android] \uc904\uac70\ub9ac \uc54c\ub824\uc90c \uc571",url:"https://kokohapps.tistory.com/entry/%EC%A4%84%EA%B1%B0%EB%A6%AC-%EC%95%8C%EB%A0%A4%EC%A4%8C-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},{title:"iOS - Target \uc774\uc6a9\ud558\uc5ec \ube44\uc2b7\ud55c \uc571 \uc5ec\ub7ec\uac1c \ucc0d\uc5b4\ub0b4\uae30",url:"https://kokohapps.tistory.com/entry/iOS-Target-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B9%84%EC%8A%B7%ED%95%9C-%EC%95%B1-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%B0%8D%EC%96%B4%EB%82%B4%EA%B8%B0"},{title:"Android - Module \uc774\uc6a9\ud558\uc5ec \ube44\uc2b7\ud55c \uc571 \uc5ec\ub7ec\uac1c \ucc0d\uc5b4\ub0b4\uae30",url:"https://kokohapps.tistory.com/entry/Android-Module-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B9%84%EC%8A%B7%ED%95%9C-%EC%95%B1-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%B0%8D%EC%96%B4%EB%82%B4%EA%B8%B0"}]},{title:"SSIGN - \ubaa8\ubc14\uc77c \uc11c\uba85\uc6b4\ub3d9 \uc571",imgSrc:"/assets/ssign.png",tags:"#iOS, #Android, #\ubaa8\ubc14\uc77c \uc790\ud544\uc11c\uba85 ",desc:"\ubaa8\ubc14\uc77c \uc11c\uba85\uc6b4\ub3d9 \uc11c\ube44\uc2a4 \uc571\uc744 \uac1c\ubc1c. \uc11c\uba85\uc6b4\ub3d9 \ucea0\ud398\uc778\uc744 \uc628\ub77c\uc778\uc73c\ub85c \ub9cc\ub4e4\uace0, \ud130\uce58\uc2a4\ud06c\ub9b0\uc744 \uc774\uc6a9\ud574\uc11c \uc790\ud544\uc11c\uba85\uc744 \ud558\uace0, \uc11c\uba85 \uc778\uba85\ubd80\ub97c \uc790\ub3d9\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \uc11c\ube44\uc2a4. \ud130\uce58\uc2a4\ud06c\ub9b0 \uc774\ubca4\ud2b8 Point \uac04 Curve\uace1\uc120\uc73c\ub85c \uc5f0\uacb0\ud574\uc11c \uc790\ud544\uc11c\uba85\uc744 \ubd80\ub4dc\ub7fd\uac8c \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \uae30\ub2a5 \uac1c\ubc1c\uc774 \ud575\uc2ec\uc774\uc600\ub2e4.",contrib:"iOS - 100%, Android - 100%",links:[{title:"[\uac1c\ubc1c\ud6c4\uae30 - iOS, Android] SSIGN - \ubaa8\ubc14\uc77c \uc11c\uba85\uc6b4\ub3d9 \uc571",url:"https://kokohapps.tistory.com/entry/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%84%9C%EB%AA%85%EC%9A%B4%EB%8F%99-SSIGN-iOS-Android-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},{title:"\u2018\uc138\uc0c1\uc744 \ubc14\uafb8\ub294 \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc744 \uc81c\uc2dc\ud558\ub2e4\u2019 \ubaa8\ubc14\uc77c \uc11c\uba85\uc6b4\ub3d9 \uc11c\ube44\uc2a4 \u2018\uc2f8\uc778(SSIGN)\u2019 - \ud50c\ub798\ud140 \uae30\uc0ac",url:"https://platum.kr/archives/31777"},{title:"\uc720\ud29c\ube0c \ud64d\ubcf4 \uc601\uc0c1",url:"https://youtu.be/3B5b4ExkSJg"}]}],g=function(e){var t=e.data,a=e.showDivider,n=t.title,l=t.imgSrc,o=t.tags,i=t.desc,E=t.links,c=t.contrib,s="/portfolio"+l;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ProjectItem"},r.a.createElement("div",{className:"wrap-left"},r.a.createElement("img",{src:s,alt:n})),r.a.createElement("div",{className:"wrap-right"},r.a.createElement("div",{className:"wrap-title"},r.a.createElement("img",{src:s,alt:n}),r.a.createElement("h3",null,n)),r.a.createElement("p",{className:"contrib"},c),r.a.createElement("p",{className:"desc"},i),r.a.createElement("p",{className:"tags"},o),r.a.createElement("div",{className:"link-header"},r.a.createElement("i",{className:"fas fa-caret-down"})," \uac1c\ubc1c \ub0b4\uc6a9 \uc0c1\uc138\ubcf4\uae30 ",r.a.createElement("i",{className:"fas fa-caret-down"})),E.map((function(e,t){return r.a.createElement(p,{title:e.title,url:e.url,key:t})})))),a&&r.a.createElement("div",{className:"Divider"},r.a.createElement("div",null)))},f=function(){return r.a.createElement("div",{id:"Projects"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"PROJECTS"),h.map((function(e,t){return r.a.createElement(g,{data:e,key:t,showDivider:t<h.length-1})}))))},w=(a(34),function(e){var t=e.imgSrc,a=e.text1,n=e.text2,l=void 0===n?null:n,o=e.textAlignCenter,i=void 0!==o&&o,E="/portfolio"+t;return r.a.createElement("div",{className:"ETCItem"},r.a.createElement("img",{src:E,alt:a}),r.a.createElement("div",{className:"wrap-desc"},r.a.createElement("p",{style:i?{textAlign:"center"}:null},a),!!l&&r.a.createElement("p",null,l)))}),S=function(){return r.a.createElement("div",{id:"ETC"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"ETC"),r.a.createElement("div",{className:"wrap-patent"},r.a.createElement(w,{imgSrc:"/assets/soven.jpg",text1:"2014 \uc18c\uc15c\ubca4\ucc98 \uacbd\uc5f0\ub300\ud68c - \uc6b0\uc218\uc0c1",textAlignCenter:!0}),r.a.createElement(w,{imgSrc:"/assets/bitup.jpg",text1:"Bit UP! \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\ud604 \ud504\ub85c\uadf8\ub7a8 \ubcf8\uc0c1",textAlignCenter:!0}),r.a.createElement(w,{imgSrc:"/assets/patent1.jpg",text1:"\ud2b9\ud5c8 \uc81c 10-1403762\ud638",text2:"\ubc1c\uba85\uc758 \uba85\uce6d : \uc774\ubca4\ud2b8 \uacf5\uc720 \ubc29\uc2dd\uc758 \uc18c\uc15c \ub2e4\uc774\uc5b4\ub9ac \uc11c\ube44\uc2a4 \uc81c\uacf5 \ubc29\ubc95"}),r.a.createElement(w,{imgSrc:"/assets/patent2.jpg",text1:"\ud2b9\ud5c8 \uc81c 10-1403762\ud638",text2:"\ubc1c\uba85\uc758 \uba85\uce6d : \ud130\uce58\uc2a4\ud06c\ub9b0\uc744 \ud3ec\ud568\ud558\ub294 \uc2a4\ucf00\uc904\ub7ec\uc758 \uc77c\uc815 \ub4f1\ub85d\uc744 \uc704\ud55c \ub0a0\uc9dc \uc9c0\uc815 \ubc29\ubc95"}))))},D=(a(56),a(79)),v=[{title:"HWViewPager",language:"Objective-C",langImg:"/assets/objc.png",stars:90,desc:"Android\uc758 \uc591 \uc606\uc774 \uc798\ub824\ubcf4\uc774\ub294 ViewPager\ub97c \ubaa8\uc0ac\ud558\uc5ec \ub9cc\ub4e0 UICollectionView\uc758 \uc11c\ube0c\ud074\ub798\uc2a4.\ncocoacontrols.com \uc758 \uba54\uc778\ud398\uc774\uc9c0\uc5d0 \uc18c\uac1c\ub428.",url:"https://github.com/vowed21/HWViewPager"},{title:"HWSwiftyViewPager",language:"SWIFT",langImg:"/assets/swift.png",stars:27,desc:"HWViewPager\ub97c SWIFT\ub85c \ub2e4\uc2dc \ub9cc\ub4e4\uc5c8\ub2e4.",url:"https://github.com/vowed21/HWSwiftyViewPager"},{title:"HWTabbarIOSStyle",language:"JAVA",langImg:"/assets/java.png",stars:3,desc:"iOS\uc758 UITabbar\uc640 \uac19\uc740 \ubaa8\uc591\uc758 \ud0ed\ubc14.\nViewPager\uc640 \uacb0\ud569\ud558\uc5ec \uc0ac\uc6a9.",url:"https://github.com/vowed21/HWTabbarIOSStyle"},{title:"HWSimpleToast",language:"SWIFT",langImg:"/assets/swift.png",stars:1,desc:"Android\uc758 Toast\ub97c \ubaa8\uc0ac\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac. UIView\uc640 UILabel \ub2e8 \ub450\uac1c\ub85c \ub9cc\ub4e4\uc5b4 \ub9e4\uc6b0 \uac00\ubccd\ub2e4.",url:"https://github.com/vowed21/HWSimpleToast"}],y=function(e){var t=e.data,a=t.title,n=t.language,l=t.stars,o=t.desc,i=t.url,E="/portfolio"+t.langImg;return r.a.createElement("div",{className:"OpenSourceItem"},r.a.createElement("h3",null,a),r.a.createElement("div",{className:"wrap-language"},r.a.createElement("img",{src:E,alt:""}),r.a.createElement("div",null,n),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("div",null,l)),r.a.createElement("p",{className:"desc"}," ",o),r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(D.a,{color:"primary",variant:"contained",size:"large",startIcon:r.a.createElement("i",{class:"fab fa-github"})},"View On GitHub")))},k=function(){return r.a.createElement("div",{id:"OpenSource"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"OpenSource"),r.a.createElement("div",{className:"wrap-items"},v.map((function(e,t){return r.a.createElement(y,{data:e,key:t})})))))},b=function(){return r.a.createElement("div",{id:"AboutMe"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"\uae40\ud604\uc6b0"),r.a.createElement("p",null,"(\uc8fc)\uc54c\ub824\uc90c CTO"),r.a.createElement("p",null,"\ub77c\uc774\ud504\ud314\ub808\ud2b8 \ub300\ud45c"),r.a.createElement("p",null,"\ub300\ud45c \ub9c8\uc74c & \uc9c1\uc6d0 \ub9c8\uc74c, \ub458 \ub2e4 \uc798 \uc54e"),r.a.createElement("p",null,"\uc624\ub79c \uc2a4\ud0c0\ud2b8\uc5c5 \uc0dd\ud65c"),r.a.createElement("p",null,"\uc0c8\ub85c\uc6b4 \uc11c\ube44\uc2a4 \ub9cc\ub4e4\uae30\ub97c \ub9e4\uc6b0 \uc990\uae40"),r.a.createElement("p",null,"\uc5b4\uca4c\ub2e4\ubcf4\ub2c8 (\ud480)\uc7a1\uc2a4\ud0dd \uac1c\ubc1c\uc790"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfp",target:"_blank",rel:"noopener noreferrer"},"ENFP"),"\xa0-\xa0",r.a.createElement("a",{href:"https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp",target:"_blank",rel:"noopener noreferrer"},"ENTP"),"\xa0 \ub450 \uc131\ud5a5"),r.a.createElement("p",null,"\uc30d\ub465\uc774(\ub0a8\ub9e4) \uc544\ube60 - \ub0b4\uac8c \uc774\ub7f0 \uc7ac\ub2a5\uc774!")))},O=function(){return r.a.createElement("div",{id:"Contact"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,r.a.createElement("i",{className:"far fa-envelope"}),r.a.createElement("a",{href:"mailto:hyunwoo-21@hanmail.net",target:"_top"},"hyunwoo-21@hanmail.net")),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-home"}),r.a.createElement("a",{href:"https://kokohapps.tistory.com/",target:"_blank",rel:"noopener noreferrer"},"https://kokohapps.tistory.com"))))},M=function(){return r.a.useEffect((function(){window.console.log=function(){},window.console.debug=function(){},window.console.error=function(){},window.console.warn=function(){}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(A,null),r.a.createElement(f,null),r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(b,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.0dafae67.chunk.js.map