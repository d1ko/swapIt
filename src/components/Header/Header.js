import { Button } from "antd";
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

export const Header = () => {
  return <header className={styles.header}>
    <ul>
                <Button
                    type='link'
                    className={styles.button}
                >
                    <Link to='/main'>Main</Link>
                </Button>
                <Button
                    type='link'
                    className={styles.button}
                >
                    <Link to='/profile'>Profile</Link>
                </Button>
            </ul>
  </header>;
};