import React, { Component } from 'react';
import { Clock } from './Clock';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date,
    }
  }


  render() {
    return (
      <Clock time={this.state.time} />
    );
  }
}

export default App;

