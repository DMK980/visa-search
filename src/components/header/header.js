import { Link } from "./PageLinks"
import { DarkMode } from "./Darkmodeswitch"
import { Title } from "./title"
import "./headercss/header.css"

export const Header = (props)=>{
    return (
        <div className="Header">
            <Title/>
            <Link/>
            <DarkMode 
             checked = {props.checked} 
             onChange={props.onChange}/>
        </div>
        )
}