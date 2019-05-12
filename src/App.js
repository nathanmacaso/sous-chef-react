import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';

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

  render() {

    const recipeIndex = this.state.recipes.map(recipe => {
      return(
        <div className="card container mt-4" key={recipe.id}>
          <img src={recipe.image} className="card-img-top " alt={recipe.title}/>
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">{recipe.description}</p>
            <a href="#" className="btn btn-primary">View Recipe</a>
          </div>
        </div>
      );
    });
    
    return (
      <div>
        <Navbar/>
        <Home />
        {/* {recipeIndex} */}
      </div>
    );
  }
}

export default App;
