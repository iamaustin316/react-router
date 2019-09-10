import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';
import AddMovie from './AddMovie';

function About() {
    const [movies, setMovies] = useContext(MovieContext)
    const userData = {
        name: 'Austin',
        email: 'iamaustin316@gmail.com',
        story: '的頭點包經地之會好得藝自老跑依灣出差，色國事文型聞下造題子園例。結特資我去發知本高些地新件我望往家再本全話不念發工書商好其早裡行上使國，決所就久果痛得，牛就我檢在牛風臉其密產樂大賽指學園我可的李言出，論了過預懷著電會式，影除體，上十格色兒食這回入子、但器利喜。年時下行一主！事所對文要起光爾這，加是共，全是縣的正高成時多們是。意半的告？際不小最回面過的岸一過口和賣。'
    }
    const deleteMovie = (e) => {
        let index = e.target.id;
        const newMovies = [...movies];
        newMovies.splice(index, 1);
        setMovies(prevMovies => newMovies);
    }
    return(
        <div className="page">
            <ul className="movie-list">
                {
                    movies.map( (movie,index) => (
                        <li key={index}>影片名稱: {movie.name} / 價格: ${movie.price} <button id={index} onClick={deleteMovie}>Delete</button></li>
                    ))
                }
            </ul>
            <h3>{userData.name}</h3>
            <h4>{userData.email}</h4>
            <p>{userData.story}</p>
            <AddMovie />
        </div>
    )
}

export default About;