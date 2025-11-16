import { useState } from 'react'
import '../../stylesheets/Home.css'
import { Link } from 'react-router-dom';
import { RecipeVM } from '../../models/Recipe'
import { useEffect } from 'react';
const Home = () => {
    const [recipes, setRecipes] = useState([])
    const vm = new RecipeVM()

    useEffect(() => {
        const fetchData = async () => {
            const data = await vm.getRecipes()
            setRecipes(data)
            
        }        
        fetchData()
    }, 
    [])

    const ShowRecipes = () => {
        const imageArray = []
        recipes.forEach((recipe, index) => {
            const userUrlImage = vm.getUserUrl(recipe["user_Id"])
            const dataPass = {
                title: recipe["title"],
                author: recipe["author"],
                description: recipe["description"],
                cover_url_image: recipe["cover_url_image"],
                ingredients: recipe["ingredients"],
                instructions: recipe["step_content"]

            }
            imageArray.push(
                <div className="recipe">
                <div className="user-info-container">
                <img className="user-profile" src={userUrlImage} alt="user profile" />
                <p className="user-name">{recipe["author"]}</p>
                </div>

                <Link className="recipe-link" to="/home/recipe" state={dataPass}>
                    <img className="recipe-cover" alt="cover" src={recipe["cover_url_image"]} />
                    <h3 className="recipe-title">{recipe["title"]}</h3>
                </Link>                    
                </div>
            );
        })
        return (<div className="recipe-card">
            {imageArray}
        </div>
        )


    }

    return (
        <div className="home-container">
        <h2 className="page-title">Home</h2>
            <ShowRecipes />
        </div>
    );

}

export default Home;