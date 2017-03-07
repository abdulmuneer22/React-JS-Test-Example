import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore  , applyMiddleware} from 'redux'
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import ISBNSearch from './Components/ISBNSearch'
import SaveBlock from './Components/SaveBlock'


import BulkUploadRefinements from './Components/BulkUploadRefinements'

import reducers from './Redux/reducers'
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends Component {
  constructor(){
    super();
    injectTapEventPlugin();
  }
  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <BulkUploadRefinements/>
      </div>
    </Provider>
    );
  }
}

export default App;
