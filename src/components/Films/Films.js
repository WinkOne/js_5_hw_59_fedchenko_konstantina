import React from 'react';
import './Films.css'

const Films = (props) => {
    return (
        <div className={'filmsBox'}>
            <p className='filmName'>
                <input onChange={props.change} className='refactorInp' type="text" defaultValue={props.filmName}/>
                <button className='removeBtnFilm' onClick={props.removePostFilms}>
                    X
                </button>
            </p>
        </div>
    );
};

export default Films;