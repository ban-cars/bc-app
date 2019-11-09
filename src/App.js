import React from 'react';
import Map from './components/Map';

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
    return (
      <Map/>
    );
  };

}

export default App;
