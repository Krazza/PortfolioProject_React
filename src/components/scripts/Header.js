import React from "react";
import Nav from "./Nav.js";
import styles from "../styles/Header.module.css";

function Header()
{
    return(
        <header className={styles.mainHeader}>
            <h2>{"<WEBBER/>;"}</h2>
            <Nav/>
        </header>
    )
}

export default Header;