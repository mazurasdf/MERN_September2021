import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AlbumCard from '../components/AlbumCard';

const AllAlbums = (props) => {
    const [albums, setAlbums] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(()=>{
        console.log("running use effect");
        console.log(loaded);
        axios.get("http://localhost:8000/api/albums/all")
        .then(res => {
            setAlbums(res.data.results);
        })
        .catch(err => console.log(err))
    },[loaded])

    return(
        <div className="allAlbums">
            {
                albums.map((item, i)=>{
                    return <AlbumCard key={i} data={item} setLoaded={setLoaded} />
                })
            }
        </div>
    )
}

export default AllAlbums;