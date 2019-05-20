import React, { Component } from 'react';
import background from '../../images/ingredients.jpg';

export default class Pantry extends Component {
  render() {
    return (
      <div>
        <div className="pantry-overlay">
          <img src={background} className="pantry-background" alt="pantry"/>
        </div>
      </div>
    )
  }
}
