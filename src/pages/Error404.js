import React from 'react';

const Error404 = ({theme}) => {
    return (

        <div className={theme}> 
        <div className='error'>
           <span>Vuelve a intentar! No existe esta ruta!</span> 
        </div>

        </div>
    );
};

export default Error404;