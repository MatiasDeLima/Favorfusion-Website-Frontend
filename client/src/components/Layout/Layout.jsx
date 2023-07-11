import React from 'react'

import Header from './../Header/Header';
import Routers from '../../routes/Routers';
import Footer from './../Footer/Footer';
import AppSection from './../AppSection/AppSection';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="main"><Routers /></main>
            <AppSection />
            <Footer />
        </>
    )
}

export default Layout