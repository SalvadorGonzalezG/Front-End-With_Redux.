import { useState, useEffect } from 'react'
import { PiUserPlus } from "react-icons/pi";

const Register = () => {
    const [ formData, setFormData ] = useState({
        name: '', email: '', password: '',
        passwor2: '' // verifica que password y password2 son iguales.
     })
     const { name, email, password, passwor2 } = formData
  return (
    <section className='register'>
        <h1><PiUserPlus/></h1>
    </section>
  )
}

export default Register