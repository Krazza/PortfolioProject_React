import React from "react";
import styles from "../styles/Experience.module.css";

function Experience()
{
    return(
        <div className={styles.experienceContainer}>
            <h1>{"Experience"}</h1>
            <h2>{"Game Designer at Space Sauce st."}</h2>
            <h3>{"From 14.12.2020 to 08.08.2022"}</h3>
            <div className={styles.infoContainer}>
                <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat ante lacinia, vulputate ante id, ullamcorper leo. 
                Curabitur tincidunt erat a varius tincidunt. Quisque consectetur egestas ultricies. 
                In hac habitasse platea dictumst. Suspendisse tellus est, rutrum pellentesque sollicitudin vel, accumsan id tellus. 
                Donec nec nibh erat. Cras egestas efficitur nisl non semper. 
                Morbi vel justo tristique, rutrum tellus eget, iaculis quam. 
                Integer tempor felis quis felis tincidunt fringilla. 
                Sed vitae interdum neque.`}</p>
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
                    <img alt="sunny day in Helsinki" src={require("../../assets/images/experience.jpeg")}/>
                    <img alt="sunny day in Helsinki" src={require("../../assets/images/fortress.jpeg")}/>
                    <img alt="sunny day in Helsinki" src={require("../../assets/images/thor.jpeg")}/>
                    <img alt="sunny day in Helsinki" src={require("../../assets/images/carnage.jpeg")}/>
                </section>
            </div>
        </div>
    );
}

export default Experience;