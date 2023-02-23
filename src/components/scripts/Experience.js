import React from "react";
import ContactButton from "./ContactButton.js";
import styles from "../styles/Experience.module.css";

function Experience()
{
    return(
        <div className={styles.experienceContainer}>
            <h1>{"Experience"}</h1>
            <h2>{"Game Designer at Space Sauce st."}</h2>
            <h3>{"From 14.12.2020 to 08.08.2022"}</h3>
            <div className={styles.infoContainer}>
                <p>{`This position was my first development job since my graduation and I can confidently say that it has been a great learning expirience. 
                We worked in a small group of 7 people and developed a mobile multiplayer RTS (real time strategy) game for Android devices.`}</p>
                <h2>{"Tools"}</h2>
                <div className={styles.stack}>
                    <ul>
                        <li>{"Unreal Engine 4"}</li>
                        <li>{"Unity"}</li>
                        <li>{"Godot"}</li>
                    </ul>
                    <ul>
                        <li>{"UE4 Blueprints"}</li>
                        <li>{"C#"}</li>
                    </ul>
                    <ul>
                        <li>{"Technical Documentation"}</li>
                        <li>{"Elastic (Kibana)"}</li>
                    </ul>
                    <ul>
                        <li>{"Technical Documentation"}</li>
                        <li>{"Elastic (Kibana)"}</li>
                    </ul>
                </div>
                <h2>{"Gallery"}</h2>
                <section className={styles.gallery}>
                    <img alt="space_dog_fight" src={require("../../assets/images/experience.jpeg")}/>
                    <img alt="space_fortress" src={require("../../assets/images/fortress.jpeg")}/>
                    <img alt="spaceship_thor" src={require("../../assets/images/thor.jpeg")}/>
                    <img alt="spaceship_carnage" src={require("../../assets/images/carnage.jpeg")}/>
                </section>
            </div>
            <ContactButton/>
        </div>
    );
}

export default Experience;