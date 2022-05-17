import React from "react"

const About = ({theme}) => {

    return (

        <div className= {theme}>

            <head>

                <title>Curriculum</title>
            </head>


<br/>
<br/>

<body>

<ul className="myinfo">

<h3>Estudios</h3> 

<br/>
    <li>
        Universidad Evangelica de el salvador <br/>
       Licenciatura del Idioma Ingles (4 años)
    </li>
<br/>
    <li>
        Colegio Luz de Israel <br/>
        Bachillerato General (2 años)
    </li>

<br/>

<h3>Elim </h3> <br/>

    <li>

Lider Juvenil

    </li>

    <br/>

    <h3>Desarrollador</h3> <br/>

    <li>
       

        Javascript (avanzado)
        Css (avanzado)
        Html (avanzado)


    </li>

    <br/>
<h3> frameworks</h3> <br/>

    <li>

        React (avanzado)
        Angular (basico)
    </li>
</ul>

</body>
            

        </div>
    );
}

export default About