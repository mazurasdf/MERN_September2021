import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const ImageBox = (props) => {
    const [isShiny, setIsShiny] = useState(false);

    return (
        <div className="pokeBox d-flex justify-content-center align-items-center" onMouseOver={()=>setIsShiny(true)} onMouseOut={()=>setIsShiny(false)}>
            <img src={isShiny ? props.shiny : props.normal} alt={props.name}/>
        </div>
    )
}

export default ImageBox;