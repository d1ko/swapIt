import { Button, Input } from "antd";
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import { useState } from 'react';

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Perform search logic here
    console.log("Searching for:", searchValue);
  };

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
              <Link to="/home">Домой</Link>
            </Button>
          </li>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/products">Продукты</Link>
            </Button>
          </li>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/pages">Страницы</Link>
            </Button>
          </li>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/blog">Блог</Link>
            </Button>
          </li>
          <li>
            <Button type="link" className={styles.button}>
              <Link to="/Contact">Контакты</Link>
            </Button>
          </li>
        </ul>
      </nav>
      
      <div className={styles.search}>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Поиск"
        />
        <Button type="primary" onClick={handleSearch}>Поиск</Button>
      </div>
      
      <div className={styles.contact}>
        <p>Email: example@example.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
    </header>
  );
};
