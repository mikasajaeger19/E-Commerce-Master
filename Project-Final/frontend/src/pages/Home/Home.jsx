import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Search from '../../components/Search/Search.jsx'
import Card from '../../components/Card/Card.jsx'
import AdminCard from '../../components/AdminCard/AdminCard.jsx'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar.jsx'
import "./Home.css"
import axios from 'axios'



function Home() {
    const [products, setProducts] = React.useState([]);
    const role = localStorage.getItem('role');
    console.log(role);
    console.log(products);
  
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/products');
          console.log(response.data.products);
          setProducts(response.data.products);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handlePropChange = (newValue) => {
      setProducts(newValue);
    };
  
    const array = role === 'admin' ? products.map(item => (
      <AdminCard
        category={item.category}
        name={item.name}
        price={item.price}
        image={item.image}
        id={item.id}
      />
    )) : products.map(item => (
      <Card
        category={item.category}
        name={item.name}
        price={item.price}
        image={item.image}
        id={item.id}
      />
    ));
  
    const nav = role === 'admin' ? <AdminNavbar /> : <Navbar />;
    
    return (
      <>
        {nav}
        <Search onChange={handlePropChange} />
        <div className="product-grid">
          {array}
        </div>
      </>
    );
  }

export default Home