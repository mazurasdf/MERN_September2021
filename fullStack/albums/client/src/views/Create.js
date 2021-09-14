import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Create = (props) => {
    const history = useHistory();

    const [form, setForm] = useState({
        name: "",
        artist: "",
        imgURL: "",
        releaseYear: "",
        genre: "",
        rating: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/albums/create", form)
            .then(res=>{
                console.log(res);
                history.push('/');
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="w-50 mx-auto p-3">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <input name="name" className="form-control" type="text" placeholder="album name" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="artist" className="form-control" type="text" placeholder="artist name" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="imgURL" className="form-control" type="text" placeholder="image url" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="releaseYear" className="form-control" type="number" placeholder="release year" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="genre" className="form-control" type="text" placeholder="genre" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="rating" className="form-control" type="number" placeholder="what does paul think?" onChange={onChangeHandler} />
                </div>

                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Create;