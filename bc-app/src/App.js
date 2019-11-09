import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Map from './pages/Map/Map';
import SignInSide from './pages/SignIn/SignInSide';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      licensePlate: "V6M 4M2"
    };

  };

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/confirmation"/>
        </Switch>
      </BrowserRouter>
    );
  };

}

export default App;
