import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MaterialContext } from "../store/Material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from "./SearchForm.module.css";

const SearchForm = () => {
  // materialData context 사용
  const MaterialContextProvider = useContext(MaterialContext);

  // input에 입력한 value값
  const [searchMaterial, setSearchMaterial] = useState("");

  const navigate = useNavigate();

  // 버튼 클릭 시 이동해주는 함수
  const moveResultHandler = () => {
    if (searchMaterial.length > 0) {
      navigate(`/result/${searchMaterial}`);
    }
    return;
  };

  const submitHandler = event => {
    event.preventDefault();
    MaterialContextProvider.changeUrlHandler(searchMaterial);

    if (searchMaterial.length === 0) {
      window.confirm("재료를 입력하세요🥬");
    } else {
      moveResultHandler(); // result 페이지로 이동
    }
  };

  const searchItemHandler = e => {
    setSearchMaterial(e.target.value);
  };

  return (
    <div className="inner">
      <span className={classes["search-title"]}>오늘도 건강하게!</span>
      <form className={classes["search-form"]} onSubmit={submitHandler}>
        <div className={classes["input-wrapper"]}>
          <label htmlFor="search"></label>
          <FontAwesomeIcon className={classes["search-icon"]} icon={faSearch} />
          <input
            id="search"
            className={classes.input}
            type="text"
            placeholder="재료를 입력하세요"
            onChange={searchItemHandler}
          />
          <button
            className={classes["search-btn"]}
            onClick={submitHandler}
            type="button"
          >
            검색
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
