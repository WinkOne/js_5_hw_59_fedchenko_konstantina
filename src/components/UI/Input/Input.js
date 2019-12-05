import React from 'react';
import './Input.css'

const Input = (props) => {
    return (
        <input onChange={props.change} className='inp' type="text" placeholder='Enter your film...'/>
    );
};

export default Input;