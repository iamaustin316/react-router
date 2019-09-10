import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'

const Search = () => {
    const APP_ID = '672b24f7';
    const APP_KEY = 'f5facd3cf509ab936c41acffa02003f4';
    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('beef');
    
    useEffect(()=>{
        getRecipes();
    },[query])
    
    const getRecipes = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        console.log(data.hits);
        setRecipes(data.hits);
    }
    
    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search)
    }
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
        setSearch('');
    }
    
    return(
        <div className="page">
            
            <form onSubmit={getSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-btn" type="submit">Search</button>
            </form>
            <h5>您搜尋了: {query}</h5>
            <div className="recipe-wrap">
                {recipes.map( (recipe,index) =>(
                    <Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
                ))}
            </div>
        </div>
    );
}

export default Search;