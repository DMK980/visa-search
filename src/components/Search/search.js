import search from "./search.module.css"

export const Search = ()=>{
    return(
        <div className={search.search_container}>
                <input className={search.input} placeholder="Company name here"type="text"/>
                <button className={search.search}>SEARCH</button>
        </div> 
    )
}