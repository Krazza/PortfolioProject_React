import React from "react";
import styles from "../styles/ContactButton.module.css";

function ContactButton()
{
    function OpenMail()
    {
        console.log("opening mail client");
    }

    return(<button className={styles.myContactButton} onClick={OpenMail}>{"Contact me👋"}</button>)
}

export default ContactButton