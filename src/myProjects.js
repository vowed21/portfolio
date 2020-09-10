const myProjects = [
  {
    title: "밸류통 Valuetong.com - 부동산 실거래 정보",
    imgSrc: "/assets/valuetong.jpg",
    tags: "#AWS, #HybridApp, #React, #MobX, #KakaoMap, #Geometry, #공공데이터포털, #부동산실거래",
    desc: '감정평가사 3분과 함께 만든 프로젝트.\n리액트로 사이트를 만들고, Android 와 iOS 는 웹뷰로 패키징하여 하이브리드앱으로 개발했다. 공공데이터 포털에서 토지정보와 건물정보를 사용했으며, 정확한 지번주소가 공개되지 않는 부동산 실거래 정보를 감정평가사 분들의 비법알고리즘(?)으로 지번주소를 유추 - 매칭하여 지도에 표시해주는 것이 핵심인 서비스이다.\n\n웹(React), 하이브리드 앱(Android, iOS), 서버, 관리자페이지 모두 100% 개발',
    links: [
      {title: "[개발후기] Valuetong.com 부동산 실거래 정보 서비스", url: "https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-Valuetongcom-%EB%B6%80%EB%8F%99%EC%82%B0-%EC%8B%A4%EA%B1%B0%EB%9E%98-%EC%82%AC%EC%9D%B4%ED%8A%B8"},
      {title: "안드로이드 하이브리드앱 웹뷰 WebView 에서 카카오톡 로그인 (앱) 사용하기", url: "https://kokohapps.tistory.com/entry/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C%EC%95%B1-%EC%9B%B9%EB%B7%B0-WebView-%EC%97%90%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%95%B1-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0"},
      {title: "iOS 하이브리드앱, Javascript 로 웹뷰에 메세지 보내기 (네이티브 코드 사용할 수 있도록)", url: "https://kokohapps.tistory.com/entry/iOS-%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C%EC%95%B1-Javascript-%EB%A1%9C-%EC%9B%B9%EB%B7%B0%EC%97%90-%EB%A9%94%EC%84%B8%EC%A7%80-%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%BD%94%EB%93%9C-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8F%84%EB%A1%9D"},
      {title: "웹 사이트 https://valuetong.com", url: "https://valuetong.com"},
    ]
  },

  {
    title: "알지넷 ALZi.net - 직장인 자기계발 & 법정의무교육 영상 구독 서비스",
    imgSrc: "/assets/alzi_ios.png",
    tags: "#AWS, #iOS, #Android, #React, #MobX, #정기결제, #iamport, #빅카인즈 뉴스검색API",
    desc: "(주)알려줌에서 개발. 소규모 기업에서 법정의무교육을 '영상'으로 이수할 수 있는 서비스. Netflix의 디자인을 벤치마킹했고, 구독 비즈니스모델로 정기결제를 붙였다(iamport).\n또한 빅카인즈 뉴스검색 API를 이용하여, 콘텐츠별 관련 최신 뉴스를 함께 서비스되도록 개발하였다.\n\n웹(React), Android, iOS, 서버, 관리자페이지 모두 100% 개발",
    links: [
      {title: "[개발후기] ALZi.net 개발 후기", url: "https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-ALZinet-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},
      {title: "iamport 이용하여, 정기결제 붙이기.", url: "https://kokohapps.tistory.com/entry/iamport-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%A0%95%EA%B8%B0%EA%B2%B0%EC%A0%9C-%EB%B6%99%EC%9D%B4%EA%B8%B0"},
      {title: "웹 사이트 https://alzi.net", url: "https://alzi.net"},
    ]
  },

  {
    title: "매일감사 매일기도 - 기도응답노트, 감사/기도 편지",
    imgSrc: "/assets/maeil.png",
    tags: "#AWS, #iOS, #Android",
    desc: "개인 프로젝트. 혼자 만들고 혼자 운영중.\n어떠한 홍보활동도 단한번 한적 없지만, 약 7,000명 이상의 가입자가 사용중이며, 매일 꾸준히 늘고 있으며, 매우 좋은 평점을 유지하고 있는 프로젝트. 편지지에 감사일기나 기도편지를 작성하는 느낌을 최대한 살리고 싶어서 개발. 순수하게 재능기부(?)형식으로 운영하는 것다보니, 아무래도 생업보다 뒷전으로 밀려 업데이트를 많이 못하지만, 애착을 가지고 운영하고 있는 서비스.",
    links: [
      {title: "[개발후기] 매일감사 매일기도 - iOS, Android 앱", url: "https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-%EB%A7%A4%EC%9D%BC%EA%B0%90%EC%82%AC-%EB%A7%A4%EC%9D%BC%EA%B8%B0%EB%8F%84-iOS-Android-%EC%95%B1"},
      {title: "iOS - Apple Appstore", url: "https://apps.apple.com/us/app/%EB%A7%A4%EC%9D%BC%EA%B0%90%EC%82%AC-%EB%A7%A4%EC%9D%BC%EA%B8%B0%EB%8F%84-%EA%B8%B0%EB%8F%84%EC%9D%91%EB%8B%B5%EB%85%B8%ED%8A%B8-%EB%A7%A4%EC%9D%BC-%EA%B0%90%EC%82%AC%EC%9D%BC%EA%B8%B0/id1330919615?l=ko&ls=1&mt=8"},
      {title: "Android - Google PlayStore", url: "https://play.google.com/store/apps/details?id=kokohapps.com.dailythanks"},
    ]
  },

  {
    title: "알지 미디어 | 대중문화 비평/리뷰 웹진",
    imgSrc: "/assets/alzime.jpg",
    tags: "#AWS, #React+next.js, #MobX, Material-UI, node.js ",
    desc: "(주)알려줌에서 개발. 기존에 Angular 로 개발되어있던 fanzeel.com 완전히 새로 만들었다. SEO최적화를 위해서 next.js + 리액트로 만들면서, 처음으로 node 서버를 만들었다. 영화/사람/작품등마다 개별적으로 팬 페이지를 구성해주고, 팬들이 기고문을 작성할 수 있는 서비스이다.\n\nAPI서버, 프론트엔드, 관리자페이지 모두 100% 개발",
    links: [
      {title: "[개발후기] 알지미디어 ALZi.me (FANZEEL.COM 리뉴얼)", url: "https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-FANZEELCOM-%EB%A6%AC%EB%89%B4%EC%96%BC"},
      {title: "Angular5 -> React + next.js로 프로젝트 갈아엎은 썰(Angular vs React 개인적 비교)", url: "https://kokohapps.tistory.com/entry/Angular5-React-nextjs-%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%88%EC%95%84-%EC%97%8E%EC%9D%80-%ED%9B%84%EA%B8%B0"},
      {title: "웹 사이트 https://alzi.me", url: "https://alzi.me"},
    ]
  },

  {
    title: "투이톡 (투이아카데미) - iOS, Android 앱",
    imgSrc: "/assets/twoe.png",
    tags: "#iOS, #Android, #APNS, #FCM",
    desc: "(주)2e 컨설팅 외주 개발. 기존 제로보드 기반 홈페이지의 가입자 및 데이터와 연동하여 앱 개발. iOS와, Android 의 네이티브 컴포넌트인 UILabel 과 TextView 에서, HTML 형식의 글 내용을 보여주기. 하이브리드 방식의 수강신청 기능\n현재는 타 업체에 의해 리뉴얼된 상태임.",
    links: [
      {title: "[개발후기 - iOS, Android] 투이톡 (2E 아카데미) 앱", url: "https://kokohapps.tistory.com/entry/%ED%88%AC%EC%9D%B4%ED%86%A1-2E-%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8-Android-iOS-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},
      {title: "Android - HTML 형식의 TextView 에서 <img> 태그 이용하여 이미지 불러오기.", url: "https://kokohapps.tistory.com/entry/Android-HTML-%ED%98%95%EC%8B%9D%EC%9D%98-TextView-%EC%97%90%EC%84%9C-img-%ED%83%9C%EA%B7%B8-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0"}
    ]
  },

  {
    title: "팬질 - FANZEEL.COM",
    imgSrc: "/assets/fanzeel.jpg",
    tags: "#AWS, #Angular, #크라우드라이팅",
    desc: "(주)알려줌에서 개발. 서브도메인을 활용해서, 콘텐츠별로 미니 홈페이지를 퍼블리싱해주는 시스템을 만들어야 했다. 또한 글의 내용을 '문장' 단위로 나누어 문장 수정 요청을 할 수 있고, 글의 소유자는 그것을 적용할 수 있는 '크라우드 라이팅'이라는 멋진(?)이름의 기능을 개발했다.",
    links: [
      {title: "[개발후기 - WEB] FANZEEL.COM - 서브도메인을 활용한, 콘텐츠별 미니 홈페이지 퍼블리싱 시스템", url: "https://kokohapps.tistory.com/entry/%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0-FANZEELCOM-%EC%84%9C%EB%B8%8C%EB%8F%84%EB%A9%94%EC%9D%B8%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%BD%98%ED%85%90%EC%B8%A0%EB%B3%84-%EB%AF%B8%EB%8B%88-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%8B%B1-%EC%8B%9C%EC%8A%A4%ED%85%9C"},
      {title: "Angular4, SEO 와 페이스북 공유 크롤링 봇을 위한 몸부림.", url: "https://kokohapps.tistory.com/entry/Angular4-SEO-%EC%99%80-%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81-%EA%B3%B5%EC%9C%A0-%ED%81%AC%EB%A1%A4%EB%A7%81-%EB%B4%87%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%AA%B8%EB%B6%80%EB%A6%BC"},
      {title: "Angular4 - Route 상태 저장해두기. RouteReuseStrategy 구현.", url: "https://kokohapps.tistory.com/entry/Angular4-Route-%EC%83%81%ED%83%9C-%EC%A0%80%EC%9E%A5%ED%95%B4%EB%91%90%EA%B8%B0-RouteReuseStrategy-%EA%B5%AC%ED%98%84"}
      
    ]
  },

  {
    title: "IT알려줌, 줄거리 알려줌 - iOS, Android 앱",
    imgSrc: "/assets/allyeozum.png",
    tags: "#iOS, #Android, #인앱결제 In-App Purchase",
    desc: "(주)알려줌에서 개발. 오리지널 영상 콘텐츠를 서비스하는 콘텐츠 앱을 개발. 처음에는 컨설턴트의 유료 리포트를 PDF로 다운로드 할 수 있도록 인앱결제를 구현한 IT알려줌 앱을 개발했다가, 영화/작품에 대한 영상을 서비스하기 위한 줄거리 알려줌 앱을 개발했다. 앞으로도 종류별 '알려줌' 앱을 개발한다고 하여, 같은 모듈을 이용하여 비슷한 앱을 찍어낼 수 있는 구조를 만들었다.",
    links: [
      {title: "[개발후기 - iOS, Android] IT 알려줌 앱", url: "https://kokohapps.tistory.com/entry/IT-%EC%95%8C%EB%A0%A4%EC%A4%8C-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},
      {title: "[개발후기 - iOS, Android] 줄거리 알려줌 앱", url: "https://kokohapps.tistory.com/entry/%EC%A4%84%EA%B1%B0%EB%A6%AC-%EC%95%8C%EB%A0%A4%EC%A4%8C-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},
      {title: "iOS - Target 이용하여 비슷한 앱 여러개 찍어내기", url: "https://kokohapps.tistory.com/entry/iOS-Target-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B9%84%EC%8A%B7%ED%95%9C-%EC%95%B1-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%B0%8D%EC%96%B4%EB%82%B4%EA%B8%B0"},
      {title: "Android - Module 이용하여 비슷한 앱 여러개 찍어내기", url: "https://kokohapps.tistory.com/entry/Android-Module-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B9%84%EC%8A%B7%ED%95%9C-%EC%95%B1-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%B0%8D%EC%96%B4%EB%82%B4%EA%B8%B0"}
      
    ]
  },

  {
    title: "SSIGN - 모바일 서명운동 앱",
    imgSrc: "/assets/ssign.png",
    tags: "#iOS, #Android, #모바일 자필서명 ",
    desc: "모바일 서명운동 서비스 앱을 개발. 서명운동 캠페인을 온라인으로 만들고, 터치스크린을 이용해서 자필서명을 하고, 서명 인명부를 자동으로 만들어주는 서비스. 터치스크린 이벤트 Point 간 Curve곡선으로 연결해서 자필서명을 부드럽게 만들어주는 기능 개발이 핵심이였다.",
    links: [
      {title: "[개발후기 - iOS, Android] SSIGN - 모바일 서명운동 앱", url: "https://kokohapps.tistory.com/entry/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%84%9C%EB%AA%85%EC%9A%B4%EB%8F%99-SSIGN-iOS-Android-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0"},
      {title: "‘세상을 바꾸는 가장 쉬운 방법을 제시하다’ 모바일 서명운동 서비스 ‘싸인(SSIGN)’ - 플래텀 기사", url: "https://platum.kr/archives/31777"},
      {title: "유튜브 홍보 영상", url: "https://youtu.be/3B5b4ExkSJg"}
      
      
    ]
  },

  

]


export default myProjects;