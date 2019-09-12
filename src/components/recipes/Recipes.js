import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Recipes extends Component {
  render() {
    const { recipes } = this.props;
    let recipeIndex;
    if(recipes) {
      recipeIndex = recipes.map(recipe => {
        return(
          <div className="card col-sm-6 col-md-4 ml-auto" key={recipe.id}>
            <div className="recipes-img-container">
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} className="card-img-top recipes-img" alt={recipe.title}/>
              </Link>
            </div>
            <div className="card-body">
              <h2 className="card-title recipe-index-title">{recipe.title}</h2>
              <p className="card-text recipe-index-description">{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}className="btn btn-outline-dark">View Recipe</Link>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="recipes-container">
        <div className="row mx-auto">
          { recipeIndex }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Recipes)