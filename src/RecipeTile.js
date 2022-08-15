import React, { useMemo } from "react";
import "./RecipeTile.css";

export default function RecipeTile({ recipe }) {
  const imageUrl = useMemo(() => {
    if (recipe.recipe.image.match(/\.(jpeg|jpg|gif|png)/) != null) {
      return recipe.recipe.image;
    }
    
    return "https://via.placeholder.com/200x200.png?text=Recipe%20Photo%20Not%20Found";
  }, [recipe]);

  return (
    <div className="recipeTile" onClick={
      () => {
        window.open(recipe["recipe"]["url"]);
      }}
      >
      <img className="recipeTile_img" src={imageUrl} />

      <p className="recipeTile_name">{recipe.recipe.label}</p>
      
  
      
    
    </div>
  );
}
