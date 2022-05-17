import React from "react";
import { useState } from "react";
import './App.css';
import Navigation from "./componets/Enrutador";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Proyects from "./pages/Proyects";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Iniciosesion from "./pages/Iniciosesion";
import Registro from "./pages/Registro";


const initialTheme = "light";

function App () {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    console.log (e.target.value);
if(e.target.value === "light") {

  setTheme("light");

} else {

setTheme("dark");
}

  };
  
  return (
 
<div className="App">


<Navigation theme={theme} handleTheme = {handleTheme}/>
<Home theme={theme}/>
<Donate theme={theme}/>
<Proyects theme={theme}/>
<About theme={theme}/>
<Error404 theme={theme}/>
<Iniciosesion theme={theme}/>
<Registro theme={theme}/>

</div>


 
  );
}

export default App;
