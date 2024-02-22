// documento donde estaran todas las promesas
import axios from 'axios'

// direccion de nuestra API
const API_URL = 'http://localhost:5000/api/users/'

// f: login de usuario.
const login = async(userData)=>{
    const response = await axios.post(API_URL+'login', userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
// funcion para registrar un usuario
const register= async(userData) =>{
    const response = await axios.post(API_URL, userData)
    return response.data
}
// f: logout para cerrar la sesión del usuario
const logout = async()=>{
    localStorage.removeItem('user')

}

const authService = {
    register,
    login,
    logout
}

export default authService