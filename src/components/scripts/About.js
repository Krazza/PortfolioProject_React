import React from "react";
import styles from "../styles/About.module.css";

function About()
{
    return(
        <div className={styles.aboutContainer}>
            <h1>{"About"}</h1>
            <div className={styles.infoContainer}>
                <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat ante lacinia, vulputate ante id, ullamcorper leo. Curabitur tincidunt erat a varius tincidunt. Quisque consectetur egestas ultricies. In hac habitasse platea dictumst. Suspendisse tellus est, rutrum pellentesque sollicitudin vel, accumsan id tellus. Donec nec nibh erat. Cras egestas efficitur nisl non semper. Morbi vel justo tristique, rutrum tellus eget, iaculis quam. Integer tempor felis quis felis tincidunt fringilla. Sed vitae interdum neque.`}</p>
                <section id={styles.aboutSec}>
                    <img alt="sunny day in Helsinki" src={require("../../assets/images/sunny_Helsinki.png")}></img>
                    <p>{"Sunny day in Helsinki, DALLE-2."}</p>
                </section>
            </div>
        </div>
    );
}

export default About;