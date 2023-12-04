import React, { useState } from 'react';
import './AddProductForm.css';
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import axios from 'axios';

function AddProductForm(){
  const [productData, setProductData] = useState({
    title: '',
    image: '',
    category: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  console.log(productData);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/products/admin/new', {title:productData.title,
     image:productData.image, 
     cat_id:productData.category, 
     price:productData.price})
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Add a New Product</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <MdOutlineProductionQuantityLimits className='icons' />
          <input
            type="text"
            placeholder="Product Name"
            value={productData.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="input">
          <FaLink className='icons' />
          <input
            type="text"
            placeholder="Product Image URL"
            value={productData.image}
            onChange={handleChange}
            name="image"
          />
        </div>
        <div className="input">
          <BiCategory className='icons'/>
          <select className="add-select" value={productData.category} onChange={handleChange} name="category">
            <option value="" selected>Select your Category</option>
            <option value="2">Electronics</option>
            <option value="1">Shoes</option>
          </select>
        </div>
        <div className="input">
          <MdOutlineAttachMoney className='icons' />
          <input
            type="number"
            placeholder="Product Price"
            value={productData.price}
            onChange={handleChange}
            name="price"
          />
        </div>
      </div>
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default AddProductForm;
