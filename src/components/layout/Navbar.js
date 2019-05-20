import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export default class Navbar extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo"/>
        </ NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item pr-3">
              <NavLink to="/" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item pr-3">
              <NavLink to="/recipes" className="nav-link">Recipes</NavLink>
            </li>
            <li className="nav-item pr-3">
              <NavLink to="/pantry" className="nav-link">Pantry</NavLink>
            </li>
            <li className="nav-item pr-3">
              <NavLink to="/cookbook" className="nav-link">Cookbook</NavLink>
            </li>
            <li className="nav-item pr-3">
              <NavLink to="/stores" className="nav-link">Find Stores</NavLink>
            </li>
            <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 search-box" type="search" placeholder="Search Recipes" aria-label="Search" />
              <button className="btn btn-outline-light my-2 my-sm-0 search-button" type="submit">Search</button>
            </form>
            </li>
          </ul>
          <ul className="navbar-nav pr-3">
            <li className="nav-item dropdown">
              <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Login
              </Link>
              <div className="dropdown-menu login-menu" aria-labelledby="navbarDropdown">
              <form>
                <div className="form-group">
                  <label className="login-label" htmlFor="email">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <label className="login-label" htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-outline-light my-2 my-sm-0 login-button">Submit</button>
              </form>
                <div className="dropdown-divider py-1"></div>
                <Link to="/" className="dropdown-item sign-up">Sign Up</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
