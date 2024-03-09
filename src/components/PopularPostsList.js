import PopularPostItem from "./PopularPostItem";
import styles from "./PopularPostsList.module.css"; // Create this module CSS file for styling

const PopularPostsList = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts &&
        posts.map((post, index) => <PopularPostItem key={index} {...post} />)}
    </div>
  );
};

export default PopularPostsList;
