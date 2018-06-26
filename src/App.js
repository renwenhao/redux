import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import createStore from './store';
import reducer from './reducer'

var store = createStore(reducer);
console.log('ssssss',store);
class App extends Component {
  
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store }
  }
  render() {
    return (
      <div>
        <Header/>
        <Content/>  
      </div>
    );
  }
}

export default App;
