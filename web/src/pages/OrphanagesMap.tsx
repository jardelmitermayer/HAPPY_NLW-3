import React from 'react';
import {Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';            //TileLayer é um servidor para que possa pegar as imagens do mapa
                                                           //Uma boa opção para uso do TileLayer é o Open Street Map

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p> Muitas crianças estão esperando a sua visita :) </p>
                </header>

                <footer>
                    <strong>Itabaiana</strong>
                    <span>Sergipe</span>
                </footer>
            </aside>

            <Map 
                center={[-10.6877122,-37.4361198]}              //latitude e longitude da cidade
                zoom={15}                                       //zoom do mapa    
                style={{ width: '100%', height: '100%' }}       // estilo do Mapa para que ele ocupe o maximo de espaco que ele conseguir.
            >   
              {/*  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />   */}
              <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>                                                                                      

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
             </Link>
        </div>
    );
}

export default OrphanagesMap;