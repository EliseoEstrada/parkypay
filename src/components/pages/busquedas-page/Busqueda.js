import "bootstrap/dist/css/bootstrap.min.css";
import {Lista_establecimientos} from '../lists/Lista_establecimientos.js';
import '../lists/lista_est.css'

export function Busqueda(){
    
    return <>

        <div className="text-center">
            <div className="box-establecimiento py-2">
                <h3>RESULTADOS DE BUSQUEDA</h3>
                <hr></hr>
                <Lista_establecimientos></Lista_establecimientos>
                <Lista_establecimientos></Lista_establecimientos>
                <Lista_establecimientos></Lista_establecimientos>
                <Lista_establecimientos></Lista_establecimientos>
                <Lista_establecimientos></Lista_establecimientos>

            </div>
        </div>
    </>
}
