import React from "react"
import fotocreador from "../media/christianFoto.png"
import reactIcon from "../media/Icons/react.png"
import pythonIcon from "../media/Icons/python.png"
import htmlIcon from "../media/Icons/html.png"
import cssIcon from "../media/Icons/css.png"
import javascriptIcon from "../media/Icons/javascript.png"


const Contact = () => {

    return (

        <div>

            <div className ="myinfo-flex-container">
 
 <div align = "center">

    <header id="header-contact"> 

        <h1> <strong>Aitana</strong> was created for </h1> 

        <h2> <i> Christian Barillas </i> </h2> 

        <img src= {fotocreador} alt ="fotitooo" height= "200px" width="200px"/>
      
            
    </header>


    <div >

<h5>Myselfe</h5>

<p>I have been learning computer science since I was a child, I love technology and new
ways to create new solutions and innovate.</p>

<div id="iconos">

<img src= {reactIcon} alt="JavascriptIcon" height="50px" width= "75px" />
<img src = {pythonIcon} alt ="pythonIcon" height="50px" width ="55px"/>
<img src ={javascriptIcon} alt ="javascripIcone" height= "50px" width="70px"/>
<img src ={cssIcon} alt ="cssIcon" height="50px" width="50px"/>
<img src ={htmlIcon} alt ="htmlIcon" height ="50px" width = "50px"/>

</div>


</div>


<section className="section-style">

    <p> I love learning new things, I've been working at Credit Karma for 2 years and developing projects in javascrip, python and even php. I have been involved in similar databases like mySQL </p>


<hr/><a href="https://www.youtube.com/channel/UCmuJzgRbzGm0gZcNwujmo_w/"> Youtube channel</a> <hr/>
<a href="https://patreon.com/Christianbarillas?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator"> Patreon</a> <hr/>
<a href="https://www.paypal.com/donate/?hosted_button_id=VYJUBRWZQP6A6"> Donar</a> <hr/>



</section>


<div className= "formulario-style">
    
    <form action = "Correo.php" method ="get">

<div>

<h5>Puedes enviarme un mensaje aqui!</h5>

</div>


<input name='name' type ='text' placeholder ='Nombre completo' style={{margin: "20px"}} required = "" /> 
<input name ='correo' type= 'text' placeholder ='Correo electronico' required ="" />

<br/> <br/>
<textarea name ='comentario' rows ='10' cols =' 50 ' placeholder ='Escriba su comentario' id='areatexto'  style={{margin: "20px"}}/>
<br/> <br/>
<input className = 'botonfurmalario' type ='submit' />


</form>


</div>

    </div>


<footer className="footer-style">

<h6> Derechos reservados </h6>




<section>

<a href="https://www.linkedin.com/in/christian-barillas-8795a1236/" rel="noopener">Linkedin</a>
<a href="mailto:christianbarillasyt@gmail.com">Email</a>
<a href="tel: +50360483336">Phone number</a>

</section>

</footer>


</div>

        </div>

        


    );
}

export default Contact