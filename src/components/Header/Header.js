import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useMemo, useState } from 'react';

export const Header = () => {
    const hasTokens = localStorage.getItem('access');

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img
                        src='https://m.media-amazon.com/images/I/81isydLZhUL.png'
                        alt='Logo'
                    />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.link}>
                        <Button
                            type='link'
                            className={styles.button}
                        >
                            <Link
                                to='/guide'
                                className={styles.item}
                            >
                                Инструкция
                            </Link>
                        </Button>
                    </li>
                    <li className={styles.link}>
                        <Button
                            type='link'
                            className={styles.button}
                        >
                            <Link
                                to='/about'
                                className={styles.item}
                            >
                                О нас
                            </Link>
                        </Button>
                    </li>

                    {hasTokens && (
                        <li className={styles.link}>
                            <Button
                                type='link'
                                className={styles.button}
                            >
                                <Link
                                    to='/profile'
                                    className={styles.item}
                                >
                                    Профиль
                                </Link>
                            </Button>
                        </li>
                    )}

                    {!hasTokens && (
                        <>
                            <li className={styles.link}>
                                <Button
                                    type='link'
                                    className={styles.button}
                                >
                                    <Link
                                        to='/signup'
                                        className={styles.item}
                                    >
                                        Регистрация
                                    </Link>
                                </Button>
                            </li>
                            <li className={styles.link}>
                                <Button
                                    type='link'
                                    className={styles.button}
                                >
                                    <Link
                                        to='/login'
                                        className={styles.item}
                                    >
                                        Вход
                                    </Link>
                                </Button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};
