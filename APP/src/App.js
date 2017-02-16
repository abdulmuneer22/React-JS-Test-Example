import React, { Component } from 'react';

import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import ISBNSearch from './Components/ISBNSearch'

class App extends Component {
  constructor(){
    super();
    injectTapEventPlugin();
  }
  render() {
    return (
      <div className="App">
        <ISBNSearch/>
      </div>
    );
  }
}

export default App;
