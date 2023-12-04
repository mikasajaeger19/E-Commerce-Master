import React from 'react'
import "./AdminCard.css"
import {Navigate} from 'react-router-dom'
import axios from 'axios';


function AdminCard({ category, name, price, image, id }){
    const [update,setUpdate]=React.useState(false);
    const [remove,setRemove]=React.useState(false);
    function handleUpdate(){
        setUpdate(true);
    }
    if(update){
        return <Navigate to={`/updateproducts/${id}`} state={{name,category:category==='Shoes'?1:2,price,image}}  />
    }
    if(remove){
        return <Navigate to="/home"  />
    }
    function handleRemove(){
        axios.delete(`http://localhost:3000/api/products/admin/delete/${id}`)
        .then(res=>{
            console.log(res.data);
            setRemove(true);
        })
        .catch(err=>{
            console.log(err);
        })
        
    }

    return (
            <div className="card">
            <img src={image} alt={name} className="product-image" />
            <div className="card-details">
                <h2 className="product-name">{name}</h2>
                <p className="product-category">{category}</p>
                <p className="product-price">${price}</p>
                <button onClick={handleUpdate} className="add-to-cart-btn">
                Update Product
                </button>
                <button onClick={handleRemove} className="add-to-cart-btn">
                Remove Product
                </button>
            </div>
            </div>
        
      );
}

export default AdminCard