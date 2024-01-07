import "./headercss/darkmodeswitch.css"

export const DarkMode = ()=>{
    return (
        <div className="toggle-container">
            <input 
             type="checkbox"
             className="toggle">
            </input>
        </div>
    )
}