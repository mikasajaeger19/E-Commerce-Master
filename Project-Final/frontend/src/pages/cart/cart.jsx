import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import "./cart.css";
import {CartItems} from './cart-items.jsx';
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar.jsx';



export const Cart = () => { 

  const [cartItems,setcartItems] = useState([]);


  const userId = localStorage.getItem('userId');

  useEffect(()=> {
    const fetchcartItems = async(userId) => {
    try{
      const response  = await axios.get(`http://localhost:3000/api/cart/${userId}`);
      setcartItems(response.data);
    }
    catch(error){
      console.error('error fetching cart');
    }
  }

  
  if(userId)
    fetchcartItems(userId);
  },[])


    
  return (
    <>
      <Navbar />
      <div className= "cart">
          <h1>Your Cart</h1>


          <div className="cart_items">

            {cartItems.map((item) => (
              <CartItems image = {item.image} name = {item.name} amount = {item.quantity} price = {item.price}/>
            ))}
            


            <div className  = "checkout">
            <Link to  = "/checkout">
            <button>Check Out</button>
            </Link>
            </div>
    
    
            <div className = "home">
                <Link to = "/home">
                <button>Home</button>
                </Link>
            </div>
    
        </div>
      </div>
    </>

  )
          }
  