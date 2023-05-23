import '../pages/login-page/login_page.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ajaxLogin from '../../funciones/Login_Usuario.js';

export function Form_login(){
    
    return <>
            <label>Correo electrónico</label><br></br>
            <input name="correo" type="email" placeholder="exaple@gmail.com" required></input><br></br>
            <label>Contraseña</label><br></br>
            <input id="contraseña"type="password" placeholder="Contraseña" required></input><br></br><br></br>
            <button onClick={ajaxLogin} className="box-boton">Aceptar</button><br></br>
    </>
}