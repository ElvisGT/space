import React,{useState} from 'react';
import emailjs from 'emailjs-com';

export const Footer = () => {
    let defaultClass = 'Footer-form-submit-default';
    const [submitClass,SetSubmitClass] = useState(defaultClass);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        emailjs.sendForm(
            'service_rs5kcf9',
            'template_96xm1un',
            e.target,
            'ARo7r4ls_ag8-UkUa'
        )
        .then(response => {
            if(response.status === 200){
                SetSubmitClass('Footer-form-submit-success');
            }
            setTimeout(() => SetSubmitClass(defaultClass),3000);
        })
        e.target.reset();
    }

  return (
    <div className='Footer'>
        <p>Si deseas hacerme una consulta sobre programacion o deseas saludar
            no dudes en rellenar el siguiente formulario que respondere lo mas pronto posible. 
        </p>
        <form className='Footer-form' onSubmit={handleSubmit} >
            <label htmlFor='name'>Nombre
                <input type="text" id="name" required name = "name_ref"/>
            </label>
            <label htmlFor='email'>Email
                <input type='email' id="email" required name ="email_ref"/>
            </label>
            <label htmlFor='text'>Mensaje
                <textarea id="text" required name = "message_ref" />
            </label>
            
            <label htmlFor='submit'>
                <input type="submit" id="submit" value="Enviar" className={submitClass}/>
            </label>
        </form>
        <div>
            <div className='Footer-social_networks'>
                <a href="https://www.facebook.com/elvis.giltorres/"><img src='https://i.ibb.co/N37fLYQ/icons8-facebook-50.png' alt='icono de facebook'/></a>
                <a href="https://github.com/ElvisGT"><img src='https://i.ibb.co/Fbfdvz5/icons8-github-64.png' alt='icono de github'/></a>
                <a href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/"><img src='https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png' alt='icono de linkedin'/></a>
            </div>
            <p>@ Todos los derechos reservados</p>
        </div>

    </div>
  )
}
