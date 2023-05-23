import getCookie from '../../../funciones/GetCookie.js';
import React, { useState } from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import './perfil_page.css';
import Modal from './Modal.js';
import { Form_editarperfil } from '../../forms/Form_editarperfil.js';
import ajaxBajaUsuario from '../../../funciones/Baja_Usuario.js';
import {
    Link
  } from "react-router-dom";
  
function cerrarSesion(){
    var a = new Date();
        a = new Date(a.getTime() - 60);
    document.cookie = "nombre=a; expires=" +a.toGMTString()+";";
    document.cookie = "correo=a; expires=" +a.toGMTString()+";";
    document.cookie = "usuario=a; expires=" +a.toGMTString()+";";
    document.cookie = "telefono=a; expires=" +a.toGMTString()+";";
    document.cookie = "id=a; expires=" +a.toGMTString()+";";
    document.cookie = "dueño=a; expires=" +a.toGMTString()+";";
    alert("Sesion cerrada correctamente");
    //window.location.href = "https://phantom00u.github.io/";
} 
  
export function Perfil_page(){

    const [estadoModal1, cambiarestadoModal1] = useState(false);

    return <>
    
        <div className="box-section-perfil">
            <div className="box-opciones">
                    <div className="box-opciones-hijo">
                        <p id="title-opciones">OPCIONES</p>
                        <p>Mi cuenta</p>
                        <Link to="/ver_reservas"><p  className="styled-p">Ver reservaciones</p></Link>
                        <Link onClick={cerrarSesion}><p>Cerrar sesión</p></Link>
                    </div>
            </div>
            <div className="box-informacion-perfil">
                <div className="box-informacion-perfil-hijo">
                    <p id="title-miperfil">MI CUENTA</p>
                        <div className="box-columns">
                            <div className="box-perfil-multimedia text-center">
                                <img className="img-foto" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp" height="170" width="170"></img>
                                <p className="p-username">{getCookie("usuario")}</p>
                                <Modal 
                                    estado={estadoModal1}
                                    cambiarestado={cambiarestadoModal1}>
                                    <Form_editarperfil></Form_editarperfil>
                                </Modal>
                                <Boton onClick={() => cambiarestadoModal1(!estadoModal1)}>Editar perfil</Boton> <br></br>
                                <Boton onClick={ajaxBajaUsuario}>Borrar cuenta</Boton>
                            </div>
                            <div className="box-perfil-textos">
                                <p className="p-bold">Nombre</p>
                                    <p className="p-normal">{getCookie("nombre")}</p>
                                <p className="p-bold">Nombre de usuario</p>
                                    <p className="p-normal">{getCookie("usuario")}</p>
                                <p className="p-bold">Correo</p>
                                    <p className="p-normal">{getCookie("correo")}</p>
                                <p className="p-bold">Teléfono</p>
                                    <p className="p-normal">{getCookie("telefono")}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
}

const Boton = styled.div`

    width: 100%;
    background-color: rgb(201, 36, 36);
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    border-color: transparent;
    color: rgb(236, 242, 247);
    font-family: Herculanum, "Eras Light ITC", sans-serif;

    &:hover{
        background-color: rgb(168, 30, 30);
    }
    .styled{
        
        text-decoration: none;
    }
`;