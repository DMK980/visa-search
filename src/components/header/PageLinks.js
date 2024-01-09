import "./headercss/PageLinks.css"


export const Link = (props)=>{
    return (
        <div className="links">
            <a 
                className="Page-Link link-one"
                href=" ">Search</a>
            <a 
                className="Page-Link link-two"
                href=" ">Stats</a>
        </div>
    )
}