import '../../stylesheets/Recipe.css'
import { useLocation } from "react-router-dom";

const RecipeView = () => {
        const { state } = useLocation();

    const ShowInstructions =() => {
        let instructionArray = []
        state.instructions.forEach((instruction) => {
            instructionArray.push(<p className="instruction">{instruction["instruction"]}</p>)
        })
        return <>{instructionArray}</>
    }

const ShowIngredients = () => {
        let ingredientArray = []
        state.ingredients.forEach((ingredient) => { 
            ingredientArray.push(<p className="ingredient">{ingredient}</p>)
        })
        return <>{ingredientArray}</>
    }
    return (
        
        <div className="recipe-container">
        <img className="cover" src={state.cover_url_image} />
        <div className="info-container">
        <h1 className="recipe-title">{state.title}</h1>        
        <h2 className="author">Created by {state.author}</h2>
        <p className="description">{state.description}</p>
        <h3>Ingredients</h3>
        <ShowIngredients />
        <h3>Instructions</h3>
        <ShowInstructions />
        </div>
        </div>

    )
}

export default RecipeView;