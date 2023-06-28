import { Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Header = () => {
  const hasTokens = localStorage.getItem("refresh") && localStorage.getItem("access");

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/main">
          <img src="https://m.media-amazon.com/images/I/81isydLZhUL.png" alt="Logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/products">Продукты</Link>
            </Button>
          </li>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/guide">Инструкция</Link>
            </Button>
          </li>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/profile">О нас</Link>
            </Button>
          </li>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/profile">Профиль</Link>
            </Button>
          </li>
          {!hasTokens && (
            <>
              <li>
                <Button type="link" className={styles.button}>
                  <Link to="/register">Регистрация</Link>
                </Button>
              </li>
              <li>
                <Button type="link" className={styles.button}>
                  <Link to="/login">Вход</Link>
                </Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
