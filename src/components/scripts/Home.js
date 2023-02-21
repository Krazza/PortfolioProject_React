import React from "react";
import ContactButton from "./ContactButton.js";
import Hr from "./Hr.js";
import styles from "../styles/Home.module.css";
import { Icon } from "@iconify/react";

function Home()
{
    return(
        <div className={styles.homeContainer}>
            <div className={styles.infoContainer}>
                <h2>{`Moi, my name is Muondo Vladislav Emerson,`} <span>{" I am looking for a"}</span></h2> 
                <h1>{`INTERN/JUNIOR`}<br/>{"Developer position"}</h1>
                <p>{`A highly motivated and driven Full Stack Web Developer student (Business college Helsinki) with knowledge of JavaScript, TypeScript, React, and Redux.
                Previous background in commercial game development as Game Designer using Unreal Engine (Blueprints) and Unity (C#).`}</p>
            </div>
            <h2 id={styles.tech}>{`WEBBER.skills`}</h2>
            <h2 id={styles.links}>{`WEBBER.links`}</h2>
            <section className={styles.linkSection}>
            <a href="https://docs.google.com/document/d/1ytQBhYQuQYSdYEquLYx8n8dqUQ93UmT7iCycKPhhpIY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><Icon icon="pepicons-pop:cv" color="white" width="75" height="75"/></a>
                <a href="https://github.com/Krazza" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:github" color="white" width="75" height="75" /></a>
                <a href="https://www.linkedin.com/in/vladislav-muondo-87021a194/" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:linkedin" color="white" width="75" height="75"/></a>
                <a href="https://en.bc.fi/qualifications/full-stack-web-developer-program/" target="_blank" rel="noopener noreferrer"><Icon icon="maki:college" color="white" width="75" height="75"/></a>
            </section>
            <section className={styles.skillSection}>
                <Icon icon="vscode-icons:file-type-firestore" color="white" width="75" height="75" />
                <Icon icon="mdi:git" color="F1502F" width="75" height="75" />
                <Icon icon="logos:redux" color="white" width="75" height="75"/>
                <Icon icon="vscode-icons:file-type-node" color="white" width="75" height="75"/>
                <Icon icon="logos:react" color="white" width="75" height="75"/>
                <Icon icon="logos:trello" color="white" width="75" height="75"/>
                <Icon icon="nonicons:c-sharp-16" color="lightblue" width="75" height="75"/>
                <Icon icon="mdi:unity" color="white" width="75" height="75"/>
                <Icon icon="cib:unreal-engine" color="white" width="75" height="75"/>
            </section>
            <img alt="main pic" src={require("../../assets/images/me.JPG")}/>
            <Hr/>
            <ContactButton/>
        </div>
    )
}

export default Home;