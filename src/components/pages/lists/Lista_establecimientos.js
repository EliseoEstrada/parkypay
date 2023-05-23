
import './lista_est.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Link
} from "react-router-dom";
import { useState } from 'react';

export function Lista_establecimientos(props) {


  const id = useState(props.id);
  const name = useState(props.name);
  const address = useState(props.address);
  const hourPrice = useState(props.hourPrice);
  const imageId = useState(props.imageId);


  return <>
    <div className="row box-establecimiento-hijo">
      <div className="col-3 py-2 borders">
        <img class="list-image"  id={imageId} height="230" width="230"></img>
      </div>
      <div className="col-9 py-2">
        <p className="box-establecimiento-details">Detalles del estacionamiento</p>
        <p><b>Nombre:</b> {name}</p>
        <p><b>Direccion:</b> {address}</p>
        <p><b>Precio por hora:</b> ${hourPrice}</p>
        <Link to={'/establecimiento/' + id[0]}>
          <button className="box-boton">Ver</button>
        </Link>
      </div>
    </div>
    <br></br>
  </>
}
