import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes["search-input"]}>
      <div className={classes.inner}>
        <div className={classes.input}>
          <label htmlFor="search"></label>
          <FontAwesomeIcon className={classes["search-icon"]} icon={faSearch} />
          <input id="search" />
        </div>
      </div>
    </div>
  );
};

export default Input;
