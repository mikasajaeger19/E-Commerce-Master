import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar.jsx"
import './checkout.css'; 

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentReceived, setPaymentReceived] = useState(false);
  const navigate = useNavigate();

  const handlePaymentOptionChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handlePayment = () => {
    if (selectedPayment) {
      // Simulating payment processing (you can add actual payment logic here)
      setPaymentReceived(true);
    }
  };

  useEffect(() => {
    if (paymentReceived) {
      const redirectTimer = setTimeout(() => {
        console.log('Redirecting to home page...');
        navigate('/home');
      }, 2000);

      return () => clearTimeout(redirectTimer);
    }
  }, [paymentReceived, navigate]);

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <h1 className = 'checktext'>Checkout</h1>
        <div className = 'underlinecont'>
        <p className = 'underline'></p>
        </div>
        <div className="payment-options">
          <label className="payment-label">
            <input
              type="radio"
              name="paymentOption"
              value="Credit Card"
              onChange={handlePaymentOptionChange}
            />
            Credit Card
          </label>
          <label className="payment-label">
            <input
              type="radio"
              name="paymentOption"
              value="PayPal"
              onChange={handlePaymentOptionChange}
            />
            Google Pay
          </label>
          <label className="payment-label">
            <input
              type="radio"
              name="paymentOption"
              value="Stripe"
              onChange={handlePaymentOptionChange}
            />
            Cash on Delivery
          </label>
        </div>
        <button onClick={handlePayment} className="payment-button">
          Proceed with Payment
        </button>
        {paymentReceived && <p className="payment-received">Payment Received!</p>}
        <Link to="/home" className="home-link">Go to Home</Link>
      </div>
    </>
  );
};

export {Checkout};
