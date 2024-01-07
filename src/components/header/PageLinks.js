import "./headercss/PageLinks.css"


export const Link = (props)=>{
    return (
        <div className="links">
            <div className="Page-Link-Container one">
                <a 
                 className="Page-Link link-one"
                 href=" ">Search</a>
                <div 
                 className="underline" 
                 id="link-one-underline"></div>
            </div>
            <div className="Page-Link-Container two">
                <a 
                 className="Page-Link link-two"
                 href=" ">Stats</a>
                <div 
                 className="underline"
                 id="link-two-underline"></div>
            </div>
        </div>
    )
}