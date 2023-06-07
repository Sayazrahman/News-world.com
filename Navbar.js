import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className=" sticky-top navbar navbar-expand-lg navbar-dark border-10 rounded " style={{backgroundColor: "#7D0082",}}>
          <div className="container-fluid">
          <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVVXU_3MHc3DPIryS7AtU7frFu3Ts8omrAQ&usqp=CAU" style={{height: "2.5rem", width: "2.5rem",margin: "0 10px 0", borderRadius: "22px"}}
        alt=""
      />
           
            <Link className="navbar-brand" to="/Home"  style={{fontFamily : "fantasy",fontStyle: "bold"}}>
              News World
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Home">
                    Home |
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Business">
                    Business |
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/Health">
                    Health |
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Entertainment">
                    Entertainment |
                  </Link>
                </li>
                <li>
                  <Link className="nav-link " to="/General">
                    General |
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Science">
                    Science |
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Sports">
                    Sports |
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Technology">
                    Technology |
                  </Link>
                  
                </li>
              </ul>
             
            </div>
            <Link to="https://www.instagram.com/accounts/login/" target= "_blank" className="fa fa-instagram"></Link>
   <Link to="twitter.com" className="fa fa-twitter"></Link>
    <Link to="facebook.com" className="fa fa-facebook"></Link>
    <button type="button" className="btn btn-danger mx-3">Login/Subscribe</button>
    <button type="button" className="btn btn-warning">Write to us</button>
          </div>
        </nav>
      </>
    );
  }
}
