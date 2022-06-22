import React from "react";
import { Link } from "react-router-dom"



const Categorias = () => {
return(

<div>
<div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="true" to="/about">Novedades</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to="/about">Relojes</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Carteras</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Bolsones</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link">Pulseras</a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Ropa</Link>
      </li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Relojes FASHION</h5>
    <p className="card-text">hermosos reloj para mujer!</p>
    <img src="./assest/fashion.jpeg" width="100" height="100"/>
    <Link className="btn btn-primary" to="/about">Comprar</Link>
  </div>
  
</div>

</div>
);


}

export default Categorias