import React, { createContext, useEffect, useState } from "react";

export const MaterialContext = createContext();

const MaterialContextProvider = ({ children }) => {
  // 식품 영양정보를 받아와 저장하는 변수
  const [materialData, setMaterialData] = useState([]);

  // Form에서 받아온 value값을 저장하는 변수
  const [enteredInputValue, setEnteredInputValue] = useState("");

  const MATERIAL_KEY = "ec08a6953db24a9dbfbb";
  const MATERIAL_URL = `http://openapi.foodsafetykorea.go.kr/api/${MATERIAL_KEY}/I2790/json/1/100/DESC_KOR=${enteredInputValue}`;

  // fetch a matrial from API
  useEffect(() => {
    fetchMaterialHandler();
  }, [MATERIAL_URL, enteredInputValue]);

  const fetchMaterialHandler = async () => {
    const response = await fetch(MATERIAL_URL);
    const data = await response.json();

    setMaterialData(data);
  };

  const changeUrlHandler = enteredValue => {
    setEnteredInputValue(enteredValue);
  };

  if (materialData.length === 0) {
    return null;
  }

  console.log(materialData);

  return (
    <MaterialContext.Provider
      value={{ materialData, enteredInputValue, changeUrlHandler }}
    >
      {children}
    </MaterialContext.Provider>
  );
};

export default MaterialContextProvider;
