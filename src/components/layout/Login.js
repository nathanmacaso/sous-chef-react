import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({handleChange, handleSubmit}) => {
  return (
    <li className="nav-item dropdown">
    <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Login
    </Link>
    <div className="dropdown-menu login-menu" aria-labelledby="navbarDropdown">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="login-label" htmlFor="email">Email Address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label className="login-label" htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange}/>
      </div>
      <button type="submit" className="btn btn-outline-light my-2 my-sm-0 login-button">Submit</button>
    </form>
      <div className="dropdown-divider py-1"></div>
      <Link to="/signup" className="dropdown-item sign-up">Sign Up</Link>
    </div>
  </li>

  );
}
export default Login;
