import React, { useContext, useState } from 'react';
import { CatContext } from './CatProvider';

function AddCat() {
    const { addCat } = useContext(CatContext);
    // breed, country, origin, coat, pattern
    const [breed, setBreed] = useState('');
    const [country, setCountry] = useState('');
    const [origin, setOrigin] = useState('');
    const [coat, setCoat] = useState('');
    const [pattern, setPattern] = useState('');

    const submit = (e) => {
        e.preventDefault();
        addCat({ breed, country, origin, coat, pattern });
        setBreed('');
        setCountry('');
        setOrigin('');
        setCoat('');
        setPattern('');
    };

    return (
        <div>
            <h2>Add cat</h2>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    placeholder="Breed"
                    required
                />
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                    required
                />
                <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Origin"
                    required
                />
                <input
                    type="text"
                    value={coat}
                    onChange={(e) => setCoat(e.target.value)}
                    placeholder="Coat"
                    required
                />
                <input
                    type="text"
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    placeholder="Pattern"
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddCat;

// // another way is Formik
// import React from 'react';
// import { Formik } from 'formik';
//
// const AddCatForm = () => {
//     const handleSubmit = (values) => {
//         // Logika dodawania nowego kota
//         console.log(values);
//     };
//
//     return (
//         <Formik
//             initialValues={{ name: '', age: 0, color: '' }}
//             onSubmit={handleSubmit}
//         >
//             {({ values, handleChange, handleSubmit }) => (
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="name"
//                         value={values.name}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="number"
//                         name="age"
//                         value={values.age}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         name="color"
//                         value={values.color}
//                         onChange={handleChange}
//                     />
//                     <button type="submit">Dodaj Kota</button>
//                 </form>
//             )}
//         </Formik>
//     );
// };
//
// export default AddCatForm;
