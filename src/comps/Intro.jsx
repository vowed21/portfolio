import React from 'react'

export default class Intro extends React.Component {

  introRef = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    console.log('컴포넌트 디드 마운트.', this.introRef.current)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate() {
    console.log('컴포넌트 디드 업데이트.', this.introRef.current)
  }

  handleScroll = (event) => {
    // console.log(window.pageYOffset)
    if(window.pageYOffset < window.innerHeight) {
      this.introRef.current.style.backgroundPosition = `right bottom -${window.pageYOffset/2}px`
    }
  }

  
  render() {

    // const backImgUrl = `url(${process.env.PUBLIC_URL}/assets/profile3.jpg)`
    return (
      <div id="Intro" ref={this.introRef} >
        <div id="wrap-text" >
          <h1>Developer<br/>김현우</h1>
          {/* <h2>새로운 서비스를 만드는게 제일 좋아</h2> */}
          <p>#iOS, #ANDROID, #REACT, #PHP, #AWS</p>
        </div>
      </div>
    )
  }
}
