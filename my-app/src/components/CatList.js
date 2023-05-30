import React, { useState } from 'react';
import CatListItem from './CatListItem';

const CatList = ({ cats, setCats }) => {
    const [sortOption, setSortOption] = useState('');
    const [filterOption, setFilterOption] = useState('');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    const handleDeleteCat = (id) => {
        const updatedCats = cats.filter((cat) => cat.id !== id);
        setCats(updatedCats);
    };

    const filteredCats = cats.filter((cat) => {
        if (filterOption === '') return true;
        return cat.breed.toLowerCase().includes(filterOption.toLowerCase());
    });

    const sortedCats = filteredCats.sort((catA, catB) => {
        if (sortOption === 'breed') {
            return catA.breed.localeCompare(catB.breed);
        }
        if (sortOption === 'country') {
            return catA.country.localeCompare(catB.country);
        }
        if (sortOption === 'origin') {
            return catA.origin.localeCompare(catB.origin);
        }
        if (sortOption === 'coat') {
            return catA.coat.localeCompare(catB.coat);
        }
        if (sortOption === 'pattern') {
            return catA.pattern.localeCompare(catB.pattern);
        }
        return 0;
    });

    return (
        <div>
            <div>
                Sortuj według:{' '}
                <select value={sortOption} onChange={handleSortChange}>
                    <option value="">Wybierz</option>
                    <option value="breed">Rasa</option>
                    <option value="country">Kraj</option>
                    <option value="origin">Pochodzenie</option>
                    <option value="coat">Sierść</option>
                    <option value="pattern">Wzór</option>
                </select>
            </div>
            <div>
                Filtruj rasę:{' '}
                <input
                    type="text"
                    value={filterOption}
                    onChange={handleFilterChange}
                />
            </div>
            {sortedCats.map((cat) => (
                <CatListItem key={cat.id} cat={cat} onDeleteCat={handleDeleteCat} />
            ))}
        </div>
    );
};

export default CatList;
