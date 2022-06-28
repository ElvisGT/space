import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className='Login'>
            <form className='Login-form'>
                <label htlmFor="nameLogin">
                    <input type="text" id="nameLogin" placeholder='Nombre'/>
                </label>
                 <label htlmFor="passLogin">
                    <input type="password" id="passLogin" placeholder='Contrasenia'/>
                </label>
                <label htmlFor='submitLogin'>
                    <input id="submitLogin" type="submit" value='Entrar'/>
                </label>
            </form>
            <Link to='/create'>Crear nuevo usario</Link>
        </div>
    );
};
