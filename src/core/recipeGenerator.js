import { useState } from "react";
import '../stylesheets/RecipeGenerator.css'
import { RecipeVM } from "../viewModels/RecipeVM";

function RecipeGenerator() {
    const [coverPhoto, setCoverPhoto] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstruction] = useState([]);
    const [selectedOption, setSelectedOption] = useState("instruction")
    const [stepImages, setStepImages] = useState([])
    const [instructionText, setInstructionText] = useState("")
    const [value, setValue] = useState(0)
    const [ingIndex, setIngIndex] = useState(0)
    const [ingText, setIngText] = useState("")
    const [showError, setShowError] = useState(false)
    // const vm = new RecipeVM()

    async function handleSubmit() {
        console.log("submitting")
        // const recipes = await vm.getRecipes()
        // console.log(recipes[0])
        // setTitle(recipes[0])
    }


    function showTextError() {
        if (showError){
        return(<p className="error-message">Instruction cannot be empty</p>)
        } else {
            return(<p>   </p>)
        }
    }
    

    function handleInstructionPress(event) {
         if (event.key === 'Enter' && event.shiftKey) {
            if (instructionText.trim().length === 0) {
            setShowError(true)
        } else {
            console.log(instructions)

            setInstruction([
                ...instructions,
                { id: value, name: instructionText }
            ])
            setValue(value + 1)
            setInstructionText("")
        }
    }
    }
    function handleIngredients(e) {
        if (e.key === 'Enter' && e.shiftKey) {
            setIngredients([
                ...ingredients,
                { id: ingIndex, name: ingText }
            ])
            console.log(ingredients)
            setIngIndex(ingIndex + 1)
            setIngText("")
        }
    }

    function showInstructionOrImage(option) {
        if (option === 'instruction') {
            return(<textarea type="text" value={instructionText} onKeyDown={handleInstructionPress} onChange={(e) => setInstructionText(e.target.value)}/>);

        } else if (option === 'photo') {
            return ( <input type="file" value={coverPhoto}></input> );
        }
    }

    function handleOptionChange(e) {
        console.log("changing option")
        setSelectedOption(e.target.value)
    }

    return (
        
        <div className="recipe-container">
        <h2>Recipe Generator</h2>          
            <form onSubmit={e => { e.preventDefault() } }className="input-container">
                <label>Cover Photo</label>
                <input name="cover" type="file" value={coverPhoto} onChange={e => console.log(e.target.value)}/>


                <label>Title</label>
                <input type="text" onChange={e => (setTitle(e.target.value))} value={title} />

                <label>Description</label>
                <input onChange={e => (setDesc(e.target.value))} type="text" value={desc} />


                <label>Ingredients</label>
    
                {ingredients && ingredients.map && ingredients.map((ingredient, index) => {
                    return <input type="text" value={ingredient.name}/>
                    // return < type="text" value={ingredient.name} />
                })
                }
                <input value={ingText} type="text" onKeyDown={handleIngredients} onChange={e => {setIngText(e.target.value)}}/>


                <label>Instructions</label>
                     {instructions && instructions.map && instructions.map((instruction, index) => {
                        return <textarea key={index} id={index} value={instruction.name} />

                    })

                    }                

                <select defaultValue="photo" value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="photo">Photo</option>
                    <option value="instruction">Instruction</option>
                </select>
                {showInstructionOrImage(selectedOption)}
                {showTextError()}
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>

        </div>

    );
}
export default RecipeGenerator;