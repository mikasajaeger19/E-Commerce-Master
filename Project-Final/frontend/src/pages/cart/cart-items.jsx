import React  from 'react';
import "./cart-items.css";
//import axios from 'axios';
//import {useState,useEffect} from 'react-redux';

const CartItems = (props) => {
  //const [product1, setProduct1] = useState(null);
  //const [product2, setProduct2] = useState(null); 
/*
  useEffect(() => {
    // Fetch product ID 1
    fetch('http://localhost:3000/products/1')
      .then(response => response.json())
      .then(data => {
        setProduct1(data);
      })
      .catch(error => console.error('Error fetching product 1:', error));

    // Fetch product ID 2
    fetch('http://localhost:3000/products/2')
      .then(response => response.json())
      .then(data => {
        setProduct2(data);
      })
      .catch(error => console.error('Error fetching product 2:', error));
  }, []);
  */


  //axios.get("localhost::3000/api/products/2")

  return (
    <div>
      <div className="cart_items">
        
          <div key={props.category}>
            <h2 className='name'>{props.name}</h2>
            <img className = 'image' src = {props.image} alt = "not loaded"/>

            <p className = "pricetag">Price: {props.price}</p>
            <h3 className = 'amount'>Quantity : {props.amount}</h3>
    
          </div>
       
      </div>
    </div>
  );
};

export  {CartItems};
