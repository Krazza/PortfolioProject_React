import React from "react";
import { NavLink } from "react-router-dom";

function Nav()
{
    return(
        <nav>
            <ul>
                <li><NavLink to="/">{"Home"}</NavLink></li>
                <li><NavLink to="about">{"About"}</NavLink></li>
                <li><NavLink to="/">{"Experience"}</NavLink></li>
                <li><NavLink to="/">{"Projects"}</NavLink></li>
                <li><NavLink to="/">{"Hobbies"}</NavLink></li>
                <li><NavLink to="/">{"Contact"}</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;