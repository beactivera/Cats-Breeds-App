import React, {useContext, useState, useMemo} from "react";
import CatListItem from "./CatListItem";
import {CatContext} from "./CatProvider";

const CatPage = () => {
    const {cats, removeCat} = useContext(CatContext);
    console.log(cats);
    const [sortOption, setSortOption] = useState("");
    const [filterOption, setFilterOption] = useState("");

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    const filteredCats = useMemo(
        () =>
            cats.filter((cat) => {
                if (filterOption === "") return true;
                return cat.breed.toLowerCase().includes(filterOption.toLowerCase());
            }),
        [cats, filterOption]
    );

    const sortedCats = useMemo(
        () =>
            filteredCats.sort((catA, catB) => {
                if (sortOption === "breed") {
                    return catA.breed.localeCompare(catB.breed);
                }
                if (sortOption === "country") {
                    return catA.country.localeCompare(catB.country);
                }
                if (sortOption === "origin") {
                    return catA.origin.localeCompare(catB.origin);
                }
                if (sortOption === "coat") {
                    return catA.coat.localeCompare(catB.coat);
                }
                if (sortOption === "pattern") {
                    return catA.pattern.localeCompare(catB.pattern);
                }
                return 0;
            }),
        [filteredCats, sortOption]
    );

    // if (!filteredCats.length || !sortedCats.length || !cats.length) return <div> No cat breeds listed. </div>

    return (
        <div>
            <div>
                Sortuj według:{" "}
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
                Filtruj rasę: <input type="text" value={filterOption} onChange={handleFilterChange} />
            </div>
            <ul>
            {sortedCats.map((cat) => (
                <CatListItem key={cat.id} cat={cat} onRemove={() => removeCat(cat.id)} />
            ))}
            </ul>
        </div>
    );
};

export default CatPage;