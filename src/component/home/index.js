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
    }, [])

    const ShowRecipes = () => {
        const imageArray = []
        recipes.forEach((recipe, index) => {
            console.log(`${recipe}`)            
            console.log(`name ${recipe["author"]}`)
            imageArray.push(
                <div className="recipe">
                <div className="user-info-container">
                    
                    <img className="user-profile" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.G37tgeQqSNt7v2oPfj9ltQHaE7%3Fpid%3DApi&f=1&ipt=dc2f495b171f12f5b5822305e28f65b199ab03991bae788d169b360686c754e7&ipo=images" />
                    <p className="user-name">{recipe["author"]}</p>
                    
                </div>                    
                <Link className="recipe-link" to="/home/recipe">                
                    <img className="recipe-cover" src={recipe['cover_url_image']} />
                    <h3 className="recipe-title">{recipe["title"]}</h3>
                </Link>                    
                </div>
            )

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