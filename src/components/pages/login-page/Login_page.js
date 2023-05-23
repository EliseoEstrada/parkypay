import "bootstrap/dist/css/bootstrap.min.css";
import './login_page.css';
import {Form_login} from '../../forms/Form_login.js';

export function Login_page(){

    return <>
        <div className="box-section">
            <div className="box-right text-center py-5">
                <h3 className="py-2 h3-style">Inicia Sesion</h3>
                <div className="box-form text-center">
                    <Form_login></Form_login>
                </div>
            </div>
            <div className="box-left text-center">
                <div className="center-box-img">
                </div>
            </div>
        </div>
    </>
}
