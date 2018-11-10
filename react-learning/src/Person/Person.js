// 主要的作用是返回一个jsx语法的component, component是一个函数，返回some jsx
import React from 'react';



const person = (props) => {

    return <p> I am a person named {props.name} and {props.age} years old ！</p>
//    生成不同的东西，dynamic, {值}

};


export default person;
