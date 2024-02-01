
import Header from "./Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun} from "@fortawesome/free-solid-svg-icons"
import {faMoon} from "@fortawesome/free-solid-svg-icons"
import {faBars}from "@fortawesome/free-solid-svg-icons";


export const HeaderComponent = ()=>{

    return (
        <header className={Header.Header}>
            {/* Logo */}
            <h1 className={Header.title}>VISA SPONSORSHIP SEARCH</h1>
            <input type="checkbox" id="hamburger" className={Header.hamburger_toggle}/>
            <nav className={`${Header.navbar} ${Header.fade_in}`}>
                <ul className={Header.navbar_list}> 
                    {/* LINKS TO OTHER PAGES */}
                    <li className={Header.links}>
                        <a className={`${Header.links_a} ${Header.links_a_search}`}href="/Search">Search</a>
                    </li>
                    <li className={Header.links}>
                        <a className={`${Header.links_a} ${Header.links_a_submit}`}href="/Stats">Stats</a>
                    </li>
                    <li className={Header.links}>
                        {/* Light and Dark toggle */}
                        <input className={Header.input}id="toggle"type="checkbox"/>
                        <label className={Header.toggle_light}for="toggle">
                            <FontAwesomeIcon icon={faSun} style={{color: "#2e3532"}} />
                        </label> 
                        <label className={Header.toggle_dark}for="toggle">
                            <FontAwesomeIcon icon={faMoon} style={{color: "#2e3532"}} />
                        </label> 
                    </li>
                </ul>
            </nav>
            {/* Hamburger Menu */}
            <label for="hamburger"><FontAwesomeIcon className={Header.hamburger}icon={faBars} style={{color: "#2e3532",}} /></label>
        </header>
    )
}