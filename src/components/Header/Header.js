import { Button } from "antd";
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="https://m.media-amazon.com/images/I/81isydLZhUL.png" alt="Logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/main">Main</Link>
            </Button>
          </li>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/profile">Profile</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
