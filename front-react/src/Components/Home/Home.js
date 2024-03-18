import React from 'react';
import "./Home.scss";
import User from '../User/User';

const Home = () => {



    return (
        <div className="boddys">
            <div className="user">
                <User />
            </div>
            <div className="Titulo">
                <p>¿Quién está viendo ahora?</p>
            </div>
           
            <button className="icon-botton add-botton ">
                <div class="add-icon"></div>
                <div class="botton-txt">Agregar perfil  </div>
            </button>

            

            <button className="btn">Administrar perfiles</button>
        </div>
    );
};



export default Home;