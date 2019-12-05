import React, {Component} from 'react';
import Joke from "../../components/Joke/Joke";

class JokeDirectory extends Component {
    state = {
       jokes: []
    };

    async componentDidMount() {
        this.setState({jokes: await this.getJoke()})
    }
    getJoke = async () => {
        let jokes = [];
        for (let i = 0; i < 5; i++){
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const joke = await response.json();
            jokes.push(joke);
        }
        return jokes;
    };
    render() {
        return (
            <div>
                {this.state.jokes.map((joke, index) => (
                    <Joke
                        key={index}
                        value={joke.value}
                    />
                ))}
            </div>
        );
    }
}

export default JokeDirectory;