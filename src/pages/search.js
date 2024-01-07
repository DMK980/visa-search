
export const Search = ()=>{
    return (
        <div className="body-container">
            <h1>VISA SPONSORSHIP SEARCH</h1>
            <ul>
                <li>A directory of companies that are licensed to sponsor workers in the UK.</li>
                <li>Data Collected from the official UK government website</li>
            </ul>
            <div className="Search-container">
                <input id="company-name-input"></input>
                <button id="search-button"type="submit"></button>
            </div>
        </div>
    )
}