import React, {createContext, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import catData from "../data/cat-breeds.json";

export const CatContext = createContext();

function CatProvider({children}) {
    const [cats, setNewCats] = useState(catData.map((cat, i) => ({...cat, id: uuidv4()})));

    const addCat = (cat) => {
        setNewCats((oldCats) => [...oldCats, {...cat, id: uuidv4()}]);
    };

    const removeCat = (targetCatId) => {
        setNewCats((oldCats) => oldCats.filter((cat) => cat.id !== targetCatId));
    };

    return <CatContext.Provider value={{cats, addCat, removeCat}}>{children}</CatContext.Provider>;
}

export default CatProvider;