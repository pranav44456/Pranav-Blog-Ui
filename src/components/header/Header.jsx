import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className="headerTitles">
          <span className='headerTitlesm'>React & Node </span>
          <span className='headerTitlelg'>Blog </span>
        </div>
        <img className='headerImg' src="https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
       </div>
    </>
  )
}

export default Header;
