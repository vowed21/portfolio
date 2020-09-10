import React from 'react'

const MyLink = ({title, url}) => {
  return (
    <div className="MyLink">

      <i className="fas fa-link"></i>
      <a href={url} target="_blank" rel="noopener noreferrer" >{title}</a>

    </div>
  )
}

export default MyLink