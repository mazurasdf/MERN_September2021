import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PokeBox = (props) => {
    const [isShiny, setIsShiny] = useState(false);

    return (
        <div className="pokeBox" onMouseOver={()=>setIsShiny(true)} onMouseOut={()=>setIsShiny(false)}>
            <img src={isShiny ? props.data.sprites.front_shiny : props.data.sprites.front_default} alt={props.data.name}/>
            <div className="linkBox">
                <Link to={`/pokemon/${props.data.name}`}>{props.data.name}</Link>
            </div>
        </div>
    )
}

export default PokeBox;