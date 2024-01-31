import table from "./table.module.css"
import { Tabledata } from "./tabledata"
export const Table = ()=>{
    return (
        <table className={table.table}>
            <tr>
                <Tabledata/>
            </tr>
        </table>
    )
}