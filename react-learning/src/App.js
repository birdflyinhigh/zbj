import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // 两种限制：
    // 1. class要写成className, 因为class是关键预留字
    // 2. JSX里面只能写一个根element, 不能并列写两个或者多个element

    render() {
        return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello, this is rendered by React.createElement'));
    }
}

export default App;
