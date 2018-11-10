import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
// 最好导入的时候，最好使用首字母大写，因为jsx中所有的components用小写开头

class App extends Component {
    // 两种限制：
    // 1. class要写成className, 因为class是关键预留字
    // 2. JSX里面只能写一个根element, 不能并列写两个或者多个element

    render() {
        return (
            <div className="App">
                <h1>Alex</h1>
                <p>Alex is now here </p>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                {/*使用component的好处是可以提高代码的重复利用性*/}
                {/* 导入person模块*/}
            </div>
        //    return中只能有一个根 元素
        )
    }


    // render() {
    //     return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello, this is rendered by React.createElement'));
    // }
}

export default App;
