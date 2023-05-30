import React, {useState} from 'react';
import CatData from './data/cat-breeds.json';
import CatList from './components/CatList';
import CatProvider from "./components/CatProvider";
import AddCat from "./components/AddCat";


function App() {
    const [cats, setCats] = useState(CatData);

    const handleRemoveCat = (id) => {
        const updatedCats = cats.filter((cat) => cat.id !== id);
        setCats(updatedCats);
    };

    return (
    // <CatList cats={cats} onRemoveCat={handleRemoveCat} />
    <CatProvider>
        <AddCat />
        <div>
            <CatList cats={cats} onRemoveCat={handleRemoveCat} />
        </div>
    </CatProvider>
  );
}

export default App;
