import { useState, useEffect } from 'react'
import { PiUserCirclePlusLight } from "react-icons/pi";

const Register = () => {
// Estado donde tendremos los datos del formularios y su set con lo que podremos modificar el estado.
    const [ formData, setFormData ] = useState({
        name: '', email: '', password: '',
        password2: '' // verifica que password y password2 son iguales.
     })
// desestructuramos los datos del formulario es decir el state.
     const { name, email, password, password2 } = formData
// recibe un evento y lo que va a hacer es ejecutar el seter  
     const onChange = (e) => {
// f: que toma el estado previo hace una copia le agrego cualquier cosa y obtenemos un nuevo estado.
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
     }
     const onSubmit = (e) => {
        e.preventDefault()
     }
  return (
    <>
    <section className='register'>
        <h1 className="img-login"><PiUserCirclePlusLight/></h1>
    </section>

    <section className='section-container'>
    <div className="form-container">
    <div className="blue-box"></div>
        <form className='form' onSubmit={onSubmit}>
            <div>
                <input
                 className='input-field'
                 type="text" 
                 name="name" 
                 id="name"
                 value={name}
                 placeholder='Coloca tu nombre.'
                 onChange={onChange}
                />
                <input 
                 className='input-field'
                 type="email"
                 name='email'
                 id='email'
                 value={email}
                 placeholder='Coloca tu @mail'
                 onChange={onChange}
                />
                <input
                 className='input-field'
                 type="password"
                 name='password'
                 id='password'
                 value={password}
                 placeholder='Crea tu contraseña'
                 onChange={onChange}
                />
                <input
                 className='input-field'
                 type="password"
                 name='password2'
                 id='password2'
                 value={password2}
                 placeholder='Ingresa nuevamente tu contraseña'
                 onChange={onChange}                 
                />
            </div>
            <div className="flex-container">
                <button type='submit' className='submit-button'>
                    Enviar Datos
                </button>
            </div>
            
        </form>
    </div>
    </section>
    </>
  )
}

export default Register