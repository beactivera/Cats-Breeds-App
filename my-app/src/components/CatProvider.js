import React, {createContext, useState} from "react";
import catData from "../data/cat-breeds.json";

export const CatContext = createContext();

function CatProvider({children}) {
    const [cats, setNewCats] = useState(catData.map((cat, i) => ({...cat, id: i})));

    const addCat = (cat) => {
        setNewCats((oldCats) => [...oldCats, {...cat, id: Math.floor(Math.random() * 28822)}]);
    };

    const removeCat = (targetCatId) => {
        setNewCats((oldCats) => oldCats.filter((cat) => cat.id !== targetCatId));
    };

    return <CatContext.Provider value={{cats, addCat, removeCat}}>{children}</CatContext.Provider>;
}

export default CatProvider;