import './main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Lista_establecimientos } from '../lists/Lista_establecimientos.js'
import { useEffect, useState } from 'react';
import {storageRef} from '../../../firebase.js';

function getImage(id){
  storageRef.child('images/'+ id).getDownloadURL()
      .then((url) => {
        var img = document.getElementById(id + ",function () { [native code] }");
        img.setAttribute('src', url);
      })
}

export function Main() {

  const [gotInfo, setGotInfo] = useState(false);
  const [establecimientosArray, setEstablecimientosArray] = useState([]);

  useEffect(() => {
    async function getEstablecimientos() {
      if (!gotInfo) {

        const response = await fetch(`https://parkipay2.herokuapp.com/api/establecimientos/`);
        const respJson = await response.json();
        setEstablecimientosArray(respJson)
        setGotInfo(true);
      }

    }

    getEstablecimientos();
  }, []);



  return <>
    <div className="box-img">
      <div className="box-hijo" >
        <p id="title" className="p-style">PARKIPAY</p>
        <p className="text p-style">Busca un lugar para estacionarte, reserva y paga más fácil y rápido. </p>
        <p className="text p-style">¡Mira las opiniones de otros usuarios!ff</p>
      </div>
    </div>
    <div className="text-center">
      <div className="box-establecimiento py-2">
        <h3><b>NUESTROS ESTACIONAMIENTOS</b></h3>
        <hr></hr>
        {establecimientosArray.map((establecimeinto, index) =>
          <Lista_establecimientos
            key={index}
            id={establecimeinto._id}
            name={establecimeinto.name}
            address={establecimeinto.address}
            hourPrice={establecimeinto.hourPrice}
            imageId={establecimeinto.logo}
          ></Lista_establecimientos>
        )}
        {
        establecimientosArray.forEach(element => {
          getImage(element.logo);
        })}
      </div>
    </div>
  </>
}
