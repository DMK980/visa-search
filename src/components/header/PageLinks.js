import "./headercss/PageLinks.css"


export const Link = (props)=>{
    return (
        <div className="Page-Link-Container">
            <a 
             className="Page-Link"
             href=" ">{props.page}</a>
            <div className="underline"></div>
        </div>
    )
}