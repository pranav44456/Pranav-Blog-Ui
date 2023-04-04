import React from 'react'
import "./home.css"
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../components/header/Header'

import Posts from '../../components/posts/Posts'
import axios from "axios"
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'



const Home = () => {
  const [posts,setposts] = useState([]);
  const {search}=useLocation();
  


  useEffect(() => {
    const fetchPosts=async ()=>{
      const res= await axios.get("/posts"+search)
      setposts(res.data)
    }
    fetchPosts()
  }, [search])
  
  return (
    <>
    <Header/>
    <div className='home'>
       <Posts posts={posts}/>
       <Sidebar/>
    </div>
   
    </>
  )
  }

export default Home;