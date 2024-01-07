import { Link } from "./PageLinks"
import { DarkMode } from "./Darkmodeswitch"
import "./headercss/header.css"

export const Header = (props)=>{
    return (
        <div className="Header">
            <Link/>
            <DarkMode 
             checked = {props.checked} 
             onChange={props.onChange}/>
        </div>
        )
}