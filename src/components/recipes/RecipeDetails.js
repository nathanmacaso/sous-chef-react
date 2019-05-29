import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const RecipeDetails = (props) => {
  const { recipe, nutritionalFacts } = props;
  console.log(recipe);
  console.log(nutritionalFacts);
  // const x = Object.keys(nutritionalFacts);
  // console.log(x);
  if(recipe) {
    return(
      <div className="container">
        <h2  className="recipe-details-heading mt-5">{recipe.title}</h2>
        <img src={recipe.image} className="recipe-details-img" alt={recipe.title}/>
        <h3>{recipe.ingredients}</h3>
        <h4>{recipe.directions}</h4>
        {/* <p>{nutritionalFacts.calories}</p> */}
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
  const nutritionalFacts = state.firestore.data.nutritionalFacts;
  console.log(state);
  return {
    recipe: recipe,
    recipeId: id,
    nutritionalFacts: nutritionalFacts
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: 'recipes' },
    { collection: 'nutritionalFacts',
      where: ["recipeId", "==", props.recipeId],
      queryParams: [ 'limitToFirst=1' ],
      storeAs: 'nutritionalFacts'
    }
  ])
)(RecipeDetails)