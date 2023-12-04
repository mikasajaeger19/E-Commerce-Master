import React from 'react'
import "./Card.css"
import axios from 'axios'

function Card({ category, name, price, image, id }){
    function handleAdd(){
        axios.post(`http://localhost:3000/api/cart/new/${localStorage.getItem('userId')}`,{product_id:id,quantity:quantity})
        .then(res=>{
            console.log(res.data);
        })
    }
    const [quantity,setQuantity]=React.useState(1);

    return (
        <div className="card">
            <img src={image} alt={name} className="product-image" />
            <div className="card-details">
                <h2 className="product-name">{name}</h2>
                <div className='product-info'>
                    <div>
                        <p className="product-category">{category}</p>
                        <p className="product-price">${price}</p>
                    </div>
                    <input 
                    type="number" 
                    className="product-quantity" 
                    placeholder="Quantity" 
                    value={quantity}
                    onChange={(e)=>setQuantity(e.target.value)}
                    />
                </div>
                
                <button onClick={handleAdd} className="add-to-cart-btn">
                Add to Cart
                </button>
            </div>
    </div>
    )
}

export default Card