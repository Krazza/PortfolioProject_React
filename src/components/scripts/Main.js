import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from "../styles/Main.module.css";

function Main()
{
    return (
        <main className={styles.mainContainer}>
            <Outlet></Outlet>
        </main>
    );
};

export default Main;