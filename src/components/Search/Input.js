import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from "./Input.module.css";

const Input = props => {
  const [searchItem, setSearchItem] = useState("");

  const searchItemHandler = e => {
    setSearchItem(e.target.value);
    props.onChange(searchItem);
  };

  return (
    <div className={classes.input}>
      <label htmlFor="search"></label>
      <FontAwesomeIcon className={classes["search-icon"]} icon={faSearch} />
      <input
        id="search"
        type="text"
        placeholder="재료를 입력하세요"
        onChange={searchItemHandler}
      />
      <button type="button" onClick={props.onMove}>
        검색
      </button>
    </div>
  );
};

export default Input;
