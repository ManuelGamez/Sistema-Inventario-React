import React from 'react'
import PropTypes from 'prop-types'
import buscararticulos from '../../img/buscar.png';
import waybill from '../../img/formulario-de-contacto.png';
import Unidadoperativa from '../../img/afiliado.png';
import bodegas from '../../img/almacen2.png';
import Proyectos from '../../img/formacion.png';
import ProyectoPersonal from '../../img/envio-al-mundo-entero.png';
import DocumentLTI from '../../img/calendario-de-escritorio.png';
import BuscarProducto from '../../img/rastreo.png';
import WaybillRecepcion from '../../img/blogging.png';
import './Stylohome.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
function Menucentral(props) {
  return (
    <>
    <div className='row'>
      
      <div className='col-sm-12 margintabla separadormenusuperior'>
        <div className='row'>

        <ul class="nav">
          <li class="nav-item">
          <button type="button" class="btn colorbotones margenentreboton btn-sm">
              LTI VENCIDOS <span class="badge badge-light">9</span>
              <span class="sr-only">unread messages</span>
            </button>
          </li>
          <li class="nav-item">
          <button type="button" class="btn colorbotones margenentreboton btn-sm">
              LTI VENCIDOS <span class="badge badge-light">9</span>
              <span class="sr-only">unread messages</span>
            </button>
          </li>
          <li class="nav-item">
          <button type="button" class="btn colorbotones margenentreboton btn-sm">
              LTI HISTORIAL <span class="badge badge-light">9</span>
              <span class="sr-only">unread messages</span>
            </button>
          </li>
          <li class="nav-item">
          <button type="button" class="btn colorbotones margenentreboton  btn-sm">
              LTI FUERA DE TIEMPO <span class="badge badge-light">9</span>
              <span class="sr-only">unread messages</span>
            </button>
          </li>
          <li class="nav-item">
          <button type="button" class="btn colorbotones margenentreboton btn-sm">
              ARTICULOS VENCIDOS <span class="badge badge-light">9</span>
              <span class="sr-only">unread messages</span>
            </button>
          </li>
        </ul>
        </div>
      </div>
      
      <div className='col-sm-12'>
      <div class="card-header margentemacatalogo">
                    MENÚ DE OPCIONES
                </div>
            <NavLink to="./CatalogoBodegas"type="button" className="btn btn-sm btn-dark botonmenuderecha position-relative" title="ENVIOS">
                    <div className=" texto-centrado tipoletra2">
                        BUSCAR <br/>ARTICULO
                    </div>
                    <img src={BuscarProducto}className="card-img-top  imagenbotonderecha" title=" ENVIOS" alt="Imagen Envios"/>
            </NavLink>

            <button type="button" className="btn btn-sm btn-dark botonmenuderecha position-relative" title="ENVIOS">
                    <div className=" texto-centrado tipoletra2">
                        PROYECTO <br/>PROPIO
                    </div>
                    <img src={ProyectoPersonal}className="card-img-top  imagenbotonderecha" title=" ENVIOS" alt="Imagen Envios"/>
            </button>
            <button type="button" className="btn btn-sm btn-dark botonmenuderecha position-relative" title="ENVIOS">
                    <div className=" texto-centrado tipoletra2">
                        CATALOGO <br/>BODEGAS
                    </div>
                    <img src={bodegas}className="card-img-top  imagenbotonderecha" title=" ENVIOS" alt="Imagen Envios"/>
            </button>
            <button type="button" className="btn btn-sm btn-dark botonmenuderecha position-relative" title="ENVIOS">
                    <div className=" texto-centrado tipoletra2">
                        PROYECTOS <br/><br/>
                    </div>
                    <img src={Proyectos}className="card-img-top  imagenbotonderecha" title=" ENVIOS" alt="Imagen Envios"/>
            </button>
            <button type="button" className="btn btn-sm btn-dark botonmenuderecha position-relative" title="ENVIOS">
                    <div className=" texto-centrado tipoletra2">
                        UNIDADES <br/><br/>
                    </div>
                    <img src={Unidadoperativa}className="card-img-top  imagenbotonderecha" title=" ENVIOS" alt="Imagen Envios"/>
            </button>
            <button type="button" className="btn btn-sm btn-dark botonmenuderecha position-relative" title="ENVIOS">
                    <div className=" texto-centrado tipoletra2">
                        HISTORIAL <br/> LTI
                    </div>
                    <img src={DocumentLTI}className="card-img-top  imagenbotonderecha" title=" ENVIOS" alt="Imagen Envios"/>
            </button>

            <button type="button" className="btn btn-sm btn-dark botonmenuderecha position-relative" title="ENVIOS">
                    <div className=" texto-centrado tipoletra2">
                        WAYBILL <br/> RECEPCIÓN
                    </div>
                    <img src={WaybillRecepcion}className="card-img-top  imagenbotonderecha" title=" ENVIOS" alt="Imagen Envios"/>
            </button>

           
            
      </div>

    </div>
    </>
  )
}

Menucentral.propTypes = {}

export default Menucentral
