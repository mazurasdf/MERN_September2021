import { useState } from 'react';
import './App.css';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [search, setSearch] = useState("");

  const fetchAPI = (event) => {
    event.preventDefault();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setMeanings(res[0].meanings);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <form onSubmit={fetchAPI}>
        <input onChange={(event)=>setSearch(event.target.value)} type="text"/>
        <button type="submit">Click me!</button>
      </form>
      

      <ul>
        {
          meanings.map((item, i)=>{
            return <li key={i}>{item.definitions[0].definition}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
