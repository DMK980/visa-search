import table from "./table.module.css"
import {data} from "./demodata"
import {useState} from "react"


export const Table = ()=>{

    const [checkedElement,setCheckedElement] = useState()
    const [companyName,setCompanyName] = useState("McMullan Shellfish")
    const [route,setRoute] = useState("Skilled Worker")
    const [city, setCity] = useState("Ballymena")
    const [rating, setRating] = useState("Worker(A rating)")
    // const [idarray, setidarray] = useState(["companyname0","companyname1"])

    const changebordercolour = (id,option)=>{
        let parent = document.getElementById(id).parentElement
        let style = getComputedStyle(document.body)
        // gets parent element and changes border colour when checked
        if (option === "add"){
            parent.style.borderColor = style.getPropertyValue("--COLOUR-THREE")
        } else if (option === "remove"){
            parent.style.removeProperty("border-color")
        }
    }
    
    const uncheckCheckbox = (id)=>{
        let index = id.slice(-1)
        let checkboxelem = document.getElementById(`info${index}`)
        if (checkboxelem.checked){
            checkboxelem.checked = false
        }
    }

    const changeInfo = (id)=>{
        let index = id.slice(-1)
        //retriving data
        let companyname = document.getElementById(id).innerText.split(".").slice(1).join("")
        let routeinfo = document.getElementById(`companyRoute${index}`).innerText.split(" ").slice(1).join("")
        let cityinfo = document.getElementById(`companyCity${index}`).innerText.split(" ").slice(1).join("")
        let ratinginfo = document.getElementById(`companyStat${index}`).innerText.split(" ").slice(1).join("")
        //setting states
        setCompanyName(companyname)
        setRoute(routeinfo)
        setCity(cityinfo)
        setRating(ratinginfo)
    }

    const handlechecked = (e)=>{
        // data needed
        let option = "add"
        let id = e.target.id

        // change data for side bar
        changeInfo(id)

        if (checkedElement === id){
            option = "remove"
            changebordercolour(id,option)
            setCheckedElement()
    
        } else {
            if (checkedElement !== undefined){
                option = "remove"
                changebordercolour(checkedElement,option)
                uncheckCheckbox(checkedElement)
            }
            option = "add"
            changebordercolour(id,option)
            setCheckedElement(id)
        }   
    }

    return (
        <div className={table.mainContainer}>
            <div className={table.tableContainer}>
                <div className={table.companyContainer}>
                    {data.map((company,index)=>{
                        return (
                            <div key={index}className={`${table.companyRow}`} id ={`companyRow${index}`}>
                                <input key={index}className={table.checkbox}type="checkbox" id={`info${index}`} />
                                <label className={`${table.companyName}`} id = {`companyName${index}`}htmlFor={`info${index}`}onClick={handlechecked}><span className={table.companyIndex}>{index + 1}.</span>{company.Organisation_Name}</label>
                                <div className={table.companyInfo}>
                                    <p className={`${table.companystat} ${table.companystat1}`} id ={`companyRoute${index}`}><span className={table.companyInfoHeading}>Route: </span>{company.Route}</p>                                
                                    <p className={`${table.companystat} ${table.companystat2}`} id ={`companyCity${index}`}><span className={table.companyInfoHeading}>City: </span>{company.Town_City}</p>
                                    <p className={`${table.companystat} ${table.companystat3}`} id ={`companyStat${index}`}><span className={table.companyInfoHeading}>Rating: </span>{company.Type_Rating}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={table.tableSideInfoContainer}>
                <div className={table.tableSideInfoContainer2}>
                    <h2 className={table.title}>{companyName}</h2>
                    <p className={table.statinfo}><span className={`${table.statinfo_head} ${table.statinfo_head1}`}>Route: </span>{route}</p>                
                    <p className={table.statinfo}><span className={`${table.statinfo_head} ${table.statinfo_head2}`}>City: </span>{city}</p>
                    <p className={table.statinfo}><span className={`${table.statinfo_head} ${table.statinfo_head3}`}>Rating: </span>{rating}</p>  
                </div>             
            </div>
        </div>
    )
}


// if (idarray.includes(id)){
            
// }

// for (let i in idarray){
//     if (idarray[i] === id){

//     }
// }

// if (checkedElement === id){
//     option = "remove"
//     changebordercolour(id,option)
//     setCheckedElement()
    
// } else {
//     option = "add"
//     changebordercolour(id,option)
//     setCheckedElement(id)
// }