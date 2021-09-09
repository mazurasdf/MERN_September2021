import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeList from './views/PokeList';
import SinglePokemon from './views/SinglePokemon';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="header">
          <Link to="list" className="btn btn-outline-primary">To List Builder</Link>
          <Link to="/pokemon/ditto" className="btn btn-outline-dark mx-2">Search for pokemon</Link>
        </div>

        <Switch>
          <Route exact path="/list">
            <PokeList/>
          </Route>

          <Route exact path="pokemon/:name">
            <SinglePokemon/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
