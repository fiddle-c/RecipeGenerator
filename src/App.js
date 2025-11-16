import './App.css';
// import RecipeGenerator from './core/recipeGenerator'
import RecipeView from'./component/home/recipe'
// import Login from './component/auth/login/index'
import RecipeGenerator from './core/RecipeGenerator'
import Home from './component/home/index'
import NavigationHeader from './component/headers/navigationHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavigationHeader />
          <Routes>
            <Route path="/home/index" element={<Home />} />
            <Route path="/core/RecipeGenerator" element={<RecipeGenerator />} />
            <Route path="/home/recipe" element={<RecipeView />} />
          </Routes>
          {/* <RecipeView /> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
