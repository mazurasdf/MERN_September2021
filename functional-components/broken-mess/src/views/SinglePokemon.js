import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import ImageBox from '../components/ImageBox';

const SinglePokemon = (props) => {
    const [pokemon, setPokemon] = useState({});
    const [search, setSearch] = useState("");
    const history = useHistory();
    const {name} = useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setPokemon(res.data);
            })
            .catch(err => console.log(err));
    },[name])

    const onInputChange = (event) => setSearch(event.target.value);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setSearch("");
        
        history.push("/pokemon/" + search);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" onChange={onInputChange} value={search} className="form-control w-75 mx-auto" placeholder="search for a pokemon..."/>
                <input type="submit" className="btn btn-primary mx-auto mt-2" disabled={search.length === 0}/>
            </form>
            {
                !pokemon.name ?
                    <h1>loading...</h1>
                :
                    <div>
                        <h1>OMG, it's {pokemon.name}!!!</h1>
                        <div id="pokeList">
                            <ImageBox name={pokemon.name} normal={pokemon.sprites.front_default} shiny={pokemon.sprites.front_shiny}/>
                            {pokemon.sprites.front_female && <ImageBox name={pokemon.name} normal={pokemon.sprites.front_female} shiny={pokemon.sprites.front_shiny_female}/>}
                            <ImageBox name={pokemon.name} normal={pokemon.sprites.back_default} shiny={pokemon.sprites.back_shiny}/>
                        </div>

                        <div>
                            <h3>
                                Type(s): 
                                {
                                    pokemon.types.map((item,i)=>{
                                        return <span key={i}>{item.type.name} </span>
                                    })
                                }
                            </h3>
                        </div>
                    </div>
            }
        </div>
    )
}

export default SinglePokemon;