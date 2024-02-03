import landing from "./landing.module.css"
import { Search } from "../../components/Search/search"
import { HeaderComponent } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/footer"
import { Table } from "../../components/Table/table"

export const LandingPage = ()=>{
    return (
        <div className={landing.landingpage}>
            <HeaderComponent/>
            <section className={landing.section}>
                <Search/>
                <Table/>
            </section>
            <Footer/>
        </div>
    )
}
