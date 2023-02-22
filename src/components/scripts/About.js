import React from "react";
import ContactButton from "./ContactButton.js";
import styles from "../styles/About.module.css";

function About()
{
    return(
        <div className={styles.aboutContainer}>
            <h1>{"About"}</h1>
            <div className={styles.infoContainer}>
                <p>{"Hey! My name is Muondo Vladislav Emerson and I'm an aspiring web developer. I love working on the web and solving different coding/tech problems in efficient and creative ways."}
                <br/>
                <br/>
                {"Right now, I do Full Stack Web Developer program at Business College Helsinki. The main part of the program is set to end at the end of May, which is also the time I would like to start my internship/junior position."}
                <br/>
                <br/>
                {"I love exploring new tools and solutions, and, usually, it doesn't take me long to get an understanding of a new instrument and put it to good use."}
                <br/>
                <br/>
                {"Can't wait to see what tools your company uses daily and put my skills to test!"}
                </p>
                <section id={styles.aboutSec}>
                    <img alt="sunny day in Helsinki" src={require("../../assets/images/sunny_Helsinki.png")}></img>
                    <p>{"Sunny day in Helsinki, DALLE-2."}</p>
                </section>
            </div>
            <ContactButton/>
        </div>
    );
}

export default About;