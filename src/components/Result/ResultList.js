import React, { useContext } from "react";
import ResultItem from "./ResultItem";
import { MaterialContext } from "../store/Material";

const ResultList = () => {
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
          <ResultItem name={item.DESC_KOR} />
        </div>
      ))}
    </div>
  );
};

export default ResultList;
