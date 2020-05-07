import React from "react";

function Header() {
    return (
        <header>
            <ul className="nav-bar">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="" id="login">Login</a></li>
            </ul>
        </header>
    );
}

export default Header;