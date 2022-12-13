import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./SideMenu.module.css";

const SideMenu = props => {
  let isOpen = props.isOpen;
  const closeMenuHandler = () => {
    props.onFlip(isOpen => !isOpen);
  };

  console.log(isOpen);

  return (
    <aside className={classes.sidemenu}>
      <div className={classes.inner}>
        <div className={classes.category}>
          <h2 className={classes["category-title"]}>카테고리</h2>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={closeMenuHandler}
            className={classes["xmark-icon"]}
          />
        </div>
        <div className={classes.blank}></div>
        <div className={classes["category-wrapper"]}>
          <h3 className={classes["category-name"]}>재료 영양성분</h3>
          <ul className={classes["category-list"]}>
            <li className={classes["category-item"]}>
              <span className={classes["item-name"]}>채소</span>
              <FontAwesomeIcon
                className={classes["item-icon"]}
                icon={faChevronDown}
              />
            </li>
            <li className={classes["category-item"]}>
              <span className={classes["item-name"]}>육류</span>
              <FontAwesomeIcon
                className={classes["item-icon"]}
                icon={faChevronDown}
              />
            </li>
            <li className={classes["category-item"]}>
              <span className={classes["item-name"]}>생선</span>
              <FontAwesomeIcon
                className={classes["item-icon"]}
                icon={faChevronDown}
              />
            </li>
            <li className={classes["category-item"]}>
              <span className={classes["item-name"]}>과일</span>
              <FontAwesomeIcon
                className={classes["item-icon"]}
                icon={faChevronDown}
              />
            </li>
          </ul>
        </div>
        <div className={classes.blank}></div>
        <div className={classes["category-wrapper"]}>
          <h3 className={classes["category-name"]}>레시피</h3>
          <ul className={classes["category-list"]}>
            <li className={classes["category-item"]}>
              <span className={classes["item-name"]}>샐러드</span>
              <FontAwesomeIcon
                className={classes["item-icon"]}
                icon={faChevronDown}
              />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
