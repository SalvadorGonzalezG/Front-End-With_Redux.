import axios from "axios";

//const API_URL = 'http://localhost:5000/api/productos/'
const API_URL = 'https://fair-girdle-fish.cyclic.app/api/productos/'

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
// Borrar Producto
const deleteProducto = async(idproducto, token) =>{
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + idproducto, config)
    return response.data
}


const productoService ={
    crearProducto,
    getProductos,
    deleteProducto
}
export default productoService