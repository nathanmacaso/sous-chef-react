import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({handleChange, handleSubmit, toggleLoginMethod, authError}) => {
  return (
    <li className="nav-item dropdown">
      <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Login
      </Link>
      <div className="dropdown-menu login-menu" aria-labelledby="navbarDropdown">
        <form onSubmit={handleSubmit}>

          <div className="login-error">
            { authError ? <p>{ authError }</p> : null }
          </div>

          <ul className="nav mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" 
                 aria-selected="true" onClick={() => toggleLoginMethod('current member')}>
                   Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" 
                 aria-selected="false" onClick={() => toggleLoginMethod('new member')}>
                   &emsp;Sign Up
              </a>
            </li>
          </ul>

          <div className="dropdown-divider py-1 mb-3"></div>
      
          <div className="tab-content" id="pills-tabContent">

            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
              <div className="form-group">
                <label className="login-label" htmlFor="email">Email Address</label>
                <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label className="login-label" htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange}/>
              </div>
              <button type="submit" className="btn btn-outline-light my-2 my-sm-0 login-button">Login</button>
            </div>

            <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
              <div className="form-group">
                <label className="login-label" htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" name="firstName" placeholder="Enter First Name" onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label className="login-label" htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" name="lastName" placeholder="Enter Last Name" onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label className="login-label" htmlFor="email">Email Address</label>
                <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label className="login-label" htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange}/>
              </div>
              <button type="submit" className="btn btn-outline-light my-2 my-sm-0 login-button">Sign Up</button>
            </div>

          </div>

        </form>
      </div>
    </li>
  )
}

export default Login;
