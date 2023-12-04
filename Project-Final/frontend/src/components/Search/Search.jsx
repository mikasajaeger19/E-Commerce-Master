import React from 'react';
import './Search.css'; // Import CSS file for styling
import axios from 'axios';

const SearchComponent = ({onChange}) => {
    const [category, setCategory] = React.useState('All');
    const [productName, setProductName] = React.useState('');
  
    const handleCategoryChange = async (e) => {
      const selectedCategory = e.target.value;
      setCategory(selectedCategory);
    
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${selectedCategory}`);
        console.log(response.data);
        onChange(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    
  
    const handleProductNameChange = (e) => {
      setProductName(e.target.value);
    };
  
    const handleSearch = () => {
      console.log(productName);
      (productName===''?axios.get(`http://localhost:3000/api/products/${category}`):
      axios.get(`http://localhost:3000/api/products/name/${productName}`))
        .then((res) => {
          if(res.data.message==='No products found'){
            alert('No products found')
          }
          else{
            let productsArray;

            // Check if res.data.products is an array
            if (Array.isArray(res.data.products)) {
              productsArray = res.data.products;
            } else {
              // If not an array, create an array with a single object
              productsArray = [res.data.products];
            }
  
            console.log(productsArray);
            onChange(productsArray);
          }
          })
         
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
    <div className="search-comp">
      <div className="search-container">
        <select value={category} onChange={handleCategoryChange} className="category-select">
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Shoes">Shoes</option>
        </select>
        <input
          type="text"
          placeholder="Enter product name..."
          value={productName}
          onChange={handleProductNameChange}
          className="product-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
    </div>
    );
  };

export default SearchComponent;
