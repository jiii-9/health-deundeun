import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
import RecipeInfoPage from "./components/page/RecipeInfoPage";
import MainHeader from "./components/Layout/MainHeader";
import Navigation from "./components/Layout/Navigation";
import Result from "./components/page/Result";
import Like from "./components/page/Like";
import Sign from "./components/page/Sign";

import Material from "./components/store/Material";

import "./App.css";

export const RecipeContext = React.createContext();

function App() {
  const [recipeData, setRecipeData] = useState([]);

  // Recipe data API
  const RECIPE_API_KEY = "ec08a6953db24a9dbfbb";
  const recipe_url = `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/100/RCP_NM="샐러드"`;

  const fetchRecipeHandler = async () => {
    const response = await fetch(recipe_url);
    const data = await response.json();
    const transformedRecipe = data.COOKRCP01.row.map(recipe => {
      return {
        id: recipe.RCP_SEQ,
        name: recipe.RCP_NM,
        ingredient: recipe.RCP_PARTS_DTLS,
        mainImage: recipe.ATT_FILE_NO_MAIN,
        recipes: [
          {
            recipeImage: recipe.MANUAL_IMG01,
            recipeDes: recipe.MANUAL01,
          },
          {
            recipeImage: recipe.MANUAL_IMG02,
            recipeDes: recipe.MANUAL02,
          },
          {
            recipeImage: recipe.MANUAL_IMG03,
            recipeDes: recipe.MANUAL03,
          },
          {
            recipeImage: recipe.MANUAL_IMG04,
            recipeDes: recipe.MANUAL04,
          },
          {
            recipeImage: recipe.MANUAL_IMG05,
            recipeDes: recipe.MANUAL05,
          },
          {
            recipeImage: recipe.MANUAL_IMG06,
            recipeDes: recipe.MANUAL06,
          },
        ],
      };
    });
    setRecipeData(transformedRecipe);
  };

  // 레시피 데이터 랜덤으로 뿌려주는 함수
  const shuffle = array => {
    array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    fetchRecipeHandler();
  }, []);

  if (recipeData.length === 0) {
    return;
  }

  shuffle(recipeData);
  console.log(recipeData);

  return (
    <RecipeContext.Provider value={{ recipeData }}>
      <Material>
        <BrowserRouter>
          <MainHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/recipe/recipe-info/:RCP_NM"
              element={<RecipeInfoPage />}
            />
            <Route path="/result/:searchValue" element={<Result />} />
            <Route path="/like" element={<Like />} />
            <Route path="/login" element={<Sign />} />
          </Routes>
          <Navigation />
        </BrowserRouter>
      </Material>
    </RecipeContext.Provider>
  );
}

export default App;
