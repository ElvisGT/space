import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className='Login'>
            <form className='Login-form'>
                <label htlmFor="name">
                    <input type="text" id="name" placeholder='Nombre'/>
                </label>
                 <label htlmFor="pass">
                    <input type="password" id="pass" placeholder='Contrasenia'/>
                </label>
                <label htmlFor='submit'>
                    <input id="submit" type="submit" value='Entrar'/>
                </label>
            </form>
            <Link to='/create'>Crear nuevo usario</Link>
        </div>
    );
};
