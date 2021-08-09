import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ recipe }) => {
    return (
        <div className={style.recipe}>
            <h1>{recipe.label}</h1>
            <p>{recipe.calories}</p>
            <ol>
                {recipe.ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={recipe.image} alt="" />
        </div>
    )
}

export default Recipe
