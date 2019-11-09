import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Map from './pages/Map/Map';
import SignInSide from './pages/SignIn/SignInSide';
import {getAvailableParking} from "./api/getAvailableParking";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      parkingSpots:[],
    };

    this.getParking = async () => {
      return await getAvailableParking();
    }

  };

  render(){
    this.getParking();
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/map" component={<Map parkingSpots={this.getParking()}/>} />
          <Route exact path="/confirmation"/>
        </Switch>
      </BrowserRouter>
    );
  };

}

export default App;
