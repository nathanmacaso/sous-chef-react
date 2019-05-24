import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const RecipeDetails = (props) => {
  const { recipe } = props;
  console.log(recipe);
  if(recipe) {
    return(
      <div className="container">
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title}/>
        <h3>{recipe.ingredients}</h3>
        <h4>{recipe.directions}</h4>
      </div>
    );
  } else {
    return(
      <div className="container center">
        <p>Loading recipe ...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null;
  return {
    recipe: recipe
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(RecipeDetails)