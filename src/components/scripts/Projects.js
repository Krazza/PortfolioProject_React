import React from "react";
import ContactButton from "./ContactButton.js";
import styles from "../styles/Projects.module.css";
import Hr from "./Hr.js";

function Projects()
{
    return(
    <div className={styles.projectsContainer}>
        <h1>{"Projects"}</h1>
        <h2><a href="https://github.com/Krazza/HabitTrackerApp" target="_blank" rel="noopener noreferrer">{"Habit tracker app."}</a></h2>
        <div id={styles.habit01}>
            <p>{`An MVP of a habit/task tracking app., done in a collaboration of four contributors.`} <a href="https://github.com/Krazza/HabitTrackerApp" target="_blank" rel="noopener noreferrer">{"GitHub link."}</a></p>
            <section className={styles.picSec}>
                <img alt="sunny day in Helsinki" src={require("../../assets/images/Habits_tab.png")}></img>
                <p>{"Habits tab"}</p>
            </section>
            <section className={styles.picSec}>
                <img alt="sunny day in Helsinki" src={require("../../assets/images/Tasks_tab.png")}></img>
                <p>{"Tasks tab"}</p>
            </section>
            <section className={styles.picSec}>
                <img alt="sunny day in Helsinki" src={require("../../assets/images/Journal_tab.png")}></img>
                <p>{"Journal tab"}</p>
            </section>
        </div>
        <Hr/>
        <h2><a href="https://github.com/Krazza" target="_blank" rel="noopener noreferrer"><span id={styles.soon}>{"More to come... (soon)"}</span></a></h2>
        <ContactButton/>
    </div>)
}

export default Projects