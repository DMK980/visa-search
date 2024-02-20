import searchpage from "./searchpage.module.css"
import { HeaderComponent } from "../../components/Header/Header"
import { Search } from "../../components/Search/search"
import { Footer } from "../../components/Footer/footer"
import { Table } from "../../components/Table/table"


export const SearchPage = ()=>{
    return(
        <div className={searchpage.searchpage}>
            <HeaderComponent/>
            <section className={searchpage.mainsection}>
                <div className={searchpage.mainsectionsearch}>
                    <Search/>
                </div>
                <Table/>
            </section>
            <Footer/>
        </div>
    )
}