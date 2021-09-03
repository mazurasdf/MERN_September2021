import React from 'react';

const Step = (props) => {
    return(
        <div className="step">
            <div>
                {props.direction === "right" ? "➡" : props.direction === "left" ? "⬅" : "⬆"}
            </div>
            <h2>{props.instructions}</h2>
        </div>
    )
}

export default Step;