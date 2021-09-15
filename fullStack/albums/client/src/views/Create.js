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
    const [errors, setErrors] = useState({});

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
                console.log(res.data);

                if(res.data.results){
                    history.push('/');
                }
                else{
                    setErrors(res.data.err.errors);
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="w-50 mx-auto p-3">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <input name="name" className="form-control" type="text" placeholder="album name" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>

                <div className="form-group">
                    <input name="artist" className="form-control" type="text" placeholder="artist name" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.artist && errors.artist.message}</span>
                </div>

                <div className="form-group">
                    <input name="imgURL" className="form-control" type="text" placeholder="image url" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.imgURL && errors.imgURL.message}</span>
                </div>

                <div className="form-group">
                    <input name="releaseYear" className="form-control" type="number" placeholder="release year" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.releaseYear && errors.releaseYear.message}</span>
                </div>

                <div className="form-group">
                    <input name="genre" className="form-control" type="text" placeholder="genre" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.genre && errors.genre.message}</span>
                </div>

                <div className="form-group">
                    <input name="rating" className="form-control" type="number" placeholder="what does paul think?" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.rating && errors.rating.message}</span>
                </div>

                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Create;