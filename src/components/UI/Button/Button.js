import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button onClick={props.addFilms} className='btn'>
            {props.children}
        </button>
    );
};

export default Button;