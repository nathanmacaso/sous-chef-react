import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Recipes from './components/recipes/Recipes';
import Pantry from './components/pantry/Pantry';

class App extends Component {
  
  render() {  
    return (
      <BrowserRouter>
        <div>
          <Navbar/>

          <Route exact path="/" render={() => (<Redirect to="/home" />)}/>
          <Route exact path="/home" component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/pantry" component={Pantry} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
