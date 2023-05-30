import React from 'react';

const CatListItem = ({ cat, onDeleteCat }) => {
    const { breed, country, origin, coat, pattern } = cat;

    return (
        <div>
            <h3>{breed}</h3>
            <p>Country: {country}</p>
            <p>Origin: {origin}</p>
            <p>Coat: {coat}</p>
            <p>Pattern: {pattern}</p>
            <button onClick={() => onDeleteCat(cat.id)}>Usuń kota</button>
        </div>
    );
};

export default CatListItem;