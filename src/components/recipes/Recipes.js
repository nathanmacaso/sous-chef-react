import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Recipes extends Component {
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
        <div className="card col-sm-6 col-md-4 ml-auto" key={recipe.id}>
          <img src={recipe.image} className="card-img-top " alt={recipe.title}/>
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">{recipe.description}</p>
            <Link to="/recipes"className="btn btn-primary">View Recipe</Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="row mx-auto">
          { recipeIndex }
        </div>
      </div>
    );
  }
}
