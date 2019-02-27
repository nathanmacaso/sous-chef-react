import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    fetch('http://localhost:4000/recipes')
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          recipes: data
        });
      })
      .catch(err => console.error(err))
  }

  renderRecipe = ({ id, title }) => <div key={id}>{title}</div>;

  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        {recipes.map(this.renderRecipe)}
      </div>
    );
  }
}

export default App;
