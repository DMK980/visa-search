import landing from "./landing.module.css"
import { Search } from "../../components/Search/search"
import { HeaderComponent } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/footer"

export const LandingPage = ()=>{
    return (
        <div className={landing.landingpage}>
            <HeaderComponent/>
            <section className={landing.section}>
                <Search/>
            </section>
            <Footer/>
        </div>
    )
}
