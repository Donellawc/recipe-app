import './App.css';
import { useState } from "react";
import Axios from "axios";
import RecipeTile from './RecipeTile';


function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] =useState("vegan"); 

  // const YOUR_APP_KEY = "19b8e685932721792cc061fe6bed8858"; 

  // const YOUR_APP_ID = "29c94a5f";

  const url= `https://api.edamam.com/api/recipes/v2?type=public&q=health=${healthLabels}&app_id=29c94a5f&app_key=19b8e685932721792cc061fe6bed8858`;
  
  async function getRecipe(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  };
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
          placeholder="enter ingridient"
          autoComplete= "off"
          value={query}
          onChange={(e) =>  setquery(e.target.value)}
        />
        
      <input className="app_submit" type="submit" 
      value="Search" />

       <select className="app_healthLabels">

        <option onClick={() => sethealthLabels("vegan")}
        >Vegan</option>

          <option 
          onClick={() => sethealthLabels("vegetarian")}
          >Vegetarian</option>
         
          <option
          onClick={()=> sethealthLabels("low-fat")}
         >low-fat</option>
          
          <option
          onClick={()=> sethealthLabels("dairy-free")}
         >dairy-free</option> 

          <option
          onClick={()=> sethealthLabels("gluten-free")}
         >gluten-free</option>

          <option
          onClick={()=> sethealthLabels("keto-friendly")}
         >keto-friendly</option> 

          <option
          onClick={()=> sethealthLabels("paleo")}
         >paleo</option> 

          <option
          onClick={()=> sethealthLabels("low-sugar")}
         >low-sugar</option>

          <option
          onClick={()=> sethealthLabels("peanut-free")}
         >paenut-free </option> 
         <option
          onClick={()=> sethealthLabels("soy-free")}
         >soy-free</option>
          </select>

        
      </form>

      <div className="app_recipes">
        
       {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
