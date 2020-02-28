"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import {Provider} from 'react-redux';
import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';

import logger from "./logger.jsx";
import ImmutableGrid from './immutableGrid.jsx';
import ReplaceDataButton from './replaceDataButton.jsx';
import {
  reducer as immutableReducers,
  initialState as immutableState
} from './immutableStore.jsx';

const appReducer = combineReducers({
  immutableStore: immutableReducers
});

const initialState = {
  immutableStore: immutableState
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(appReducer, initialState, applyMiddleware(logger));
  }

  replaceAllData

  render() { 
    return (
      <Provider store={this.store}>
        <div>
          <ReplaceDataButton />
          <ImmutableGrid />
        </div>
      </Provider>
    );
  }
}

