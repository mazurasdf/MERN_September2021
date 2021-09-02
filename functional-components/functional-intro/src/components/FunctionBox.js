import React, { useState } from 'react';

const FunctionBox = (props) => {
    const [likes, setLikes] = useState(props.likes);
    const [moreLikes, setMoreLikes] = useState(0);

    const addLike = () => {
        setLikes(likes + 1);
    }

    const addMoreLikes = () => {
        setMoreLikes(moreLikes + 1);
    }

    return(
        <div className="componentBox">
            <h1>function time!!!!</h1>
            <h2><i>{props.message}</i></h2>
            <button onClick={addLike}>Likes: {likes}</button>
            <button onClick={addMoreLikes}>More likes: {moreLikes}</button>
        </div>
    )
}

export default FunctionBox;