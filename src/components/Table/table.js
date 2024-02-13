import table from "./table.module.css"
import {data} from "./demodata"

export const Table = ()=>{
    return (
        <div className={table.mainContainer}>
            <div className={table.tableContainer}>
                <div className={table.companyContainer}>
                    {data.map((company,index)=>{
                        return (
                            <div className={table.companyRow}>
                                <input className={table.checkbox}type="checkbox" id={`info${index}`}/>
                                <label className={table.companyName}for={`info${index}`}><span className={table.companyIndex}>{index + 1}.</span>{company.Organisation_Name}</label>
                                <div className={table.companyInfo}>
                                    <p className={`${table.companystat} ${table.companystat1}`}><span className={table.companyInfoHeading}>Route: </span>{company.Route}</p>                                
                                    <p className={`${table.companystat} ${table.companystat2}`}><span className={table.companyInfoHeading}>City: </span>{company.Town_City}</p>
                                    <p className={`${table.companystat} ${table.companystat3}`}><span className={table.companyInfoHeading}>Rating: </span>{company.Type_Rating}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={table.tableSideInfoContainer}>
                <div className={table.tableSideInfoContainer2}>
                    <h2 className={table.title}>McMullan Shellfish</h2>
                    <p className={table.statinfo}><span className={`${table.statinfo_head} ${table.statinfo_head1}`}>Route: </span>Skilled</p>                
                    <p className={table.statinfo}><span className={`${table.statinfo_head} ${table.statinfo_head2}`}>City: </span>London</p>
                    <p className={table.statinfo}><span className={`${table.statinfo_head} ${table.statinfo_head3}`}>Rating: </span>Good</p>  
                </div>             
            </div>
        </div>
    )
}