import React from 'react'
import PropTypes from 'prop-types'
import Cabecera from './Cabera';
import Menulateral from './Menulateral';
import Menucentral from './Menucentral';
import Piedepagina from './Piedepagina';
import MenuDerecho from './MenuDerecho';
import './Stylohome.css';
function Inicio(props) {
  return (
   <>
   <Cabecera/>
           <div className='container'>
               <div className='row'>
                   <div className='col-sm-2 marginlateral'>
                    <Menulateral/>
                   </div>
                   <div className='col-sm-8'>
                    <Menucentral/>
                   </div>
                   <div className='col-sm-2'>
                    <MenuDerecho/>
                   </div>
               </div>
           </div>
        <Piedepagina/>
   </>
  )
}

Inicio.propTypes = {}

export default Inicio
