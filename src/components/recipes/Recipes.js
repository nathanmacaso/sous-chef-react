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
              <img src={recipe.image} className="card-img-top recipes-img" alt={recipe.title}/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}className="btn btn-primary">View Recipe</Link>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
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