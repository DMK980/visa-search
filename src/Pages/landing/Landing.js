import { Navbar } from "../../components/Header/Header"
import landing from "./landing.module.css"
import { Search } from "../../components/Search/search"

export const LandingPage = ()=>{
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <section className={landing.section}>
                <div className={landing.container}>
                    <h1 className={landing.title}>VISA SPONSORSHIP SEARCH</h1>
                    <ul className={landing.info}>
                        <li className={landing.info_point_1}>I. A directory of comapnies that are licensed to sponsor workers in the UK.</li>
                        <li className={landing.info_point_2}>II. Data Collected from the <span className={landing.span}>official UK government website.</span></li>
                    </ul>
                </div>
                <Search/>
            </section>
        </>
    )
}
