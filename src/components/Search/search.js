import search from "./search.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const Search = ()=>{

    const [inputtext,setinputtext] = useState("")
    const navigate = useNavigate();

    const inputchecking = (event) =>{
        setinputtext(event.target.value)
    }
    const pageSwitch = ()=>{
        if (inputtext !== ""){
            navigate(`/search`)
        }
    }

    return(
        <div className={search.search_container}>
            <input className={search.input} placeholder="Company name here"type="text" value={inputtext} onChange={inputchecking}/>
            <button className={search.search} onClick={pageSwitch}>SEARCH</button>
        </div> 
    )
}