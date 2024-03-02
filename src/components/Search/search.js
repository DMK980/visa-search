import search from "./search.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inputchange } from "../../store/inputslice/inputslice";


export const Search = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const pageSwitch = ()=>{
        navigate(`/search`) 
    }

    const updatestate = (e)=>{
        console.log(e.target.value)
        dispatch(inputchange(e.target.value))
    }


    return(
        <div className={search.search_container}>
            <input className={search.input} placeholder={useSelector((state)=> state.input.value)}type="text" onChange={updatestate}/>
            <button className={search.search} onClick={pageSwitch}>SEARCH</button>
            <div></div>
        </div> 
    )
}