import { Link } from "react-router-dom";
import styles from "./NotFoundComponent.module.css";
import cryingCat from "../../assets/icons/crying-cat-face-svgrepo-com.svg";

const NotFoundComponent = () => {
  return (
    <div className={styles.notFoundContainer}>
      <img src={cryingCat} className={styles.catIcon} alt="cat" />
      <span className={styles.notFoundTitle}>
        Страница, которую вы ищете, не найдена. Ошибка 404
      </span>
      <Link to="/" className={styles.backToHomeLink}>
        Перейти на главную страницу
      </Link>
    </div>
  );
};

export default NotFoundComponent;
