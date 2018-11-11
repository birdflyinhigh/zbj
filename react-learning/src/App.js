import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

// 最好导入的时候，最好使用首字母大写，因为jsx中所有的components用小写开头

class App extends Component {
    // 两种限制：
    // 1. class要写成className, 因为class是关键预留字
    // 2. JSX里面只能写一个根element, 不能并列写两个或者多个element
    state = {
        person: [
            {name: "alex", age: "15"},
            {name: "zoe", age: "29"},
            {name: "kevin", age: "30"},
        ]
    }

    swithStateHandler = () => {
        //DON'T DO THIS  this.state.person[0].name = 'Jenny'
        this.setState({
                person: [
                    {name: "alex-male", age: "86"},
                    {name: "zoe-female", age: "31"},
                    {name: "kevin-male", age: "35"},
                ]
            }
        )


    }

    render() {
        return (
            <div className="App">
                <h1>Alex</h1>
                <p>Alex is now here </p>
                <button onClick={this.swithStateHandler}>switch name</button>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
                <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
                <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
                {/*传入name和age参数*/}
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
