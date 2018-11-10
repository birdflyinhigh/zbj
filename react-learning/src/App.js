import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello, this is rendered by React.createElement'));
    }
}

export default App;
