import "./pages css/search.css"
export const Search = ()=>{
    return (
        <div className="body-container">
            <h1 className="headline">VISA SPONSORSHIP SEARCH</h1>
            <ul className="bullet-points">
                <li>A directory of companies that are licensed to sponsor workers in the UK.</li>
                <li>Data Collected from the <span className="emphasis-text">official UK government website</span></li>
            </ul>
            <div className="search-container">
                <input className="company-name-input"placeholder="Company name here"></input>
                <button className="search-button"type="submit">SEARCH</button>
            </div>
        </div> 
    )
}