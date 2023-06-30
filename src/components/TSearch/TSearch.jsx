import { Input } from 'antd';

import styles from './styles.module.css';

const { Search } = Input;

export const TSearch = ({ cards, setFilteredCards }) => {
  const onSearch = (value) => {
    console.log('2');
  };

  return (
    <>
      <Search
        placeholder="Введите текст для поиска"
        className={styles.Input}
        onSearch={onSearch}
        enterButton
      />
    </>
  );
};