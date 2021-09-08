import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

const Pokemon = (props) => {
    const {name} = useParams();
    const history = useHistory();
    const [imageURL, setImageURL] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");
    const [search, setSearch] = useState("");

    useEffect(()=>{
        console.log("running axios again! this is useEffect listening for changes")
        axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
            .then(res => {
                setImageURL(res.data.sprites.front_default);
            })
            .catch(err => console.log(err));
    }, [name])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(search);
        history.push("/pokemon/" + search);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input className="form-control" type="text" onChange={(event)=>setSearch(event.target.value)}/>
                <input type="submit" className="btn btn-info"/>
            </form>

            <h1>{name}</h1>

            <img src={imageURL} alt={name}/>
        </div>
    )
}

export default Pokemon;