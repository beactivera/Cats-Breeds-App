import React from 'react';

const CatListItem = ({ id, breed, country, origin, coat, pattern, onRemove = (f) => f}) => {

    return (
        <div>
            <h3>{breed}</h3>
            <p>Country: {country}</p>
            <p>Origin: {origin}</p>
            <p>Coat: {coat}</p>
            <p>Pattern: {pattern}</p>
            <button onClick={() => onRemove(id)}>Usuń kota</button>
        </div>
    );
};

export default CatListItem;