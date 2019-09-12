import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import background from '../../images/ingredients.jpg';

class Pantry extends Component {
  render() {
    const { auth } = this.props;

    if(!auth.uid) return <Redirect to="/recipes"/>
    
    return (
      <div>
        <div className="pantry-overlay">
          <img src={background} className="pantry-background" alt="pantry"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Pantry)
