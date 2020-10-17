import React from 'react';
import { FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom'; //pode ser utilizado no lugar do <a> e leva vantagem por não ter que recarregar o que já foi carregado(CSS,JavaScript) do zero.

//importando CSS
import '../styles/pages/landing.css'

//importando imagens
import logoImg from '../images/logo.svg';

function Landing(){
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças</p>

                </main>
                <div className="location">
                <strong>Itabaiana</strong>
                <span>Sergipe</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6 )" />
                </Link>
            </div>   
        </div>
    );
}

export default Landing;