import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/Layout/MainHeader";
import SearchForm from "./components/Search/SearchForm";
import Navigation from "./components/Layout/Navigation";

import "./App.css";
import Recipe from "./components/Recipe/Recipe";

export const RecipeContext = React.createContext();
function App() {
  const [recipeData, setRecipeData] = useState([]);

  // const MATERIAL_API_KEY =
  //   "JFTV7vhRItec0ldhlHpK1L9oaCQKJGWYqzw54%2F6Kfjo0Dor9L%2BwFgvS%2FmBbVM3roQZf1q8yCiQoRqFbP2dEBfQ%3D%3D";
  // const material_url = `http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey=${MATERIAL_API_KEY}&desc_kor=양파&type=json`;

  // const getMaterialData = async () => {
  //   const response = await fetch(material_url);
  //   const data = await response.json();

  //   console.log("data", data);
  // };

  // Recipe data api
  const RECIPE_API_KEY = "ec08a6953db24a9dbfbb";
  const recipe_url = `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/100/RCP_NM="샐러드"`;

  useEffect(() => {
    setTimeout(() => {
      const getRecipeData = async () => {
        const response = await fetch(recipe_url);
        const data = await response.json();

        setRecipeData(data);
      };
      getRecipeData();
    }, 200);
  }, []);

  return (
    <RecipeContext.Provider value={recipeData}>
      <div className="inner">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainHeader />} />
          </Routes>
        </BrowserRouter>
        <main>
          <SearchForm />
          <Recipe />
        </main>
      </div>
      <Navigation />
    </RecipeContext.Provider>
  );
}

export default App;
