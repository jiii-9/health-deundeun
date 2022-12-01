import React, { Fragment } from "react";
import Recipe from "../Recipe/Recipe";
import SearchForm from "../Search/SearchForm";

const Home = () => {
  return (
    <Fragment>
      <SearchForm />
      <Recipe />
    </Fragment>
  );
};

export default Home;
