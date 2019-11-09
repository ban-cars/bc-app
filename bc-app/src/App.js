import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { createBrowserHistory } from "history";

import Map from './pages/Map/Map';
import SignInSide from './pages/SignIn/SignInSide';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activities: {},
      lat: "",
      lon: "",
      category: "",
      start: "",
      end: ""
    };

  };

  render(){
    const history = createBrowserHistory();

    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/map" component={Map}/>
          <Route exact path="/confirmation"/>
        </Switch>
      </BrowserRouter>
    );
  };

}

export default App;
