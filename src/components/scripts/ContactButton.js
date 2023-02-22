import React from "react";
import styles from "../styles/ContactButton.module.css";

function ContactButton()
{
    function OpenMail()
    {
        window.location.href = "mailto:muondove@gmail.com?subject=Intern/Junior%20position&body=Hello_World;";
    }

    return(<button className={styles.myContactButton} onClick={OpenMail}>{"Contact me👋"}</button>)
}

export default ContactButton