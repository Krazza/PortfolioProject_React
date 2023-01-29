import React from 'react';
import Header from "../components/scripts/Header.js";
import Main from "../components/scripts/Main.js";
import Footer from "../components/scripts/Footer.js";

function Layout()
{
    return (
        <div className="pageContainer">
            <Header/>
            <Main/>
            <Footer/>
        </div>);
};

export default Layout;