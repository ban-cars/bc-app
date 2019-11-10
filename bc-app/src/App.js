import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Map from "./pages/Map/Map";
import SignInSide from "./pages/SignIn/SignInSide";
import Join from "./pages/Join/Join";
import CompleteJoin from "./pages/CompleteJoin/CompleteJoin";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/join/complete" component={CompleteJoin} />
          <Route exact path="/confirmation" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
