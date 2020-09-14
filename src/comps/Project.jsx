import React from 'react'
import '../styles/projects.scss'
import MyLink from './MyLink'
import myProjects from '../myProjects'


const Project = () => {

  return (
    <div id="Projects">
      <div className="wrapper">
        <h1>PROJECTS</h1>
        {myProjects.map((data, index) => (
          <ProjectItem data={data} key={index} showDivider={(index < myProjects.length-1)} />
        ))}      
      </div>
    </div>
  )
}


const ProjectItem = ({data, showDivider}) => {
  const {title, imgSrc, tags, desc, links, contrib } = data
  const src = process.env.PUBLIC_URL + imgSrc

  return ( <>
    <div className="ProjectItem">
      <div className="wrap-left">
        <img src={src} alt={title} />
      </div>
      <div className="wrap-right">
        <div className="wrap-title">
          <img src={src} alt={title} />
          <h3>{title}</h3>
          
        </div>
        <p className="contrib">{contrib}</p>
        <p className="desc">{desc}</p>
        <p className="tags">{tags}</p>

        <div className="link-header" ><i className="fas fa-caret-down"/> 개발 내용 상세보기 <i className="fas fa-caret-down"/></div>
        {links.map((item, index) => (
          <MyLink title={item.title} url={item.url} key={index} />
        ))}
      </div>
    </div>      

    {showDivider && <div className="Divider"><div/></div> }
  </>)
}





export default Project