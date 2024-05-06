import Header from "./Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars}from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


export const HeaderComponent = ()=>{

    const navigate = useNavigate();

    const handleclick = ()=>{
        navigate("/")
        
    }

    return (
        <header className={Header.header_container}>
            <div className={Header.Header}>
                {/* Logo */}
                <h1 className={Header.title}>VISA SPONSORSHIP SEARCH</h1>
                <input type="checkbox" id="hamburger" className={Header.hamburger_toggle}/>
                <nav className={`${Header.navbar} ${Header.fade_in}`}>
                    <ul className={Header.navbar_list}> 
                        {/* LINKS TO OTHER PAGES */}
                        <li className={Header.links}>
                            <button className={`${Header.links_a} ${Header.links_a_search}`}onClick={handleclick}>Home</button>
                        </li>
                    </ul>
                </nav>
                {/* Hamburger Menu */}
                <label htmlFor="hamburger"><FontAwesomeIcon className={Header.hamburger}icon={faBars} style={{color: "#2e3532",}} /></label>
            </div>
        </header>
    )
}