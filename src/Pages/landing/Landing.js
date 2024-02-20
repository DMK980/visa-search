import landing from "./landing.module.css"
import { Search } from "../../components/Search/search"
import { HeaderComponent } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/footer"


export const LandingPage = ()=>{
    return (
        <div className={landing.landingpage}>
            <HeaderComponent/>
            <section className={landing.section}>
                <div className={landing.content}>
                    <div className={`${landing.textsections} ${landing.textsection1}`}>
                        <p className={landing.text}>Find out about your next opportunity</p>
                    </div>
                    <Search/>
                    <div className={`${landing.textsections} ${landing.textsection2}`}>
                        <ul className={landing.list}>
                            <li className={landing.listitem}>A directory of companies that are licensed to sponsor workers in the UK.</li>
                            <li className={landing.listitem}>Data Collected from the <span className={landing.underline}>official UK government website</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
