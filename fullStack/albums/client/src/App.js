import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/albums/all")
      .then(res => setAlbums(res.data.results))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <h1>hey it's me!</h1>

      <ul>
      {
        albums.map((item, i)=>{
          return <li key={i}>{item.name}, {item.artist} <i>{item.releaseYear}</i></li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
