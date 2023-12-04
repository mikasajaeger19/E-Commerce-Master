import React, { useState } from 'react';
import './UpdateProductForm.css';
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import AdminNavbar from '../AdminNavbar/AdminNavbar.jsx'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function UpdateProductForm(){
  const location = useLocation();
  const passedProps = location.state;
  const [productData, setProductData] = useState({
    productName: passedProps.name,
    productImage: passedProps.image,
    productCategory: passedProps.category,
    productPrice: passedProps.price,
  });
  
  const {id} = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/products/admin/edit/${id}`, {title:productData.productName,
     image:productData.productImage, 
     cat_id:productData.productCategory, 
     price:productData.productPrice})
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  };

  return (
    <>
      <AdminNavbar />
        <div className="container">
        <div className="header">
          <div className="text"> Update Product</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <MdOutlineProductionQuantityLimits className='icons' />
            <input
              type="text"
              placeholder="Product Name"
              value={productData.productName}
              onChange={handleChange}
              name="productName"
            />
          </div>
          <div className="input">
            <FaLink className='icons' />
            <input
              type="text"
              placeholder="Product Image URL"
              value={productData.productImage}
              onChange={handleChange}
              name="productImage"
            />
          </div>
          <div className="input">
            <BiCategory className='icons'/>
            <select className="add-select" value={productData.category} onChange={handleChange} name="productCategory">
                {productData.productCategory === 1 ? <option value="1" selected>Shoes</option> : <option value="1">Shoes</option>}
                {productData.productCategory === 2 ? <option value="2" selected>Electronics</option> : <option value="2">Electronics</option>}
          </select>
          </div>
          <div className="input">
            <MdOutlineAttachMoney className='icons' />
            <input
              type="number"
              placeholder="Product Price"
              value={productData.productPrice}
              onChange={handleChange}
              name="productPrice"
            />
          </div>
        </div>
        <button onClick={handleSubmit}>Update Product</button>
      </div>
    </>
    
  );
};

export default UpdateProductForm;
