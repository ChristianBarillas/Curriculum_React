import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../../pages/Home';
import Error404 from '../../pages/Error404';
import Contact from '../../pages/Contact';


const Dashboard = () => {

    return (

      //exact ya no se ocupa por la nueva version de react 6 example exact path =""
      <div>
        <BrowserRouter> 
        <Navbar/>
        <Routes>
        

            <Route path = '/contact' element ={<Contact/>}/>
            <Route path = '/home' element = {<Home/>}/>
            <Route path = '/' element = {<Home/>}/>
         <Route path='*' element={<Error404/>} />
        </Routes> 
      </BrowserRouter>
      
      </div>
 
      

  
    );

    

}

export default Dashboard