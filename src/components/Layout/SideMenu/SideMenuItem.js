import React, { Fragment, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import classes from "./SideMenuItem.module.css";
import DetailMenu from "./DetailMenu";

const SideMenuItem = ({ id, name, detailMenu }) => {
  const [isOpenItem, setIsOpenItem] = useState(false);

  const itemFlipHandler = () => {
    setIsOpenItem(isOpenItem => !isOpenItem);
  };

  console.log(isOpenItem);

  return (
    <Fragment>
      <li className={classes["category-item"]}>
        <div onClick={itemFlipHandler}>
          <span className={classes["item-name"]}>{name}</span>
          <FontAwesomeIcon
            className={classes["item-icon"]}
            icon={!isOpenItem ? faChevronDown : faChevronUp}
          />
        </div>

        {isOpenItem ? <DetailMenu name={detailMenu} /> : null}
      </li>
    </Fragment>
  );
};

export default SideMenuItem;
