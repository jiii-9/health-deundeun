import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/Layout/MainHeader";
import SearchForm from "./components/Search/SearchForm";

import "./App.css";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const API_KEY =
    "JFTV7vhRItec0ldhlHpK1L9oaCQKJGWYqzw54%2F6Kfjo0Dor9L%2BwFgvS%2FmBbVM3roQZf1q8yCiQoRqFbP2dEBfQ%3D%3D";
  const url = `http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey=${API_KEY}&desc_kor=양파&type=json`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log("data", data);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
