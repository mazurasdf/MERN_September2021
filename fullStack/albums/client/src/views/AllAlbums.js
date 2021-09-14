import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AlbumCard from '../components/AlbumCard';

const AllAlbums = (props) => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/albums/all")
        .then(res => setAlbums(res.data.results))
        .catch(err => console.log(err))
    },[])

    return(
        <div className="d-flex justify-content-around align-items-center">
            {
                albums.map((item, i)=>{
                    return <AlbumCard key={i} data={item} />
                })
            }
        </div>
    )
}

export default AllAlbums;