import React from 'react'
import '../styles/etc.scss'




const ETC = () => {
  return (
    <div id="ETC">
      <div className="wrapper">
        <h1>ETC</h1>
        <div className="wrap-patent">

          <ETCItem 
            imgSrc="/assets/soven.jpg" 
            text1="2014 소셜벤처 경연대회 - 우수상"
            textAlignCenter={true}
            />
          <ETCItem 
            imgSrc="/assets/bitup.jpg" 
            text1="Bit UP! 소프트웨어 구현 프로그램 본상"
            textAlignCenter={true} />

          <ETCItem 
            imgSrc="/assets/patent1.jpg" 
            text1="특허 제 10-1403762호" 
            text2="발명의 명칭 : 이벤트 공유 방식의 소셜 다이어리 서비스 제공 방법" />
          <ETCItem 
            imgSrc="/assets/patent2.jpg" 
            text1="특허 제 10-1403762호" 
            text2="발명의 명칭 : 터치스크린을 포함하는 스케줄러의 일정 등록을 위한 날짜 지정 방법" />
        </div>
      </div>
    </div>
  )
}



const ETCItem = ({imgSrc, text1, text2=null, textAlignCenter=false }) => {
  const src = process.env.PUBLIC_URL + imgSrc
  return (
    <div className="ETCItem">
      <img src={src} alt={text1} />
      <div className="wrap-desc">
        <p style={textAlignCenter ? {textAlign:'center'} : null} >{text1}</p>
        {!!text2 && <p>{text2}</p>} 
      </div>
    </div>
  )
}


export default ETC