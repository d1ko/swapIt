import React from 'react';
import { Header } from '../components/Header/Header';
import { AppFooter } from '../components/AppFooter/AppFooter';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            	{children}
            <AppFooter />
        </>
    );
};

export default Layout;
