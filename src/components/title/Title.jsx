import React from 'react'
import '../title/Titlec.css'


function Title({subtitle , title}) {
  return (
    <div className='Title'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
