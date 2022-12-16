import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import classes from "./HeartButton.module.css";

const HeartButton = () => {
  // 하트버튼을 누르면 채워진 하트로 바뀌고 해당 데이터가 저장되는 함수 만들어야됨

  return (
    <div>
      <FontAwesomeIcon className={classes["heart-icon"]} icon={faHeart} />
    </div>
  );
};

export default HeartButton;
