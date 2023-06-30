import { Suspense, useState } from 'react';
import styles from './Main.module.css';
import { Cards, TSearch } from '../../components';
import { Spin } from 'antd';

export const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <Suspense fallback={<><Spin/></>}>
        <Cards />

        </Suspense>
      </div>
    </main>
  );
};

export default Main;
