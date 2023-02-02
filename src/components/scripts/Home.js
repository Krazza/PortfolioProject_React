import React from "react";
import styles from "../styles/Home.module.css";

function Home()
{
    return(
        <div className={styles.homeContainer}>
            <img alt="main pic" src={require("/Users/s2200741/Documents/Repositories/portfolio_project/src/assets/picture.png")}/>
            <h2>{"Hello! My name is Muondo Vladislav Emerson"}</h2>
        </div>
    )
}

export default Home;