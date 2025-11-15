import NavigationHeader from "../headers/navigationHeader"
import '../../stylesheets/Recipe.css'

const RecipeView = () => {
    const ShowIngredients =() => {
        let ingredientArray = []
        for(let index = 0; index < 10; index++) {
            ingredientArray.push(<p>big</p>)
        }
        return <>{ingredientArray}</>
    }

const ShowInstructions =() => {
        let ingredientArray = []
        for(let index = 0; index < 10; index++) {
            ingredientArray.push(<p>Something</p>)
        }
        return <>{ingredientArray}</>
    }

    return (
        <>

        <div className="recipe-container">
        <img className="cover"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3840x2160-Images-Free-Download.jpg&f=1&nofb=1&ipt=b10905741a585f1923ebcccc3f4f5d598d9e455cccd19f0298cabe083f576e11"/>
        <div className="info-container">
        <h1 className="recipe-title">Recipe Title</h1>        
        <h2 className="author">Created by Username</h2>
        <p className="description">Description</p>

        <ShowIngredients />
        <ShowInstructions className="instructions"/>        
        </div>
        </div>                        
        




        </>
    )
}

export default RecipeView;