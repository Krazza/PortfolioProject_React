import React from "react";
import { NavLink } from "react-router-dom";

function Nav()
{
    return(
        <nav>
            <ul>
                <li><NavLink to="/">{"Home"}</NavLink></li>
                <li><NavLink to="about">{"About"}</NavLink></li>
                <li><NavLink to="experience">{"Experience"}</NavLink></li>
                <li><NavLink to="projects">{"Projects"}</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;