import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {crearProducto} from '../features/productos/productoSlice'
import { toast } from 'react-toastify'

const ProductoForm = () => {
    const [producto, setProducto] = useState('')
    const [ descripcion, setDescripcion] = useState('')
    const [ precio, setPrecio ] = useState('')

    const dispatch = useDispatch()
    const onSubmit= (e) => {
        e.preventDefault()
        dispatch(crearProducto({producto, descripcion, precio}))
        setProducto('')
        setPrecio('')
        setDescripcion('')
        toast.success('El producto a sido creado correctamente')
        
    }
  return (
    <section className='section-container'>
        <div className="form-container">
        <div className="blue-box"></div>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="producto">Producto:</label>
                <input
                 className='input-field'
                 type="text"
                 name='producto' 
                 id='producto' 
                 value={producto} 
                 onChange={(e)=>setProducto(e.target.value)}/>
                 <label htmlFor="precio">Precio:</label>
                  <input
                   className='input-field'
                   type="text"
                   name='precio' 
                   id='precio' 
                   value={precio} 
                   onChange={(e)=> setPrecio(e.target.value)} />
                 <label htmlFor="descripcion">Descripcion:</label>
                 <textarea
                  className='input-field'
                  name='descripcion' 
                  id='descripcion' 
                  value={descripcion}
                  onChange={(e)=>setDescripcion(e.target.value)}
                  rows={3}
                  cols={45}
                  />
            </div>
            <div className="flex-container">
                <button className='submit-button' type='submit'>publicar producto</button>
            </div>
        </form>
        </div>
    </section>
  )
}

export default ProductoForm