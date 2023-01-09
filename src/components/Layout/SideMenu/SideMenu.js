import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./SideMenu.module.css";
import SideMenuItem from "./SideMenuItem";

const SideMenu = ({ isOpen, onFlip }) => {
  const sideMenuItem = [
    {
      id: "veggie",
      name: "채소",
      detail: [
        ["고구마", ".감자", ".당근"],
        ["시금치", ".쌈채소", ".나물"],
        ["브로콜리", ".파프리카", ".양배추"],
        ["오이", ".호박"],
        ["콩나물", ".버섯"],
      ],
    },
    {
      id: "meat",
      name: "육류",
      detail: [
        "소고기",
        "돼지고기",
        "계란류",
        ["닭", ".오리고기"],
        ["양념육", ".돈까스"],
        "양고기",
      ],
    },
    {
      id: "fish",
      name: "생선",
      detail: [
        ["오징어", ".낙지", ".문어"],
        ["새우", ".게", ".랍스터"],
        ["해산물", ".조개"],
        ["김", ".미역"],
      ],
    },
    {
      id: "fruit",
      name: "과일",
      detail: [["사과", ".배", ".참외"], ["귤", ".자몽", ".키위"], "딸기"],
    },
    {
      id: "salad",
      name: "샐러드",
      detail: ["닭가슴살", "도시락", "파스타"],
    },
  ];

  const closeMenuHandler = () => {
    onFlip(isOpen => !isOpen);
  };

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
            {sideMenuItem.map(item => (
              <SideMenuItem
                id={item.id}
                name={item.name}
                detailMenu={item.detail}
                key={item.id}
              />
            ))}
          </ul>
        </div>
        <div className={classes.blank}></div>
        <div className={classes["category-wrapper"]}>
          <h3 className={classes["category-name"]}>레시피</h3>
          <ul className={classes["category-list"]}>
            <li className={classes["category-item"]}>샐러드</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
