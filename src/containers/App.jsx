import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import Header from '../components/Header';
import About from '../components/About';
import Profile from './Profile';
import reducer from '../redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <About />
        <Profile />
      </Provider>
    </>
  );
};

export default App;
