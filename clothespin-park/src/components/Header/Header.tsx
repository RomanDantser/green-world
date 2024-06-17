import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className={styles.mainLink}>
        ПАРК ПРИЩЕПКА
      </Link>
      <nav>
        <Link to="/news" className={styles.navLink}>
          Новости
        </Link>
        <Link to="/contacts" className={styles.navLink}>
          Контакты
        </Link>
      </nav>
    </header>
  );
}
