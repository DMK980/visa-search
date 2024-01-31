
import Header from "./Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun} from "@fortawesome/free-solid-svg-icons"
import {faMoon} from "@fortawesome/free-solid-svg-icons"
import {faBars}from "@fortawesome/free-solid-svg-icons";


export const HeaderComponent = ()=>{
    return (
        <header className={Header.Header}>
            <h1 className={`${Header.title}`}>VISA SPONSORSHIP SEARCH</h1>
            <nav className={Header.navbar}>
                <ul className={Header.navbar_list}> 
                    {/* LINKS TO OTHER PAGES */}
                    <li className={Header.links}>
                        <a className={`${Header.links_a} ${Header.links_a_search}`}href="/">Search</a>
                    </li>
                    <li className={Header.links}>
                        <a className={Header.links_a}href="/">Stats</a>
                    </li>
                    <li className={Header.links}>
                        <input className={Header.input}id="toggle"type="checkbox"/>
                        <label className={`${Header.toggle_light} ${Header.links_a}`}for="toggle"><FontAwesomeIcon icon={faSun} style={{color: "#2e3532"}} /></label> 
                        <label className={`${Header.toggle_dark} ${Header.links_a}`}for="toggle"><FontAwesomeIcon icon={faMoon} style={{color: "#2e3532"}} /></label> 
                    </li>
                </ul>
            </nav>
            <FontAwesomeIcon className={Header.hamburger}icon={faBars} style={{color: "#2e3532",}} />
        </header>
    )
}