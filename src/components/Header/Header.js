import Header from "./Header.module.css"

export const Navbar = ()=>{
    return (
        <nav className={Header.navbar}>

            <ul className={Header.navbar_list}>

                <li className={Header.links}>
                    <a href="/">Search</a>
                </li>

                <li className={Header.links}>
                    <a href="/">Stats</a>
                </li>

                <li className={Header.links}>
                    <input id = "toggle"type="checkbox"></input>
                    <label htmlFor="toggle"></label>
                </li>

            </ul>

        </nav>
    )
}