import "bootstrap/dist/css/bootstrap.min.css";
import parkipaylogo from "./logoparkipay.png";
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';


function Header_useractive(){

  return<>
    <div className="col-2 text-center">
      <Link to="/ver_reservas" className="style-a">Mis reservaciones</Link>
    </div>
    <div className="col-2 text-center">
      <Link to="/perfil_de_usuario" className="style-a">
        <img className="foto-perfil" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp" height="25" width="25"></img>
        Perfil de usaurio
      </Link>
    </div>
  </>
}
function Header_usernoactive(){

  return<>
    <div className="col-2 text-center">
        <Link to="/login" className="style-a">Iniciar Sesión</Link>
    </div>
    <div className="col-2 text-center">
        <Link to="/signin" className="style-a">Registrarse</Link>
    </div>
  </>
}


function Header_user_admin(){

  return<>
    <div className="col-2 text-center">
        <Link to="/administrar_establecimientos" className="style-a">Establecimientos</Link>
    </div>
    <div className="col-2 text-center">
        <Link to="/perfil_de_usuario" className="style-a">
          <img className="foto-perfil" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp" height="25" width="25"></img>
          Perfil de usaurio
        </Link>
    </div>
  </>
}



export function Header({ user_active, user_dueño }){
    return <Header_style>
      
      <div className="header-app">
          <div className="text-center py-2">
            <Link to="/"><img className="header-img-app" src={parkipaylogo}></img></Link>
          </div>
      </div>

      <div className="nav-app">
        <div className="row-app">
            <div className="row py-2">
              <div className="col-8">
              </div>
              {user_dueño ? Header_user_admin() : user_active ? Header_useractive() : Header_usernoactive()
              //user_active? isadmin? Header_user_admin() : Header_useractive() : Header_usernoactive()
              }
            </div>
        </div>
      </div>

  </Header_style>
}

const Header_style = styled.div`

  
  .header{
    position: fixed;
    width: 100%;
  }
  .header-app{
      background-color: rgb(245, 245, 245);
      height: auto;
      width: 100%;
  }

  .header-img-app{
    height: 3vh;
  }

  .nav-app{
    background-color: rgb(031, 031, 031);
    height: auto;
    width: 100%;
  }

  .row-app{
    margin-right: 2vw;
    margin-left: 2vw;
  }
    
  .style-a{
      color: rgb(250, 252, 253);
      font-family: Herculanum, "Eras Light ITC", sans-serif;
      text-decoration: none;
  }
  input[type=search] {
      width: 20vw;
      border: 1px solid #555;
      padding: 3px;
      background-color: rgb(46, 46, 46);
      color: white;
      border-radius: 5px;
      font-size: 14px;
  }

  input[type=search]:focus {
    width: 20vw;
    border: 1px solid rgb(0, 0, 0);
    padding: 3px;
    font-size: 14px;
  }
  .foto-perfil{
    border-radius: 50px;
    margin-right: 15px;
  }

  p{
    color: white;
  }
  
`;
