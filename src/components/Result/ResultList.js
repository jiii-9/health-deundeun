import React, { useContext } from "react";
import { MaterialContext } from "../store/Material";
import ResultItem from "./ResultItem";
import BackButton from "../UI/BackButton";

import classes from "./ResultList.module.css";

const ResultList = () => {
  const MaterialContextProvider = useContext(MaterialContext);
  const receivedData = MaterialContextProvider.materialData.I2790;
  const dataResultItems = receivedData.row;
  const enteredValue = MaterialContextProvider.enteredInputValue;

  if (dataResultItems === undefined) {
    return;
  }

  // 중복되는 검색 결과 제거하는 함수
  const duplicateWordFilter = dataResultItems.filter(
    (arr, index, callback) =>
      index === callback.findIndex(item => item.DESC_KOR === arr.DESC_KOR)
  );

  console.log(duplicateWordFilter);
  console.log(dataResultItems);

  return (
    <section className={classes["result-list"]}>
      <div className="inner">
        <BackButton>
          <span className={classes["result-title"]}>
            '{enteredValue}' 검색 결과
          </span>
        </BackButton>

        <div>
          {duplicateWordFilter.map(item => (
            <ResultItem
              key={item.FOOD_CD}
              idx={item.FOOD_CD}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultList;
