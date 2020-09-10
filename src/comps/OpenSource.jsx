import React from 'react'
import '../styles/opensource.scss'
import { Button } from '@material-ui/core'

const myOpensources = [
  {
    title: 'HWViewPager',
    language: 'Objective-C',
    langImg: '/assets/objc.png',
    stars: 90,
    desc: "Android의 양 옆이 잘려보이는 ViewPager를 모사하여 만든 UICollectionView의 서브클래스.\ncocoacontrols.com 의 메인페이지에 소개됨.",
    url: 'https://github.com/vowed21/HWViewPager'
  },
  
  {
    title: 'HWSwiftyViewPager',
    language: 'SWIFT',
    langImg: '/assets/swift.png',
    stars: 27,
    desc: "HWViewPager를 SWIFT로 다시 만들었다.",
    url: 'https://github.com/vowed21/HWSwiftyViewPager'
  },

  {
    title: 'HWTabbarIOSStyle',
    language: 'JAVA',
    langImg: '/assets/java.png',
    stars: 3,
    desc: "iOS의 UITabbar와 같은 모양의 탭바.\nViewPager와 결합하여 사용.",
    url: 'https://github.com/vowed21/HWTabbarIOSStyle'
  },
  

  {
    title: 'HWSimpleToast',
    language: 'SWIFT',
    langImg: '/assets/swift.png',
    stars: 1,
    desc: "Android의 Toast를 모사한 라이브러리. UIView와 UILabel 단 두개로 만들어 매우 가볍다.",
    url: 'https://github.com/vowed21/HWSimpleToast'
  },

  
]



const OpenSource = () => {


  return (
    <div id="OpenSource">
      <div className="wrapper">
      <h1>- OpenSource -</h1>

      <div className="wrap-items">
        {myOpensources.map((data, index) => (
          <OpenSourceItem data={data} key={index} />
        ))}
        
      </div>

      </div>
      
      
    </div>
  )
}

const OpenSourceItem = ({data}) => {

  const { title, language, stars, desc, url, langImg } = data
  const langImgSrc = process.env.PUBLIC_URL + langImg 

  return (
    <div className="OpenSourceItem">
      <h3>{title}</h3>
      <div className="wrap-language">
        <img src={langImgSrc} alt="" />
        <div>{language}</div>

        <i className="far fa-star"/>
        <div>{stars}</div>

      </div>

      <p className="desc" > {desc}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" >
        <Button color="primary" variant="contained" size="large" startIcon={<i class="fab fa-github" />} >View On GitHub</Button>
      </a>
    </div>
  )
}


export default OpenSource