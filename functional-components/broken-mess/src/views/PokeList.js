import React, {useState} from 'react';
import axios from 'axios';
import PokeBox from '../components/PokeBox';

const PokeList = (props) => {
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);

    


    const onSubmitHandler = (event) => {   
        event.preventDefault();
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then(res => {
                console.log(res.data);
                setList([...list,res.data]);
            })
            .catch(err => console.log(err));

        setSearch("");
    }

    return(
        <div className="centeredColumn">
            <form onSubmit={onSubmitHandler}>
                <input type="text" onChange={(event)=>setSearch(event.target.value)} value={search} className="form-control w-75 mx-auto" placeholder="type name of pokemon to add..."/>
                <input type="submit" className="btn btn-primary mx-auto mt-2" disabled={search.length === 0}/>
            </form>

            <div id="pokeList">
                {
                    list.map((item,i)=>{
                        return <PokeBox data={item} key={i}/>
                    })
                }
            </div>
        </div>
    )
}

export default PokeList;