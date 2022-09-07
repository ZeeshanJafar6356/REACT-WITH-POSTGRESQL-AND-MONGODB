import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Login = () => {
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [address, setaddress] = useState('');
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  function saveData() {
    let data = { name, phone, email, address };
    if (!name || !phone || !email || !address) {
      seterror(true);
      return false;
    } else {
      alert('successfully Signed Up');
      fetch('http://localhost:5000/api/customers', {
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
  function loginData() {
    if (!email || !password) {
      seterror(true);
      return false;
    } else {
      alert('successfull');
      navigate('/products');
    }
  }

  return (
    <div className=" d-flex justify-content-center align-items-center mt-4">
      <div className="card col-sm-7 col-lg-3">
        <ul className="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
          <li className="nav-item text-center">
            <a
              className="nav-link active btl"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Login
            </a>
          </li>
          <li className="nav-item text-center">
            <a
              className="nav-link btr"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Signup
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="form px-4 pt-5">
              <input
                type="text"
                className="form-control"
                placeholder="Email "
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              {error && !email && (
                <span className="invalid-input">Enter Email</span>
              )}
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              {error && !password && (
                <span className="invalid-input">Enter Password</span>
              )}
              <button className="btn btn-dark btn-block " onClick={loginData}>
                Login
              </button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="form px-4">
              <input
                type="text"
                name=""
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              {error && !name && (
                <span className="invalid-input">Enter Name</span>
              )}
              <input
                type="text"
                name=""
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              {error && !email && (
                <span className="invalid-input">Enter Email</span>
              )}

              <input
                type="text"
                name=""
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
              {error && !phone && (
                <span className="invalid-input">Enter Phone </span>
              )}
              <input
                type="text"
                name=""
                className="form-control"
                placeholder="address"
                value={address}
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
              {error && !address && (
                <span className="invalid-input">Enter Address</span>
              )}
              <button className="btn btn-dark btn-block " onClick={saveData}>
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
