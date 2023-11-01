import styles from "./Navbar.module.css";
import { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState();

    const handleNavFunction = () => {
        console.log("test");
        const navMenu = document.getElementById("nav");
        if (!isOpen) {
            // window.scrollTo(0, 0);
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            navMenu.classList.add("navOpen");
            document.body.style.overflowY = "hidden";
        } else {
            navMenu.classList.remove("navOpen");
            document.body.style.overflowY = "scroll";
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navContainer}>
            <div className={styles.navTitle}>
                LAALM <span className={styles.subtitle}>Life as a lego man</span>
            </div>
            <div className={styles.navLinks}>
                <a href="#">About</a>
                <a href="#">Videos</a>
                <a href="#">Contact Us</a>
                <a href="#" className={styles.login}>
                    Login
                </a>
            </div>
            <div className={styles.hamburger} onClick={handleNavFunction}>
                <FontAwesomeIcon className={styles.icon} icon={isOpen ? faXmark : faBars} />
            </div>
            <div className={styles.navLinksPhone} id="nav">
                <a href="#">About</a>
                <a href="#">Videos</a>
                <a href="#">Contact Us</a>
                <a href="#">Login</a>
            </div>
        </div>
    );
}
