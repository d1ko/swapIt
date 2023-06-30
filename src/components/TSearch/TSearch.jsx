import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

import styles from './styles.module.css';

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#000',
        width: '100px',
        height: '100px'
      }}
    />
  );
  const onSearch = (value) => console.log(value);

const { Search } = Input;
export const TSearch = () => {
    return(
        <>
        <Search placeholder="input search text" className={styles.Input} onSearch={onSearch} enterButton />
        </>
    )
};