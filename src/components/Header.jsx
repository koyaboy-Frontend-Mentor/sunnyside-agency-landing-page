import React, { useState, useRef, useEffect } from "react";

export default function Header() {
    const [menu, setMenu] = useState(false)


    const menuRef = useRef(null)
    const headerTextRef = useRef(null)

    const toggleMenu = () => {
        setMenu(prevMenu => !prevMenu)
    }

    useEffect(() => {
        menu ? menuRef.current.classList.add("active") : menuRef.current.classList.remove("active")
        menu ? headerTextRef.current.style.display = "none" : headerTextRef.current.style.display = "block"
    }, [menu])

    return (
        <header>
            <div className="header-nav">
                <img src="./images/logo.svg" alt="sunnyside-logo" />

                <img
                    src="./images/icon-hamburger.svg"
                    alt="hamburger-menu"
                    className="hamburger-menu"
                    onClick={toggleMenu} />

                <nav className="desktop-nav">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Projects</a></li>
                        <button><a href="/"></a>CONTACT</button>
                    </ul>
                </nav>
            </div>

            <div
                ref={menuRef}
                className="menu-expanded"
            >
                <nav>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Projects</a></li>
                        <button>CONTACT</button>
                    </ul>
                </nav>
            </div>

            <div
                ref={headerTextRef}
                className="header-text moveUpDown">
                <h1>WE ARE CREATIVES</h1>
                <img src="./images/icon-arrow-down.svg" alt="icon-arrow-down" />
            </div>
        </header >

    )
}