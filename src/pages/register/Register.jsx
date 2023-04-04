import React from 'react'
import { useState } from 'react'
import "./register.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const handleSubmit= async(e)=>{
    e.preventDefault();   // its not refreshing
    setError(false);
    try{
   const res=await axios.post("/auth/register",{
    username,
    email,
    password,
   });
   res.data && window.location.replace("/login")
  }
  catch(err){
   setError(true);
  }

  };
  return (
    <>
    <div className="register">
      <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
           <label >Username</label>
            <input type="text"
             className="registerInput"
             placeholder='Enter your username'
             onChange={(e=>setUsername(e.target.value))}
             />
            <label >Email</label>
            <input type="text" className="registerInput"placeholder='Enter your email'
            onChange={(e=>setEmail(e.target.value))}
            />
            <label >Password</label>
            <input type="text" className='registerInput' placeholder='Enter your password'
            onChange={(e=>setPassword(e.target.value))}/>
            <button className='registerButton' type='submit'>Register</button>
        </form>
        <button className='registerLoginButton'>
        <Link className="link" to="/login">LOGIN</Link>
        </button>
       {error &&  <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
    </div>
    </>
  )
}

export default Register