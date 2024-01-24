
import Header from "./Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun} from "@fortawesome/free-solid-svg-icons"
import {faMoon} from "@fortawesome/free-solid-svg-icons"


export const Navbar = ()=>{
    return (
        <nav className={Header.navbar}>

            <ul className={Header.navbar_list}>

                <li className={Header.links}>
                    <a className={`${Header.links_a} ${Header.links_a_search}`}href="/">Search</a>
                </li>

                <li className={Header.links}>
                    <a className={Header.links_a}href="/">Stats</a>
                </li>

                <li className={Header.links}>
                    <input className={Header.input}id="toggle"type="checkbox"/>
                    <label className={`${Header.toggle_light} ${Header.links_a}`}for="toggle"><FontAwesomeIcon icon={faSun} style={{color: "#ffffff",}} /></label> 
                    <label className={`${Header.toggle_dark} ${Header.links_a}`}for="toggle"><FontAwesomeIcon icon={faMoon} style={{color: "#1a181c",}} /></label> 
                </li>

            </ul>

        </nav>
    )
}