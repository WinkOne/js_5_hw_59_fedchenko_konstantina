import React, {Fragment} from 'react';
import './App.css';
import Program from "./containers/Program/Program";
import JokeDirectory from "./containers/JokeDirektory/JokeDirectory";

function App() {
  return (
      <Fragment>
          <div className="App">
              <Program/>
          </div>
          <div className="AppJoke">
              <h1>Jokes from Chuck Norris:</h1>
              <JokeDirectory/>
          </div>
      </Fragment>

  );
}

export default App;
