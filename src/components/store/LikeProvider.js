import React from "react";
import LikeContext from "./like-context-";

const LikeProvider = props => {
  const addItemToLikeHandler = item => {};

  const removeItemFromLikeHandler = id => {};

  const likeContext = {
    items: [],
    addItem: addItemToLikeHandler,
    removeItem: removeItemFromLikeHandler,
  };

  return (
    <LikeContext.Provider value={likeContext}>
      {props.children}
    </LikeContext.Provider>
  );
};

export default LikeProvider;
