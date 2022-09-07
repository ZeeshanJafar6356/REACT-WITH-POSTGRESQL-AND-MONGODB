import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/orders',
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="cart mt-5  ">
      <div className="container">
        <div className="row">
          <div className="col-9 col-sm-12">
            <div className="cart__heading ">
              <div className="row">
                <h5 className="col-3 ">Picture</h5>
                <h5 className="col-1">Id</h5>
                <h5 className="col-2">Customer_Id</h5>
                <h5 className="col-2">Product_Id</h5>
                <h5 className="col-2">Reviews</h5>
                <h5 className="col-2">Total Price</h5>
              </div>
            </div>
            {data.map((order) => (
              <div className="row verticalAlign" key={order.id}>
                <div className="col-3">
                  <div className="cart__image">
                    <img src={`${order.image}`} alt="" />
                  </div>
                </div>
                <div className="col-1">
                  <div className="cart__name">{order.id}</div>
                </div>
                <div className="col-2">
                  <div className="cart__name">{order.customer_id}</div>
                </div>
                <div className="col-2">
                  <div className="cart__name">{order.products_id}</div>
                </div>
                <div className="col-2">
                  <div className="cart__name">{order.review}</div>
                </div>
                <div className="col-2">
                  <div className="cart__name">{order.totalprice}</div>
                </div>
              </div>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br>
          <div className="col-4 summary-col mt-5">
            <div className="summary">
              <div className="summary__heading">Summary</div>
              <div className="summary__details">
                <div className="row mb-10">
                  <div className="col-6">Total Items:</div>
                </div>
                <div className="row mb-10">
                  <div className="col-6">Total Price</div>
                </div>
                <button type="button" className="checkout">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
