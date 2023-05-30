import React, {useState} from "react";

import CatList from "./components/CatList";
import CatProvider from "./components/CatProvider";
import AddCat from "./components/AddCat";

function App() {
    return (
        <CatProvider>
            <AddCat />
            <div>
                <CatList />
            </div>
        </CatProvider>
    );
}

export default App;