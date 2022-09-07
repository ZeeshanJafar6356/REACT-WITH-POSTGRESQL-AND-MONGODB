import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="container-fluid ">
      <div className="py-5" id="venue">
        <div className="container">
          <div className="row bg-primary animate-in-down">
            <div className="p-4 col-md-6 col-sm-6 align-self-center text-color">
              <p className="m-0">Welcome To</p>
              <h2>E-Commerce Shop</h2>
              <p className="my-4">
                E-Commerce is a Shopping Website Where you can Purchase
                different items.Feel comfortable, and purchase items
              </p>{' '}
              <Link to="/Login" className="btn p-2 btn-light">
                Login
              </Link>
              <Link to="/Login" className="btn p-2 btn-light">
                Signup
              </Link>
            </div>
            <div className="p-2 col-md-6">
              <div
                className="carousel slide"
                data-ride="carousel"
                id="carousel1"
              >
                <div className="carousel-inner">
                  <div className="carousel-item">
                    {' '}
                    <img
                      className="d-block  w-100"
                      src="https://purepng.com/public/uploads/large/purepng.com-digital-photo-cameracameraphotodigital-cameravideophoto-machinephoto-maker-2315193356076hxhi.png"
                      alt="first slide"
                    ></img>
                  </div>
                  <div className="carousel-item active">
                    {' '}
                    <img
                      className="f-block img-fluid w-100"
                      src="https://purepng.com/public/uploads/large/purepng.com-macbookmacbooknotebookcomputersapple-inmacbook-familyapple-laptops-1701528360861qyhih.png"
                      data-holder-rendered="true"
                      alt="img"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    {' '}
                    <img
                      className="d-block img-fluid w-100"
                      src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/2022-spring-iphone13-pro-max-colors.png"
                      data-holder-rendered="true"
                      alt="img"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    {' '}
                    <img
                      className="d-block img-fluid w-100"
                      src="https://purepng.com/public/uploads/large/purepng.com-laptop-notebooklaptopsnotebooknotebook-computerclamshell-17015283548647iqlh.png"
                      data-holder-rendered="true"
                      alt="img"
                    ></img>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carousel1"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>{' '}
                  <span className="sr-only">Previous</span>{' '}
                </a>{' '}
                <a
                  className="carousel-control-next"
                  href="#carousel1"
                  role="button"
                  data-slide="next"
                >
                  {' '}
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>{' '}
                  <span className="sr-only">Next</span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container d-flex justify-content-center mt-5 col-sm-12">
        <div class="card text-center mb-5">
          <div class="circle-image col-sm-3 ">
            <img src="https://i.imgur.com/zLnZO6u.png" width="50" alt="pict" />
          </div>

          <span class="help-text mb-1 fw-500">Thankyou</span>
          <small class="text-black-50">
            Recommend us to others by rating us on app store!
          </small>

          <div class="buttons mb-3 mt-4  ">
            <button class="btn btn-outline-dark btn-block ">Yes,Rate it</button>

            <button class="btn btn-outline-dark btn-block">No,Thanks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
