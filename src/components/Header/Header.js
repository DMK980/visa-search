
import Header from "./Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun} from "@fortawesome/free-solid-svg-icons"


export const Navbar = ()=>{
    return (
        <nav className={Header.navbar}>

            <ul className={Header.navbar_list}>

                <li className={Header.links}>
                    <a className={Header.links_a}href="/">Search</a>
                </li>

                <li className={Header.links}>
                    <a className={Header.links_a}href="/">Stats</a>
                </li>

                <li className={Header.links}>
                    <a href="/"><FontAwesomeIcon icon={faSun} style={{color: "#ffffff",}} /></a> 
                </li>

            </ul>

        </nav>
    )
}