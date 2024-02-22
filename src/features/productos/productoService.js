import axios from "axios";

const API_URL = 'http://localhost:5000/api/productos/'

//f: crear un producto
const crearProducto = async(productoData, token) =>{
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, productoData, config)
    return response.data
}
// obtener la lista de productos del usuario:
const getProductos = async(token) =>{
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const productoService ={
    crearProducto,
    getProductos

    
}
export default productoService