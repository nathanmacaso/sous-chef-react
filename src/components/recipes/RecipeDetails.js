import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import _ from 'lodash';

const RecipeDetails = (props) => {
  const { recipe, nutritionalFacts } = props;
  console.log(recipe);
  // console.log(nutritionalFacts);
  
  // let ingredients;
  // console.log(recipe.ingredients.split(','));

  
  
  
  if(recipe) {
    const ingredientArray = recipe.ingredients.split(',');
    let ingredients;
    ingredients = ingredientArray.map(ingredient => {
      return(
        <li key={_.uniqueId()}>{ingredient}</li>
      );
    });

    const directionsArray = recipe.directions.split('\\n');
    console.log(directionsArray);
    let directions;
    directions = directionsArray.map(direction => {
      return (
        <p key={_.uniqueId()}>{direction}</p>
      );
    })
    return(
      <div className="container">
        <h2 className="recipe-details-heading mt-5">{recipe.title}</h2>
        <div className="row">
          <div className="col-md-6 recipe-details-img-container">
            <img src={recipe.image} className="recipe-details-img" alt={recipe.title}/>
            <div className="recipe-details-times-container">
              <h2 className="recipe-details-times">Prep Time: {recipe.prepTime}</h2>
              <h2 className="recipe-details-times">Cook Time: {recipe.cookTime}</h2>
              <h2 className="recipe-details-times">Yeild: {recipe.yeild}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="recipe-details-ingredients-container">
              <h2 className="recipe-details-ingredients">Ingredients</h2>
              <ul>
                {ingredients}
              </ul>
            </div> 
          </div>
        </div>
        <div className="row mt-3 pb-3">
          <div className="col-md-8">
            <h2 className="recipe-details-ingredients">Directions</h2>
            {directions}
          </div>
          <div className="col-md-4">
            <h2 className="recipe-details-ingredients">Nutritional Facts</h2>
          </div>
        </div>
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