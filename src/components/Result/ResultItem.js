import React, { useContext } from "react";
import { MaterialContext } from "../store/Material";

const ResultItem = () => {
  const MaterialContextProvider = useContext(MaterialContext);
  const receivedData = MaterialContextProvider.materialData.I2790;
  const dataResultItems = receivedData.row;

  if (receivedData.total_count === "0") {
    return null;
  }

  return (
    <div>
      <h1>재료 검색 결과 화면</h1>

      {dataResultItems.map(item => (
        <div key={item.FOOD_CD}>
          <span>{item.DESC_KOR}</span>
          <span>{item.NUTR_CONT1}</span>
        </div>
      ))}
    </div>
  );
};

export default ResultItem;
