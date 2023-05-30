import React, {useState} from 'react';
import CatData from './data/cat-breeds.json';
import CatList from './components/CatList';


function App() {
    const [cats, setCats] = useState(CatData);

    const handleRemoveCat = (id) => {
        const updatedCats = cats.filter((cat) => cat.id !== id);
        setCats(updatedCats);
    };

    return (
    // <CatList cats={cats} onRemoveCat={handleRemoveCat} />
    <div>
        <CatList cats={cats} onRemoveCat={handleRemoveCat} />
    </div>
  );
}

export default App;
