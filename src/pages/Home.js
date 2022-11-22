import React from "react"
import Converter from "../componets/New integrations/Converter";
import BienvenidaVideo from "../media/Multimedia";


const Home = () => {

    return (


        <div>
            
<header className="head1">
<h3>Webcome to my curriculum! </h3> 
<p className='parrafohead'>You can contact me in the next section! Follow my channel in order to get the last updates and tutorial about PYTHON, JAVASCRIP, HTML, CSS AND MORE...</p>

<BienvenidaVideo/>

<p className='parrafohead'>Contactame para crear juntos soluciones!</p>



</header>

<div className="flexcontainer"> 



<div className = "flex-item">
<h3>Studies</h3>

<details open>
   <h5>Universidad evangelica de el salvador.</h5> 
   <p>I have worked as translator and interprete with U.S american. 
        I have translated legal and financial documents</p>
    <ol>
        <li>
            Translation and interpreting in English
        </li>
    </ol>

   

</details>

<details open>
   <h5>Developer</h5> 

   I have worked with different proyects, 
   I am a self-taught person, here are some of all the courses I have passed
    
    <ul>
        <li>
            Corsera
        </li>

        <li>
            Google certificates
        </li>

        <li>
            Harvard C50
        </li>

        <li>
            Sololearn 
        </li>

        <li>
            Others
        </li>

        </ul>

</details>


</div>


<div className = "flex-item">
<h5>Skills</h5>

<or>
    <li>
        React
    </li>
    <li>
        Javascrip
    </li>
    <li>
        Python
    </li>
    <li>
        Html
    </li>

    <li>
        Css
    </li>

    <li>
        Git
    </li>

    <li>
       Others-in process...
    </li>
</or>
</div>

<div className = "flex-item">
<h5>Translated documents</h5>


<details open>

    <a href="../media/documents/Dethcertificate(English-Spanish).zip" download= "Dethcertificate(English-Espanol)"> Dethcertificate</a>
   

</details>

<p>working to upload the rest of the documents</p>

</div>




<div className = "flex-item">
<h5>Proyects</h5>

<details open>


</details>


<p>working to upload my proyects here</p>
</div>





<div className = "flex-item">
<h5>Kilometer converter</h5>

<p><Converter/></p>

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
      



    );


}

export default Home