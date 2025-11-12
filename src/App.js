import logo from './logo.svg';
import './App.css';
import RecipeGenerator from './core/recipeGenerator'
import Login from './core/Login'
import FormFields from './component/FormFields';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecipeGenerator/>
      {/* <Login/> */}
      </header>

      
    </div>
  );
}

export default App;
