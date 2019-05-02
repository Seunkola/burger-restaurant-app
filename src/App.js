import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Styles/animate.css';
import './Styles/bootsnav.css';
import './Styles/color.css';
import './Styles/custom.css';
import Home from './Components/Layouts/Home';
import MealDetails from './Components/Layouts/MealDetails';
import Checkout from './Components/Checkout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="view">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mealdetails" component={MealDetails} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
  