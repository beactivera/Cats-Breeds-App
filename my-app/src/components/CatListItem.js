import React from "react";

const CatListItem = ({cat, onRemove}) => {
    const {breed, country, origin, coat, pattern} = cat;
    return (
        <li>
            <h3>{breed}</h3>
            <p>Country: {country}</p>
            <p>Origin: {origin}</p>
            <p>Coat: {coat}</p>
            <p>Pattern: {pattern}</p>
            <button onClick={onRemove}>Usuń kota</button>
        </li>
    );
};

export default CatListItem;