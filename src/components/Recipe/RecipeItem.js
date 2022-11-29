import React, { Fragment } from "react";

import classes from "./RecipeItem.module.css";

const RecipeItem = props => {
  return (
    <Fragment>
      <li className={classes["recipe-item"]}></li>
      <li className={classes["recipe-item"]}></li>
      <li className={classes["recipe-item"]}></li>
      <li className={classes["recipe-item"]}></li>
      <li className={classes["recipe-item"]}></li>
      <li className={classes["recipe-item"]}></li>
      <li className={classes["recipe-item"]}></li>
      <li className={classes["recipe-item"]}></li>
    </Fragment>
  );
};

export default RecipeItem;
