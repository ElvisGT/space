import React, { useRef } from 'react';
import { createUser } from '../utils/createUser';

export const CreateUser = () => {
    const nameRef = useRef();
    const passRef = useRef();

    const handleCreate = (event) => {
        event.preventDefault();
        createUser(nameRef, passRef);
            
    };

    return (
        <div className='Login'>
            <form className='Login-form' onSubmit={handleCreate}>
                <label htmlFor="nameCreate">
                    <input type="text" id="nameCreate" placeholder='Nombre' ref={nameRef}/>
                </label>
                <label htmlFor="passCreate">
                    <input type="password" id="passCreate" placeholder='Contrasenia' ref={passRef}/>
                </label>
                <label htmlFor='submitCreate'>
                    <input id="submitCreate" type="submit" value='Crear' />
                </label>
            </form>
        </div>
    );
};
