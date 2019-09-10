import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe-item">
            <h3>{title}</h3>
            <p>{calories}</p>
            <ul className="ingredient-ul-list">
                {ingredients.map((ingredient,index)=>(
                    <li key={index}>配料:{ingredient.text}<br/>重量:{ingredient.weight}</li>
                ))}
            </ul>
            <img src={image} alt={title}/>
        </div>
    );
}

export default Recipe;