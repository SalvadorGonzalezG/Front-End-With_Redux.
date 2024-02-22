import { useState, useEffect } from 'react'
import { PiUserCirclePlusThin } from "react-icons/pi";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice' // mandamos llamar a la funcion reducer del slice register()
import Spinner from '../components/Spinner';

const Register = () => {
// Estado donde tendremos los datos del formularios y su set con lo que podremos modificar el estado.
    const [ formData, setFormData ] = useState({
        name: '', email: '', password: '',
        password2: '' // verifica que password y password2 son iguales.
     })
// desestructuramos los datos del formulario es decir el state.
     const { name, email, password, password2 } = formData
// inicializamos a navigate y a dispatch
// redirige nuestra pagina cuando hayamos hecho login
     const navigate = useNavigate()
// al hacer clic al boton submit mandemos a llamar a la funcion register
     const dispatch = useDispatch()
// desestructuramos los datos del estado global.
     const { user, isLoading, isError, isSuccess, message } = useSelector((state)=> state.auth)

     useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess){
            navigate('/login')
            toast.success('✨Usuario Creado 🤘😎',{position: 'bottom-right'})
        }
        dispatch(reset())
     },[user, isError, isSuccess, message, navigate, dispatch])
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
        if(password !== password2) {
            toast.error('Corrige tu contraseña')
        }else{
// si las contraseñas coinciden creara un objeto llamado userData y se lo va a despachar a la funcion register del slice.
            const userData = {
                name, email, password
            }
            dispatch(register(userData))
        }
     }
     /*if(isLoading){
        return <Spinner/>
     }*/
  return (
    <>
    <section className='register'>
        <h1 className="img-login"><PiUserCirclePlusThin/></h1>
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