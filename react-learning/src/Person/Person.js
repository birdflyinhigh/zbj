// 主要的作用是返回一个jsx语法的component, component是一个函数，返回some jsx
import React from 'react';



const person = () => {
    return <p> I am a person named alex and {Math.floor(Math.random()*30)} years old ！</p>
//    生成不同的东西，dynamic, {值}

};


export default person;
