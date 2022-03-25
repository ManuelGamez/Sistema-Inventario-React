import React from 'react'
import PropTypes from 'prop-types'
import Cabecera from '../Home/Cabera';
import MenuLateral from '../Home/Menulateral';
import './StyloBodegas.css';
import Bodegas from '../../img/warehouse.png';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
function HomeBodegas(props) {
  return (
      <>
       <Cabecera/>
       <div className='container'>
            <div className='row'>
                <div className='col-sm-2'>
                    <MenuLateral/>
                </div>
                <div className='col-sm-10 margenbodegas'>
            
                <div class="card-header margentemacatalogo">
                    CATALOGO DE BODEGAS
                </div>
                    <Link to={`/MenuBodegas/${1}`} type="button" className="btn btn-sm btn-dark ImagenBodegas position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            BODEGAS<br/> BFA
                        </div>
                        <img src={Bodegas}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>

                    <Link to={`/MenuBodegas/${2}`} type="button" className="btn btn-sm btn-dark ImagenBodegas position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            BODEGA<br/> CRE
                        </div>
                        <img src={Bodegas}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>

                    <Link to={`/MenuBodegas/${3}`} type="button" className="btn btn-sm btn-dark ImagenBodegas position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            BODEGA <br/>FAO
                        </div>
                        <img src={Bodegas}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>

                    <Link to={`/MenuBodegas/${4}`} type="button" className="btn btn-sm btn-dark ImagenBodegas position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            BODEGA UNDSS
                        </div>
                        <img src={Bodegas}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>


                </div>
            </div>
       </div>
      </>
     
  )
}

HomeBodegas.propTypes = {}

export default HomeBodegas
