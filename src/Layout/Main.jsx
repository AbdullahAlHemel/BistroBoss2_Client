import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet></div>
            {noHeaderFooter ||<Footer></Footer>}
           
        </div>
    );
};

export default Main;