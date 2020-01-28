import React from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Hello World!</h1>
      </div>
    </Provider>
  );
};

export default App;
