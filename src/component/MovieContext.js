import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: 150,
            id: 88321
        },
        {
            name: 'The Load of Ring',
            price: 100,
            id: 67421
        },
        {
            name: 'The 100',
            price: 260,
            id: 42424
        },
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}