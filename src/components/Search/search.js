import search from "./search.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inputchange } from "../../store/inputslice/inputslice";


export const Search = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.input.value);

    const pageSwitch = ()=>{
        navigate(`/search`)  
    }

    const updatestate = (e)=>{
        dispatch(inputchange(e.target.value))
        if (e.target.value === ""){
            dispatch(inputchange("Company name here"))
        }
    }

    return(
        <div className={search.search_container}>
            <input className={search.input} placeholder={selector}type="text" onChange={updatestate}/>
            <button className={search.search} onClick={pageSwitch}>SEARCH</button>
            <div></div>
        </div> 
    )
}