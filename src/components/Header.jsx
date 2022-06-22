import React from 'react';
import { useSelector } from 'react-redux';
import {active} from '../Slices/menuSlice';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const menu = useSelector(state => state.menu.value);
  const dispatch = useDispatch();

  const handleMenu = () => {
      dispatch(active());
  }

  const handleClose = () => {
    dispatch(active());
  }
  
  return (
    <div className='Header'>
      <h1 className='Header-gretting'>Bienvenido al Espacio</h1>
      {!menu 
        ?
          <img src='https://i.ibb.co/Q8TW0J6/icons8-men-32.png' alt="icono de menu" className="Header-menu-icon" onClick={handleMenu}/>
        :
            <>
              <span className='background-dark'></span>
              <nav className='Header-menu'>
                <img src="https://i.ibb.co/HCmN2MN/icons8-eliminar-50.png" alt="icono de cerrar" onClick={handleClose} className='Header-menu-close'/>
                  <a href='#' className='Header-menu-link'><img className="menu-icon-link" src='https://i.ibb.co/XYm7dCD/icons8-casa-24.png' alt='icono de casa'/>Inicio</a>
                  <a href='#' className='Header-menu-link'><img className="menu-icon-link" src='https://i.ibb.co/8j5fgSC/icons8-globo-terr-queo-24.png' alt='icono de mundo' />Explorar</a>    
                  <a href='#' className='Header-menu-link'><img className="menu-icon-link" src='https://i.ibb.co/pnvGndr/icons8-agregar-a-favoritos-24.png' alt='icono de favoritos'/>Favoritos</a>    
                  <a href='#' className='Header-menu-link'><img className="menu-icon-link" src='https://i.ibb.co/VqPK7nL/icons8-cuadrado-de-informaci-n-24.png' alt='icono de informacion'/>Acerca</a> 
              </nav>
            </>
      }
    </div>
  )
}
