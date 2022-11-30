import React, { useContext } from "react";
import { RecipeContext } from "../../App";

import classes from "./Recipe.module.css";
import RecipeItem from "./RecipeItem";

const Recipe = props => {
  const recipeCtx = useContext(RecipeContext);
  const recipes = recipeCtx.COOKRCP01.row;

  console.log(recipeCtx.COOKRCP01.row);

  return (
    <section className={classes.recipe}>
      <span className={classes["recipe-title"]}>인기있는 레시피</span>
      <ul className={classes["recipe-list"]}>
        {recipes.map(recipe => (
          <RecipeItem
            key={recipe.RCP_SEQ}
            name={recipe.RCP_NM}
            mainImage={recipe.ATT_FILE_NO_MAIN}
          />
        ))}
      </ul>
    </section>
  );
};

export default Recipe;
