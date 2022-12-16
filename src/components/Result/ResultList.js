import React, { useContext } from "react";
import { MaterialContext } from "../store/Material";
import ResultItem from "./ResultItem";
import BackButton from "../UI/BackButton";

import classes from "./ResultList.module.css";
import HeartButton from "../UI/HeartButton";

const ResultList = () => {
  const MaterialContextProvider = useContext(MaterialContext);
  const receivedData = MaterialContextProvider.materialData.I2790;
  const dataResultItems = receivedData.row;
  const enteredValue = MaterialContextProvider.enteredInputValue;

  if (receivedData.total_count === "0") {
    return null;
  }

  return (
    <section className={classes["result-list"]}>
      <div className="inner">
        <BackButton>
          <span className={classes["result-title"]}>
            '{enteredValue}' 검색 결과
          </span>
        </BackButton>
        <HeartButton />
        {dataResultItems.map(item => (
          <div key={item.FOOD_CD}>
            <ResultItem
              name={item.DESC_KOR}
              kcal={item.NUTR_CONT1}
              carbohydrate={item.NUTR_CONT2}
              protein={item.NUTR_CONT3}
              fat={item.NUTR_CONT4}
              sugars={item.NUTR_CONT5}
              sodium={item.NUTR_CONT6}
              cholesterol={item.NUTR_CONT7}
              transFat={item.NUTR_CONT9}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultList;
