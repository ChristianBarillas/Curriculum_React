import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from '../../pages/About';
import Home from '../../pages/Home';
import Donate from '../../pages/Donate';
import Error404 from '../../pages/Error404';
import Registro from '../../pages/Registro';
import Iniciosesion from '../../pages/Iniciosesion';
import Products from '../../pages/Products';




//members sections
import Thefashionstore from '../members/cliente1/Thefashionstore';




const Dashboard = () => {

    return (

      //exact ya no se ocupa por la nueva version de react 6 example exact path =""
      <div>
        <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route  path='/about' element={<About/>} />
            <Route path='/products' element={<Products />} />
            <Route path='/donate' element={<Donate/>} />
            <Route path='/registro' element={<Registro/>} />
            <Route path='/iniciosesion' element={<Iniciosesion/>} />
            <Route path= '/thefashionstore' element={<Thefashionstore/>} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error404/>} />
        </Routes> 
      </BrowserRouter>
      
      </div>
 
      

  
    );

    

}

export default Dashboard