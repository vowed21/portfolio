import React from 'react'
import { Drawer, List, ListItem} from '@material-ui/core'
import '../styles/header.scss'

const MENU_INTRO = 'Intro'
const MENU_PROJECT = 'Projects'
const MENU_OPENSOURCE = 'OpenSource'
const MENU_ETC = 'ETC'
const MENU_ABOUTME = 'AboutMe'
const MENU_CONTACT = 'Contact'

const menusArr = [MENU_INTRO, MENU_PROJECT, MENU_OPENSOURCE, MENU_ETC, MENU_ABOUTME, MENU_CONTACT]
const HEADER_MODE_TRANSPARENT = 0
const HEADER_MODE_ALPHA = 1
const HEADER_MODE_FILLED = 2
const ALPHA_FILLED = 0.85





export default class Header extends React.Component {

  headerMode = HEADER_MODE_TRANSPARENT
  headerRef = React.createRef();
  state = {selectedMenu: menusArr[0], isDrawerShow: false}

  
  elProject; elOpenSource; elETC; elAboutMe; elContact; elBody;

  initElements = () => {
    if(this.elProject == null){
      this.elProject = document.querySelector('#'+MENU_PROJECT)
      this.elOpenSource = document.querySelector('#'+MENU_OPENSOURCE)
      this.elETC = document.querySelector('#'+MENU_ETC)
      this.elAboutMe = document.querySelector('#'+MENU_ABOUTME)
      this.elContact = document.querySelector('#'+MENU_CONTACT)
      this.elBody = document.querySelector('body')
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    console.log('헤더의 디드마운트.')
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }


  handleScroll = (event) => {

    this.initElements()

    console.log(window.pageYOffset)
    const offset = window.pageYOffset
    const datum = window.innerHeight / 2
    if(offset < datum && this.headerMode !== HEADER_MODE_TRANSPARENT) {
      this.headerRef.current.style.backgroundColor = 'transparent';
      this.headerMode = HEADER_MODE_TRANSPARENT
      this.headerRef.current.style.boxShadow = `none`
      // console.log('헤더 트랜스 파렌트!!!')
    }
    else if (offset >= datum && offset < window.innerHeight) {
      this.headerMode = HEADER_MODE_ALPHA
      const alpha = (offset-datum) / datum * ALPHA_FILLED
      this.headerRef.current.style.backgroundColor = `rgba(0,0,0,${alpha})`
      // console.log('헤더 알파')
    }
    else if(offset >= window.innerHeight && this.headerMode !== HEADER_MODE_FILLED) {
      this.headerMode = HEADER_MODE_FILLED
      // console.log('헤더 필드!!!!')
      this.headerRef.current.style.backgroundColor = `rgba(0,0,0,${ALPHA_FILLED})`
      this.headerRef.current.style.boxShadow = `0 1px 8px rgba(0,0,0,0.7)`
    }

    const {selectedMenu} = this.state

    //메뉴 선택표시 되게 해주자.
    //맨끝쯤에 왔다면, 무조건 CONTACT 메뉴다.
    if(offset >= (this.elBody.clientHeight - window.innerHeight - 20)) {
      if(selectedMenu !== MENU_CONTACT) {
        this.setState({selectedMenu: MENU_CONTACT})
      }
    }
    else if(offset <= this.elProject.offsetTop - datum) {
      if(selectedMenu !== MENU_INTRO) {
        this.setState({selectedMenu: MENU_INTRO})
      }
    }
    else if(offset <= this.elOpenSource.offsetTop - datum) {
      if(selectedMenu !== MENU_PROJECT) {
        this.setState({selectedMenu: MENU_PROJECT})
      }
    }
    else if(offset <= this.elETC.offsetTop - datum) {
      if(selectedMenu !== MENU_OPENSOURCE) {
        this.setState({selectedMenu: MENU_OPENSOURCE})
      }
    }
    else if(offset <= this.elAboutMe.offsetTop - datum) {
      if(selectedMenu !== MENU_ETC) {
        this.setState({selectedMenu: MENU_ETC})
      }
    }
    else if(offset <= this.elContact.offsetTop - datum) {
      if(selectedMenu !== MENU_ABOUTME) {
        this.setState({selectedMenu: MENU_ABOUTME})
      }
    }
    else {
      if(selectedMenu !== MENU_CONTACT) {
        this.setState({selectedMenu: MENU_CONTACT})
      }
    }
  }

  scrollToMenu = (menuTitle) => {
    const el = document.querySelector('#'+menuTitle)
    if(el) {
      window.scrollTo(0, el.offsetTop - this.headerRef.current.offsetHeight)
    }
    this.setState({selectedMenu: menuTitle, isDrawerShow: false})

  }





  MenuItem = ({title}) => {

    const clickItem = () => {
      this.scrollToMenu(title)
    }
    
    let className = "menu-item"
    if(this.state.selectedMenu === title) {
      className += " selected"
    }

    return (
      <div className={className} onClick={clickItem} >{title}</div>
    )
  }

  drawerOpen = () => { this.setState({isDrawerShow: true}) }
  drawerClose = () => { this.setState({isDrawerShow: false}) }


  render() {

    console.log('렌더러')

    const {selectedMenu, isDrawerShow} = this.state

    return (
      <header ref={this.headerRef} >
        <div className="wrapper wrap-header">
          {/* <div style={{flexGrow:'1'}} /> */}
          {menusArr.map((title, index) => (<this.MenuItem title={title} key={index} />))}
          
          <div onClick={this.drawerOpen} className="menu-mobile">{selectedMenu}</div>
          <i onClick={this.drawerOpen} className="fas fa-angle-down"/>
          
        </div>
        <Drawer open={isDrawerShow} onClose={this.drawerClose}  anchor="top" classes={{paper:'headerDrawerPaper'}} >
          <List>
            {menusArr.map((title, index) => (
              <ListItem button className="drawerItemText" onClick={()=> {this.scrollToMenu(title)}} >
                {title}
              </ListItem>
            ))}

          </List>

        </Drawer>
      </header>
    )
  }

} 


  
