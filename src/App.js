import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Recipes from './components/recipes/Recipes';
import RecipeDetails from './components/recipes/RecipeDetails';
import Pantry from './components/pantry/Pantry';

class App extends Component {
  
  render() {  
    return (
      <BrowserRouter>
        <div className="app-container">
          <Navbar/>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/home" />)}/>
            <Route path="/home" component={Home} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/recipe/:id" component={RecipeDetails} />
            <Route path="/pantry" component={Pantry} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
