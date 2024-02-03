import table from "./table.module.css"
import {data} from "./demodata"


export const Table = ()=>{
    return (
        <div className={table.main_container}>
            <div className={table.table_container}>
                <table className={table.table} cellspacing="0"cellpadding="0">
                    <tbody className={table.tablebody}>
                        {data.map((company,index)=>{
                            return (
                                <tr className={table.tablerow}>
                                    <td className={table.tabledata}><span className={table.tablenumber}>{index + 1}</span>{company.Organisation_Name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className={table.stats_container}>
                    <div className={table.stats}>
                        <h2 className={table.title}>McMullan Shellfish</h2>
                        <div className={table.statsinfo_container}>
                            <p className={table.statsinfo}><span className={`${table.statstitle} ${table.statstitle1}`}>Route:</span>Skilled worker</p>
                            <p className={table.statsinfo}><span className={`${table.statstitle} ${table.statstitle2}`}>City:</span>London</p>
                            <p className={table.statsinfo}><span className={`${table.statstitle} ${table.statstitle3}`}>Rating:</span>Good</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}