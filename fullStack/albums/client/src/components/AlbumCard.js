import axios from 'axios';
import React from 'react';

const AlbumCard = (props) => {
    const {artist, imgURL, name, rating, releaseYear, genre} = props.data;

    const onDeleteHandler = (_id) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/albums/${_id}/delete`)
            .then(res=>{
                console.log(res);
                props.setLoaded(prevState=> !prevState);
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="albumCard">
            <img src={imgURL} alt={name}/>
            <h3>{name}</h3>
            <h3><i>{artist}, {releaseYear}</i></h3>
            <h3><i>{genre}</i></h3>
            <h4><b>Paul rates it {rating}/5</b> <button className="delete" onClick={()=>onDeleteHandler(props.data._id)}>x</button></h4>
        </div>
    )
}

export default AlbumCard;