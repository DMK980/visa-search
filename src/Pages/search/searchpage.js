import searchpage from "./searchpage.module.css"
import { HeaderComponent } from "../../components/Header/Header"
import { Search } from "../../components/Search/search"


export const SearchPage = ()=>{
    return(
        <div className={searchpage.searchpage}>
            <HeaderComponent/>
            <Search/>
        </div>
    )
}