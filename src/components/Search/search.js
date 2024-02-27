import search from "./search.module.css";
import { useNavigate } from "react-router-dom";


export const Search = ()=>{

    const navigate = useNavigate();

    const pageSwitch = ()=>{
        navigate(`/search`)    
    }
    
    return(
        <div className={search.search_container}>
            <input className={search.input} placeholder={`Company name here`}type="text"/>
            <button className={search.search} onClick={pageSwitch}>SEARCH</button>
        </div> 
    )
}