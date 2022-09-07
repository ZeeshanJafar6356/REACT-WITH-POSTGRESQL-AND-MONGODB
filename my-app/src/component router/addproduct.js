import React from 'react';
// import axios from 'axios';

const Addproduct = () => {
  const [name, setname] = React.useState('');
  const [price, setprice] = React.useState('');
  const [description, setdescription] = React.useState('');
  const [color, setcolor] = React.useState('');
  const [image, setimage] = React.useState('');

  async function addProduct() {
    let data = { name, price, description, color, image };
    console.log(data);
    if (!name || !price || !color || !description || !image) {
      alert('Please fill out the form');
    } else {
      await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((resp) => {
        console.warn('resp', resp);
        resp.json().then((result) => {
          console.warn('result', result);
        });
      });
    }
  }

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputBox mx-auto"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Enter product price"
        className="inputBox mx-auto"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product description"
        className="inputBox mx-auto"
        value={description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product image"
        className="inputBox mx-auto"
        value={image}
        onChange={(e) => {
          setimage(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product color"
        className="inputBox mx-auto"
        value={color}
        onChange={(e) => {
          setcolor(e.target.value);
        }}
      />

      <button onClick={addProduct} className="appButton bg-primary text-light">
        Add Product
      </button>
    </div>
  );
};

export default Addproduct;
