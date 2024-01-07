import { Header } from './components/header/header';
import { Search } from './pages/search';
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
      <Search/>
    </div>
  );
}

export default App;
