import React from "react";
import {Link} from "react-router-dom";



const Navbar = () => {

    return (

<header className="header">
<nav className="nav" >
<Link  className="logo" to="/"><img src="/aitana.png" alt="aitana" width="50" /> </Link>
<button className="nav-toggle" aria-label="abrir menu"> boton2222</button>
<ul className="nav-menu nav-menu_visible">


       <li className="nav-menu-item"> <Link className="nav-menu-link nav-link" to="/home">Home </Link> </li> 
       <li className="nav-menu-item"> <Link className="nav-menu-link nav-link" to="/contact">Contact </Link> </li> 
       
    
   </ul>
  </nav>
      
  </header>
  
 

  
  
  );
  
    }

  

export default Navbar
