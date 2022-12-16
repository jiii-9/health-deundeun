import React, { Fragment } from "react";
import Recipe from "../Recipe/Recipe";
import SearchForm from "../Search/SearchForm";

const Home = () => {
  return (
    <Fragment>
      <div className="inner">
        <SearchForm />
        <Recipe />
      </div>
    </Fragment>
  );
};

export default Home;
