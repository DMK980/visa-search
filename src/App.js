import { Header } from './components/header/header';
import './App.css';
import {useState} from "react";

function App() {

  const [lightmode, setlightmode] = useState(false);

  const change = ()=>{
    setlightmode(!lightmode)
  }

  return (
    <div className="App"data-theme={lightmode ?"dark-mode":""}>
      <Header 
       checked = {lightmode} 
       onChange={change}
       />
    </div>
  );
}

export default App;
