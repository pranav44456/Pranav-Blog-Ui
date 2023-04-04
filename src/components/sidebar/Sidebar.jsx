import axios from 'axios';
import React, { useState,useEffect } from 'react'
import"./sidebar.css"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const[cats,setCats]=useState([]);
  useEffect(() => {
    const getCats=async ()=>{
      const res=await axios.get("/categories")
      console.log(res);
      setCats(res.data)
    }
    getCats();
  }, []);
  

  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://images.pexels.com/photos/7163689/pexels-photo-7163689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed temporibus eaque enim ut dolor odio? Optio molestiae nostrum culpa voluptatum amet harum libero porro dolorem nam neque. Architecto, adipisci odit.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
              
            ))}
            
          </ul>
        </div>
        <div className="sidebarItem">
          <span className='sidebarTitle'>FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>

          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
