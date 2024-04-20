// similar to app.jsx file
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {Outlet} from 'react-router-dom'
// nesting is possible due to outlet by react router dom


function Layout() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;