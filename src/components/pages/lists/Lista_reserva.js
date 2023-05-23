import './lista_reserva.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
//import deleteReservacion from '../../../Funciones/Ver_Reservacion';
/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";*/

export function Lista_reserva(props) {


    //const id = useState(props.idUser)
    const idres = useState(props.id)
    const idEstablecimiento = useState(props.idEstablecimiento)
    const cost = useState(props.cost)
    const str =  String(props.arrivingTime)
    const arrivingTime = useState(str.substring(0,10) + " " +str.substring(11))

    async function submitHandler(e) {
        const response = await fetch(`https://parkipay2.herokuapp.com/api/reserve/${e[0]}`  ,
    {
        method: 'DELETE'
    }
    );
    const respJson = await response.json();
    console.log(JSON.stringify(respJson));
    window.location.reload();

    }


    return <>

<div class="box-card">

<h5> Establecimiento</h5>
<div class="row">
    <div className="col-3 py-2 borders">
    <img src="https://cdn.pixabay.com/photo/2019/09/06/03/39/parking-4455360_960_720.jpg" class="img-fluid" alt="Responsive image"></img>
    </div>

    <div className="col-5 py-2">
        <h6>{idEstablecimiento}</h6>
    </div>
</div>
<input type="button" onClick={() => submitHandler(idres)} class="buuton" value="Cancelar reservación"></input>


<div class="row">
    <div class="col">
        <h5> Hora de inicio</h5>
        <p>{arrivingTime}</p>
    </div>
    <div class="col">
        <h5> Precio</h5>
        <p>{cost}</p>
    </div>
</div>

</div>

    </>

}

/*const Boton = styled.div`

    float: right;
    width: fit-content;
    background-color: rgb(201, 36, 36);
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 2vw;
    padding-right: 2vw;
    margin-top: 15px;
    border-radius: 5px;
    border-color: transparent;
    color: rgb(236, 242, 247);
    font-family: Herculanum, "Eras Light ITC", sans-serif;

    &:hover{
        background-color: rgb(168, 30, 30);
    }
`;*/