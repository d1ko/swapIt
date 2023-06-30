import { useState } from 'react';
import styles from './Main.module.css';
import { Cards, TSearch } from '../../components';

export const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <Cards />
      </div>
    </main>
  );
};

export default Main;
