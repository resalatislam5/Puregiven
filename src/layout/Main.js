import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer';
import Header from '../pages/Share/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;