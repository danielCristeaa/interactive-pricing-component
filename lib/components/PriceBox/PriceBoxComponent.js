import React from 'react';
import './style.scss';

const PriceBox = (props) => {
    return(
        <div className="box">
            <h2>{props.title}</h2>
            <h1>{props.price}/{props.timeFrame}</h1>

            <p>{props.description}</p>

            <button>{props.btnTitle}</button>
        </div>
    )
}

export default PriceBox;