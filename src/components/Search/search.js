import search from "./search.module.css"

export const Search = ()=>{
    return(
        <div className={search.input_container}>
            <div className={search.input_container_2}>
                <input className={search.input} placeholder="Enter Company name here"type="text"/>
                <button className={search.search}>SEARCH</button>
            </div>
        </div>
    )
}