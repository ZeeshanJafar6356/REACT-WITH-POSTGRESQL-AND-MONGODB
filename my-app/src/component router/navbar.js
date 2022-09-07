import React from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div class="container-fluid ">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="navbar-toggler-icon"></span>
              </button>{' '}
              <Link to="/" className="navbar-brand h1 mb-0">
                E-COMMERCE
              </Link>
              <span className="v-line"></span>
              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul class="navbar-nav">
                  <li class="nav-item ">
                    <Link to="/" className="nav-link ml-2">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/products" className="nav-link">
                      Products
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/addproduct" className="nav-link">
                      Add Products
                    </Link>
                  </li>
                </ul>
                <ul class="navbar-nav ml-md-auto">
                  <li class="nav-item ">
                    <Link to="/Login" className="nav-link ">
                      Login/SignUp
                    </Link>
                  </li>
                  <Link to="/cart">
                    <BsFillBagFill className="cart-icon ml-3  mt-1 " />
                    Cart
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
