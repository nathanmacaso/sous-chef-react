import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../images/logo.png';
import { signIn, signOut, signUp } from '../../store/actions/authActions';
import Login from './Login';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      loginMethod: 'current member',
    };
  }

  toggleLoginMethod = (method) => {
    this.setState({
      loginMethod: method
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { loginMethod } = this.state;
    if(loginMethod === 'new member') {
      this.props.signUp(this.state);
    } 
    if(loginMethod === 'current member'){
      this.props.signIn(this.state);
    }
  }

  render() {
    const { authError, signOut, auth, profile } = this.props;

    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks/>;
    
    const logoutLink = <button className="nav-link" onClick={signOut}>Logout {profile.firstName}?</button>
    const loginLinks = <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} toggleLoginMethod={this.toggleLoginMethod} authError={authError}/>;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/home" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo"/>
        </ NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { links }
          <ul className="navbar-nav pr-3">
            { auth.uid ? logoutLink : loginLinks }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut()),
    signUp: (newUser) => dispatch(signUp(newUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)