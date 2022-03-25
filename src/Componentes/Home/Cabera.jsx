import React from 'react'
import PropTypes from 'prop-types'
import './Stylohome.css';
function Cabera(props) {
  return (
    <>
    <nav class="navbar navbar-expand-md colorbarrasuperior">
        <a class="navbar-brand botonnavegador" href="#">INVENTARIO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-light stilobotonbarrasuperior  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            PROYECTOS
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                <div class="btn-group">
                        <button type="button" class="btn btn-outline-light stilobotonbarrasuperior  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            UNIDADES
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                <div class="btn-group">
                        <button type="button" class="btn btn-outline-light stilobotonbarrasuperior  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            BODEGAS
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

Cabera.propTypes = {}

export default Cabera
