import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityPage from './views/CityPage';
import StatePage from './views/StatePage';
import SearchForm from './components/SearchForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchForm/>
        <Switch>
          <Route exact path="/city/:name">
            <CityPage/>
          </Route>

          <Route exact path="/state/:name">
            <StatePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
