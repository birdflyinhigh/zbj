// 主要的作用是返回一个jsx语法的component, component是一个函数，返回some jsx
import React from 'react';



const person = (props) => {

    return (
        <div>
            <p>
                I am a person named {props.name} and {props.age} years old ！
            </p>
            <p>
                {props.children}
                {/*传入children*/}
            </p>
        </div>
        )
// 尽可能多的使用functional component ,
//    还有一种class component
//    state不能被更多的change, 只能被少量的change , 比如containers 

};


export default person;
