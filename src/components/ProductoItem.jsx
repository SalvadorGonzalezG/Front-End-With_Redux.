import { useDispatch } from "react-redux"
import { deleteProducto } from '../features/productos/productoSlice';

const ProductoItem = ({producto}) => {
    const dispatch = useDispatch()
  return (
    <div>
        
        <h2>{producto.producto}</h2>
        <h2>{producto.precio}</h2>
        <h3>{producto.descripcion}</h3>
        <button className="" onClick={()=> dispatch(deleteProducto(producto._id))}>X</button>
        <h2>
            {new Date(producto.createdAt).toLocaleString('es-MX')}
        </h2>
    </div>
  )
}

export default ProductoItem