import { useDispatch } from "react-redux"
import { deleteProducto } from '../features/productos/productoSlice';
import { toast } from "react-toastify";

const ProductoItem = ({producto}) => {
    const dispatch = useDispatch()
  return (
    <div className="producto">
        
        <h2>{producto.producto}</h2>
        <h2>{producto.precio}</h2>
        <h3>{producto.descripcion}</h3>
        <button className="close" onClick={()=> dispatch(deleteProducto(producto._id, toast.success('Producto Eliminado')))}></button>
        <h2>
            {new Date(producto.createdAt).toLocaleString('es-MX')}
        </h2>
    </div>
  )
}

export default ProductoItem