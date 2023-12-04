import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./accounts.css"
import Navbar from "../../components/Navbar/Navbar.jsx"


export const Account = () => {

    const [userData,setuserData]=useState({})
    

    useEffect( () => {
        const userId = localStorage.getItem('userId')


        const fetchUserData = async() =>{
            try {
                const response  =await axios.get(`http://localhost:3000/api/users/${userId}`)
                console.log(response.data)
                setuserData(response.data)
            } catch(errror){
                //print("invalid user")
            }
        }

        fetchUserData();

    },[]);

    

  return (
    <>
    <Navbar />
    <div className='container'>
    <div className='div'>
        <h1 className = 'heading'>Account Details</h1>
        <div className = 'underlinecont'>
        <p className = 'underline'> </p>
        </div>
        <img  className = 'pfp' src ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png' alt = 'not loaded'/>
        <p className='information'>User : {userData.username}</p>
        <p className='information'>Email : {userData.email}</p>
        <p className='information'>Name : {userData.fname+' '+userData.lname}</p>
        <h2><Link className = 'homebuttom' to = '/home'>Go Home</Link></h2>
        
       
        
    </div>
    </div>
    </>
    
  )
}
