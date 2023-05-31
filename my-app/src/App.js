import React, {useState} from "react";

import CatPage from "./components/CatPage";
import CatProvider from "./components/CatProvider";
import AddCat from "./components/AddCat";

function App() {
    return (
        <CatProvider>
            <AddCat />
            <div>
                <CatPage />
            </div>
        </CatProvider>
    );
}

export default App;