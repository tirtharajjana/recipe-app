import "./App.css";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "e55bdc77";
  const APP_KEY = "f57760f7e10484feb90a6c7ac299162d";

  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    setIsLoading(true);
    const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await responce.json();
    setRecipes(data.hits);
    console.log(data.hits);
    setIsLoading(false);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>
      <div className="recipes">
        {isLoading && <h1>Loading...</h1>}
        {recipes && recipes.map(recipe => (
          <Recipe recipe={recipe.recipe} key={recipe.recipe.label} />
        ))}
      </div>

    </div>
  );
}

export default App;
