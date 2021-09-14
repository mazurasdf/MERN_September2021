import React from 'react';

const AlbumCard = (props) => {
    const {artist, imgURL, name, rating, releaseYear, genre} = props.data;

    return(
        <div className="albumCard">
            <img src={imgURL} alt={name}/>
            <h3>{name}</h3>
            <h3><i>{artist}, {releaseYear}</i></h3>
            <h3><i>{genre}</i></h3>
            <h4><b>Paul rates it {rating}/5</b></h4>
        </div>
    )
}

export default AlbumCard;