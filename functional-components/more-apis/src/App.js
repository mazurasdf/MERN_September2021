import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState("Ditto");
  const [imageURL, setImageURL] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")
  const [search, setSearch] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon/" + search)
      .then(res => {
        setPokemon(res.data.name);
        setImageURL(res.data.sprites.front_default);
      })
      .catch(err => console.log(err))

    // fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={(event)=>setSearch(event.target.value)}/>
        <button type="submit" className="btn btn-warning btn-lg">Click me!</button>
      </form>
      <h1>{pokemon}</h1>
      <img src={imageURL} alt={pokemon}/>
    </div>
  );
}

export default App;
