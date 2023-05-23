import "bootstrap/dist/css/bootstrap.min.css";
import "../register-page/registro_page.css";
import { Form_register } from '../../forms/Form_register.js';
//import axios from "axios"
//import { useEffect } from "react";

export function Registro_page(){
   /* const[posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res =  await axios.get("/");
            console.log(res)
        }
    },[])*/
    return <>
         <div className="box-section">
            <div className="box-right text-center py-3">
                <h3 className="py-2 h3-style-r">Registro de Usuarios</h3>
                <div className="box-form text-center">
                    <Form_register></Form_register>
                </div>
            </div>
            <div className="box-left text-center">
                <div className="center-box-img">
                </div>
            </div>
        </div>
    </>
}
