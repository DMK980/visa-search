import "./headercss/darkmodeswitch.css"

export const DarkMode = (props)=>{
    return (
        <div className="toggle-container">
            <input 
             type="checkbox"
             id = "toggle"
             className="toggle"
             checked={props.checked}
             onChange={props.onChange}
             >
            </input>
            <label htmlFor="toggle"className="toggle-label">
             </label>
        </div> 
    )
}