import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return(
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Todoist_logo.png" alt=""/>
        </header>
    );
}

export default Header;