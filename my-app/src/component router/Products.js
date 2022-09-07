import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const deleteProduct = (id) => {
    console.warn(id);
    let info = fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        console.log(info);
      });
      window.location.reload(false);
    });
  };
  return (
    <div className="container-fluid bg-dark  mt-3">
      <h1 className="bg-primary text-light ">Products</h1>

      <div className="products-container">
        {data.map((product, index) => (
          <div key={index} className=" card col-md-6 col-lg-3 col-sm-7  ">
            <div>
              <img
                className="col-md-11 col-sm-10  "
                src={product.image}
                alt="img"
              />
            </div>
            <div className="card-description mx-auto ">
              <hr></hr>
              {/* <h6>{`${product.id}`} </h6> */}
              <h3>{`${product.name}`}</h3>

              <h5>{`${product.description}`}</h5>
              <h5>{`(${product.color})`}</h5>
              <hr></hr>
              <h5>{`Rs:${product.price}`}</h5>
              <button
                type="button "
                className="btn  btn-primary  w-100  "
                onClick={() => navigate('/Cart')}
              >
                ADD TO BAG
              </button>
              <button
                type="button "
                className="btn  btn-danger  w-100  "
                onClick={() => deleteProduct(product.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
