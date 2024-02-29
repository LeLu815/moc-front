import { useNavigate } from "react-router-dom";

import styles from "./PopularPostItem.module.css"; // Create this module CSS file for styling

const PopularPostItem = (props) => {
  const navitate = useNavigate();

  const date = new Date(props.created_at);
  const manualBody =
    "게시글의 짧은 요약글은 준비 중입니다. 빠른 시일 내로 보여지도록 구현하겠습니다. 감사합니다!";

  const handleClick = () => {
    if (props.id) {
      navitate(`/posts/detail/${props.id}/`);
    }
  };

  return (
    <div className={styles.item} onClick={handleClick}>
      <div className={styles.text_section}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.excerpt}>{props.body ? props.body : manualBody}</p>
        <div className={styles.info_box}>
          <div className={styles.stats}>
            <span className={styles.likes}>
              {props.likes ? props.likes : "0"} likes
            </span>
            <span className={styles.comments}>
              {props.comments ? props.comments : "0"} comments
            </span>
          </div>
          <div
            className={styles.date}
          >{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</div>
        </div>
      </div>
      <div className={styles.img}>
        <img
          className={styles.img_small}
          src={props.thumbnail && props.thumbnail.image}
        />
      </div>
    </div>
  );
};

export default PopularPostItem;
