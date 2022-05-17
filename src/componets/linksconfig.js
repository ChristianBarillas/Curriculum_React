import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = ({theme, handleTheme}) => {

    return (

      <div className= {theme}>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link  to="/">
     <img src= "./aitanalogo.png"  width= "50" alt='foto' /> 
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/proyects'>Proyects</Link>
          </li>
          <li className="nav-item">
            <Link className= "nav-link" to='/donate'>Donate</Link>
          </li>
  
          <li className="nav-item">
            <Link className= "nav-link" to='/registro'> Registro </Link>

            </li>
         
            <li className="nav-item">
            <Link className= "nav-link" to='/iniciosesion'> Iniciar </Link>
  
      <li></li>
      
  
          </li>

 {/* icono de cambio de tema claro/oscuro en barra superior */}
 
 <li className="nav-link">

<input type="radio" name ="theme" id="light" onClick={handleTheme} value ="light"/>
<label htmlFor='light'> Claro</label>

 </li>

 <li className='nav-link'>
 <input type="radio" name="theme" id="dark" onClick={handleTheme} value="dark"/>

<label htmlFor='dark'>Oscuro</label>

</li>

   {/* icono de cambio de idioma en barra superior */}

<li className="nav-link">
 <select>
<option value ="es" > ES</option>
<option value ="En" >EN</option>
 </select>
 </li>  

         
  
      </ul>
  
      </div>
    </div>
  </nav>
  
  </div>);

    }

  

export default Navbar


