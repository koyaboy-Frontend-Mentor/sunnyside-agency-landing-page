import React from "react";

export default function Header() {
    return (
        <header>
            <div className="header-nav">
                <h2 className="title">sunnyside</h2>
                <img src="./images/icon-hamburger.svg" alt="hamburger-menu" className="hamburger-menu" />
            </div>

            <div className="header-text">
                <h1>WE ARE CREATIVES</h1>
                <img src="./images/icon-arrow-down.svg" alt="" />
            </div>
        </header>

    )
}