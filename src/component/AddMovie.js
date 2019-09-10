import React,{useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext);
    
    const updateName = (e) => {
        setName(e.target.value)
    }
    
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }
    
    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies,{ name: name, price: price }])
        setName('')
        setPrice('')
    }
    
    return(
        <form onSubmit={addMovie} className='movie-form'>
            <input type="text" name="name" value={name} onChange={updateName} required/>
            <input type="number" name="price" value={price} onChange={updatePrice}  required/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;