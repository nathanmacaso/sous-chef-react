import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import logo from '../../images/logo.png';
import { createUser } from '../../store/actions/authActions';
import Login from './Login';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      first: '',
      last: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
  }

  render() {
    const { auth } = this.props;
    let loginLinks;
    if(auth.isLoggedIn) {
      loginLinks = <NavLink to="/signout" className="nav-link">Sign Out</NavLink>
    } else {
      loginLinks = <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/home" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo"/>
        </ NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
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
            {loginLinks}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps), 
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Navbar)