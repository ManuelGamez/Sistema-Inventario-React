import React from 'react'
import PropTypes from 'prop-types'
import Cabecera from '../Home/Cabera';
import MenuLateral from '../Home/Menulateral';
import './StyloMenubodegas.css';
import Bodegas from '../../img/centro-de-distribucion.png';
import InformacionProducto from '../../img/sku.png';
import BuscarProducto from '../../img/rastreo.png';
import Calendario from '../../img/calendario.png';
import RporteInsumo from '../../img/lista-de-verificacion(1).png';
import Costos from '../../img/transferir.png';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
function HomeMenuBodegas(props) {
  return (
        <>
         <Cabecera/>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-2'>
                    <MenuLateral/>
                </div>
                <div className='col-sm-10'>
                <div class="card-header margentemacatalogo">
                    CATALOGO DE BODEGAS
                </div>
                    <Link to={`/MenuBodegas/${1}`} type="button" className="btn btn-sm btn-dark ImagenBodegasMenu position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            ACTUALIZAR <br/>INFORMACION<br/><br/>
                        </div>
                        <img src={InformacionProducto}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>

                    <Link to={`/MenuBodegas/${2}`} type="button" className="btn btn-sm btn-dark ImagenBodegasMenu position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            CONSULTAR <br/> INVENTARIO<br/><br/>
                        </div>
                        <img src={BuscarProducto}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>

                    <Link to={`/MenuBodegas/${3}`} type="button" className="btn btn-sm btn-dark ImagenBodegasMenu position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            INFORMACIÓN <br/> BODEGAS<br/><br/>
                        </div>
                        <img src={Bodegas}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>

                    <Link to={`/MenuBodegas/${4}`} type="button" className="btn btn-sm btn-dark ImagenBodegasMenu position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            REPORTE <br/> INSUMOS<br/><br/>
                        </div>
                        <img src={RporteInsumo}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>

                    <Link to={`/MenuBodegas/${4}`} type="button" className="btn btn-sm btn-dark ImagenBodegasMenu position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            REPORTE <br/> ENTRADA Y SALIDA
                        </div>
                        <img src={Calendario}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>
                    
                    <Link to={`/MenuBodegas/${4}`} type="button" className="btn btn-sm btn-dark ImagenBodegasMenu position-relative" title="ENVIOS">
                        <div className=" texto-centrado tipoletra2">
                            COSTO <br/>ENTRADA Y SALIDA
                        </div>
                        <img src={Costos}className="card-img-top  " title=" ENVIOS" alt="Imagen Envios"/>
                    </Link>
                </div>
            </div>

        </div>
        </>
  )
}

HomeMenuBodegas.propTypes = {}

export default HomeMenuBodegas
