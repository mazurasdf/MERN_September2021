import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="header">
          <Link className="btn btn-outline-light" to="/">Orders to fulfill</Link>
          <Link className="btn btn-outline-light" to="/pizzas/add">Add order</Link>
        </div> 
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route exact path="/pizzas/add">
            <Create/>
          </Route>

          <Route exact path="/pizzas/:_id/edit">
            <Edit/>
          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
