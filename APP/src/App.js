import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import ISBNSearch from './Components/ISBNSearch'
import SaveBlock from './Components/SaveBlock'

import reducers from './Redux/reducers'


class App extends Component {
  constructor(){
    super();
    injectTapEventPlugin();
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <div className="container">

        <SaveBlock />
        <ISBNSearch/>
      </div>
    </Provider>
    );
  }
}

export default App;
