import React from 'react';

export const CreateUser = () => {
    return (
        <div className='Login'>
            <form className='Login-form'>
                <label htlmFor="name">
                    <input type="text" id="name" placeholder='Nombre' />
                </label>
                <label htlmFor="pass">
                    <input type="password" id="pass" placeholder='Contrasenia' />
                </label>
                <label htmlFor='submit'>
                    <input id="submit" type="submit" value='Crear' />
                </label>
            </form>
        </div>
    );
};
