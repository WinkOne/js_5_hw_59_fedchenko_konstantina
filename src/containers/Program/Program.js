import React, {Component, Fragment} from 'react';
import nanoid from 'nanoid';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Films from "../../components/Films/Films";

class Program extends Component {
    state = {
        filmAdd: '',
        films: [],
    };
    shouldComponentUpdate(nextProps, nextState, nextContext){
        return nextState.films !== this.state.films;
    }
    getEnterPostFilm = event => {
        this.setState({filmAdd: event.target.value});
    };
    addPostFilm = () => {
        const films = [...this.state.films];
        if (this.state.filmAdd === ''){
            alert('ERROR, Please Enter Your Films!!!')
        } else {
            films.push({film: this.state.filmAdd, id: nanoid()});
            this.setState({films});
        }
    };
    refactorFilmBlock(event, index){
        const refactorFilms = [...this.state.films];
        refactorFilms[index].film = event.target.value;
        this.setState({films: refactorFilms})
    };
    removePostFilm = id => {
        const index = this.state.films.findIndex(p => p.id === id);
        const films = [...this.state.films];
        films.splice(index, 1);
        this.setState({films});
    };
    render() {
        return (
            <Fragment>
                <div>
                    <Input change={this.getEnterPostFilm}/>
                    <Button
                        addFilms={this.addPostFilm}
                    >
                        Add
                    </Button>
                </div>
                    {this.state.films.map((film, index) => (
                        <Films
                            key={index}
                            filmName={film.film}
                            filmNumber={film.numberFilm}
                            removePostFilms={() => this.removePostFilm(film.id)}
                            change={(event)=> this.refactorFilmBlock(event, index)}
                        />
                    ))}
            </Fragment>

        );
    }
}

export default Program;