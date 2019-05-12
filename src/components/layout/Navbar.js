import React, { Component } from 'react';
import logo from '../../images/logo.png';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleButtonStyles = (e) => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    let buttonStyle;
    if(this.state.clicked) {
      buttonStyle = ''
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active pr-3">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item pr-3">
              <a className="nav-link" href="#">Recipes</a>
            </li>
            <li className="nav-item pr-3">
              <a className="nav-link" href="#">Pantry</a>
            </li>
            <li className="nav-item pr-3">
              <a className="nav-link" href="#">Cookbook</a>
            </li>
            <li className="nav-item pr-3">
              <a className="nav-link" href="#">Find Stores</a>
            </li>
            <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 search-box" type="search" placeholder="Search Recipes" aria-label="Search" />
              <button className="btn btn-outline-light my-2 my-sm-0 search-button" type="submit" onClick="handleButtonStyles">Search</button>
            </form>
            </li>
          </ul>
          <ul className="navbar-nav pr-3">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Login
              </a>
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
                <button type="submit" className="btn btn-outline-light my-2 my-sm-0 login-button" onClick="">Submit</button>
              </form>
                <div className="dropdown-divider py-1"></div>
                <a className="dropdown-item sign-up" href="#" onClick="">Sign Up</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
