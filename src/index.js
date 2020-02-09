/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import App from './containers/App';
import reducer from './reducers/profileReducers';

const store = createStore(
  reducer,
  {},
  composeWithDevTools(
    applyMiddleware(reduxThunk),
  ),
);
const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
);
