import React from 'react';
import Header from "../components/scripts/Header.js";
import Main from "../components/scripts/Main.js";
import Footer from "../components/scripts/Footer.js";
import styles from "../components/styles/Layout.module.css";

function Layout()
{
    return (
        <div className={styles.pageContainer}>
            <Header/>
            <Main/>
            <Footer/>
        </div>);
};

export default Layout;