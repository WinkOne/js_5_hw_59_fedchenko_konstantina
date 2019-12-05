import React from 'react';
import './Joke.css'

const Joke = (props) => {
    return (
        <div className='JokeBlock'>
            <div className='JokeText'>{props.value}</div>
        </div>
    );
};

export default Joke;