import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./views/Main";
import Secondary from "./views/Secondary";
import More from './views/More';
import Pokemon from './views/Pokemon';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<div id="header">
					<Link to="/">Main</Link>
					<Link to="/marquee">Lots of marquees</Link>
					<Link to="/marquee/more">random other page</Link>
				</div>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>

					<Route exact path="/marquee">
						<Secondary />
					</Route>

					<Route exact path="/marquee/:word/:num">
						<More/>
					</Route>

					<Route exact path="/pokemon/:name">
						<Pokemon/>
					</Route>
				</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
