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


};


export default person;
