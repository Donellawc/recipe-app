import "./App.css";
import { useState } from "react";
import Axios from "axios";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan");
  // const [search,setSearch ] = useState("");




  // const YOUR_APP_KEY = "19b8e685932721792cc061fe6bed8858";

  // const YOUR_APP_ID = "29c94a5f";

  async function getRecipe() {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&health=${healthLabels}&app_id=29c94a5f&app_key=19b8e685932721792cc061fe6bed8858`;
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };

  return (
    <div className="app">
      <h1>🍲Cook Without a Book Recipes🧑🏾‍🍳</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app_input"
          placeholder="enter ingredient"
          autoComplete="off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />

        <select
          className="app_healthLabels"
          value={healthLabels}
          onChange={(e) => setHealthLabels(e.target.value)}
        >
          <option value="vegan">Vegan</option>

          <option value="vegetarian">Vegetarian</option>

          <option value="No-oil-added">No-oil added</option>

          <option value="dairy-free">dairy-free</option>

          <option value="gluten-free">gluten-free</option>

          <option value="keto-friendly">keto-friendly</option>

          <option value="paleo">paleo</option>

          <option value="low-sugar">low-sugar</option>

          <option value="peanut-free">paenut-free</option>
          <option value="soy-free">soy-free</option>
        </select>
        <input className="app_submit" type="submit" value="Search" />
      </form>

      <div className="app_recipes">
        {recipes.map((recipe, idx) => {
          return <RecipeTile key={idx} recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;