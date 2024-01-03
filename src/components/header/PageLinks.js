import "./headercss/PageLinks.css"


export const Link = (props)=>{
    return (
        <div className="Page-Link-Container">
            <a className="Page-Link">{props.page}</a>
            <div className="underline"></div>
        </div>
    )
}