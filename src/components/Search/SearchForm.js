import React from "react";
import Input from "./Input";

import classes from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <section className={classes["search-form"]}>
      <span className={classes["search-title"]}>오늘도 건강하게!</span>
      <Input />
    </section>
  );
};

export default SearchForm;
