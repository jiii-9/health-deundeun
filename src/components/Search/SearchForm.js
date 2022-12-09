import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

import classes from "./SearchForm.module.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [enteredSearchItem, setEnteredSearchItem] = useState("");

  const extendSearchItemHandler = enteredItem => {
    // input에서 받아온 인자를 enteredSearchItem에 넣어줌
    setEnteredSearchItem(enteredItem);
  };
  console.log(enteredSearchItem);

  const moveResultHandler = () => {
    navigate(`/result/${enteredSearchItem}`);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (enteredSearchItem.length === 0) {
      window.confirm("재료를 입력하세요🥬");
    } else {
      moveResultHandler(); // result 페이지로 이동
    }
  };

  return (
    <div className="inner">
      <span className={classes["search-title"]}>오늘도 건강하게!</span>
      <form className={classes["search-form"]} onSubmit={submitHandler}>
        <Input onChange={extendSearchItemHandler} onMove={submitHandler} />
      </form>
    </div>
  );
};

export default SearchForm;
