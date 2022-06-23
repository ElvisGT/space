import React from 'react';
import { useSelector } from 'react-redux';
import {active} from '../Slices/menuSlice';
import { useDispatch } from 'react-redux';


const links_menu = [
  {
      id:1,
      name:"Inicio",
      path:"#",
      src_img:"https://i.ibb.co/XYm7dCD/icons8-casa-24.png",
      alt_img:"icono de casa",

  },
  {
      id:2,
      name:"Explorar",
      path:"#",
      src_img:"https://i.ibb.co/8j5fgSC/icons8-globo-terr-queo-24.png",
      alt_img:"icono de globo terraqueo",

  },
  {
      id:3,
      name:"Favoritos",
      path:"#",
      src_img:"https://i.ibb.co/pnvGndr/icons8-agregar-a-favoritos-24.png",
      alt_img:"icono de favoritos",

  },
  {
    id:4,
    name:"Acerca",
    path:"#",
    src_img:"https://i.ibb.co/VqPK7nL/icons8-cuadrado-de-informaci-n-24.png",
    alt_img:"icono de informacion",

},

];

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
              <span className='background-dark' onClick={handleMenu}></span>
              <nav className='Header-menu'>
                <img src="https://i.ibb.co/HCmN2MN/icons8-eliminar-50.png" alt="icono de cerrar" onClick={handleClose} className='Header-menu-close'/>
                  {
                    links_menu.map(item => (
                      <a key={item.id} href={item.path} className='Header-menu-link'>
                        <img className="menu-icon-link" src={item.src_img} alt={item.alt_img}/>
                        {item.name}
                      </a> 
                    ))
                  }
                </nav>
            </>
      }
    </div>
  )
}
