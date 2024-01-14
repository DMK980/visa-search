import { Navbar } from "../../components/Header/Header"
//import landing from "./landing.module.css"

export const LandingPage = ()=>{
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <section>
                <h1>VISA SPONSORSHIP SEARCH</h1>
                <ul>
                    <li>A directory of comapnies that are licensed to sponsor workers in the UK.</li>
                    <li>Data Collected from the <span>official UK government website.</span></li>
                </ul>
                <div>
                    <input type="text"/>
                    <button>SEARCH</button>
                </div> 
            </section>
        </>
    )
}
