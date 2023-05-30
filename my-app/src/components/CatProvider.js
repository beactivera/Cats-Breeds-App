import React, { createContext, useState } from 'react';

export const CatContext = createContext();

function CatProvider({ children }) {
    const [newCats, setNewCats] = useState([]);

    const addCat = (cat) => {
        setNewCats([...newCats, cat]);
    };

    return (
        <CatContext.Provider value={{ newCats, addCat }}>
            {children}
        </CatContext.Provider>
    );
}

export default CatProvider;
