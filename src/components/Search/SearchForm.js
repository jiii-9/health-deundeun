import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

import classes from "./SearchForm.module.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [enteredSearchItem, setEnteredSearchItem] = useState("");

  const extendSearchItemHandler = enteredItem => {
    setEnteredSearchItem(enteredItem);
    console.log(enteredSearchItem);
  };

  const moveResultHandler = () => {
    navigate(`/result/${enteredSearchItem}`);
  };

  const submitHandler = event => {
    event.preventDefault();
    moveResultHandler();
    console.log("form submitted ✅");
  };

  return (
    <div className="inner">
      <span className={classes["search-title"]}>오늘도 건강하게!</span>
      <form className={classes["search-form"]} onSubmit={submitHandler}>
        <Input onChange={extendSearchItemHandler} onMove={moveResultHandler} />
      </form>
    </div>
  );
};

export default SearchForm;
