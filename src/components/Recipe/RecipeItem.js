import React from "react";

import classes from "./RecipeItem.module.css";

const RecipeItem = props => {
  return (
    <li className={classes["recipe-item"]} onClick={props.onClick}>
      {props.children}
    </li>
  );
};

export default RecipeItem;
