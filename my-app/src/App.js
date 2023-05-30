import React, {useState} from 'react';
import CatData from './data/cat-breeds.json';
import CatList from './components/CatList';


function App() {
    const [cats, setCats] = useState(CatData);
  return (
    <CatList cats={cats} setCats={setCats} />
  );
}

export default App;
