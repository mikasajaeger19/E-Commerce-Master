import React from 'react'
import './Login.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import {Navigate} from 'react-router-dom'
import axios from 'axios'


export default function Login(){
  const obj={
    firstName:"",
    lastName:"",
    email:"",
    password:""
  }

  const [action,setAction]=React.useState("Sign up")
  
  const [user,setUser]=React.useState(obj)

  const [auth,setAuth]=React.useState(false)

  function handleUserChange(event){
    setUser(prevUser => {
      return {
          ...prevUser,
          [event.target.name]: event.target.value
      }
  })
  }

  if(auth){
    return <Navigate to="/home" />
  }

  function handleSubmit(){


    if(action==="Login"){
      setUser(obj);
      setAction("Sign up");
      axios.post('http://localhost:3000/api/auth/login',user)
      .then(res=>{
        if(res.data.auth){
          localStorage.setItem('userId',res.data.userId);
          // console.log(res.data.role);
          if(res.data.role===777){
            localStorage.setItem('role','admin');
          }
          else{
            localStorage.setItem('role','user');
          }
          setAuth(true);
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
    else{
      setUser(obj);
      setAction("Login");
      axios.post('http://localhost:3000/api/auth/register',user)
      .then(res=>{
        setAuth(true);
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }

  return (
    <div className='container'>
      <div className='header' >
        <div className='text' >{action}</div>
        <div className='underline' ></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<></>:<div className='input'>
          <img src={user_icon} alt="" />
          <input 
          type='text' 
          placeholder='Enter Your First Name'
          value={user.firstName}
          onChange={handleUserChange}  
          name="firstName"
          />
        </div>}
        {action==="Login"?<></>:<div className='input'>
          <img src={user_icon} alt="" />
          <input 
          type='text' 
          placeholder='Enter Your Last Name'
          value={user.lastName}
          onChange={handleUserChange}
          name="lastName"
          />
        </div>}
        <div className='input'>
          <img src={email_icon} alt="" />
          <input 
          type='email' 
          placeholder='Enter Your Email'
          value={user.email}
          onChange={handleUserChange}
          name="email"
          />
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input 
          type='password' 
          placeholder='Enter Your Password'
          value={user.password}
          onChange={handleUserChange}
          name="password"
          />
        </div>
      </div>
      <div className="submit-container">
        <div onClick={handleSubmit} className={action==="Sign up"?"submit":"submit gray"}>Sign Up</div>
        <div onClick={handleSubmit} className={action==="Login"?"submit":"submit gray"}>Login</div>
      </div>
    </div>
  )
}