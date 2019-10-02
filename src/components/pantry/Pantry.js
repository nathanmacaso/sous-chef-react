import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { pantryAdd } from '../../store/actions/pantryActions';
import _ from 'lodash';

class Pantry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addIngredients: ''
    };
  }

  handleChange = (e) => {
    console.log('h')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addIngredients } = this.state; 
    const regex = /,\s*/;
    const ingredientsArr = addIngredients.toLowerCase().split(regex);
    const filterIngredients = ingredientsArr.filter((i) => { return i.length > 1 });
    const ingredientSet = new Set(filterIngredients);
    this.props.pantryAdd(ingredientSet);
    this.setState({addIngredients: ''});
  }

  render() {
    const { auth, profile, userPantry } = this.props;
    if(!auth.uid) return <Redirect to="/recipes"/>

    const { addIngredients } = this.state;
    
    let pantryList;
    if(userPantry) {
      const pantryIngredients = userPantry[auth.uid].pantryIngredients;
      pantryList = pantryIngredients.map((ingredient) => {
        return(
        <li key={_.camelCase(ingredient)}>
          {ingredient}
        </li>
        )
      })
    }

    return (
      <div className="pantry-container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="pantry-add col-md-3">
            <h3 className="pantry-h3">Add Ingredients</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <textarea rows={10} cols={50} className="pantry-textarea" value={addIngredients} name="addIngredients" placeholder="Seperate all ingredients with a comma." onChange={this.handleChange}>
                </textarea>
              </div>
              <button className="pantry-btn" type="submit">Add To Pantry</button>
            </form>
          </div>
          <div className="pantry-list col-md-4">
            <h3 className="pantry-h3">{profile.firstName}'s Virtual Pantry</h3>
            <ul className="pantry-ul">
              {pantryList}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pantryError: state.pantry.pantryError,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    userPantry: state.firestore.data.userPantry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pantryAdd: (params) => dispatch(pantryAdd(params)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [
    { collection: 'pantries',
      where: ['userId', "==", props.auth.uid ? props.auth.uid : null],
      storeAs: 'userPantry'
    }
  ])
)(Pantry)
