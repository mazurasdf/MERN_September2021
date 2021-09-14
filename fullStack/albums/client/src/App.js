import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Create from './views/Create';
import AllAlbums from './views/AllAlbums';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Link to="/albums/new">Add new album</Link>
          <Link to="/">All albums</Link>
        </div>

        <Switch>
          <Route exact path="/">
            <AllAlbums/>
          </Route>

          <Route exact path="/albums/new">
            <Create/>
          </Route>
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
