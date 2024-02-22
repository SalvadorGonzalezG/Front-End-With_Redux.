import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-toastify"
import ProductoForm from "../components/ProductoForm"
import Spinner from '../components/Spinner'
import { getProductos, reset } from "../features/productos/productoSlice"
import ProductoItem from '../components/ProductoItem'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { misproductos, isLoading, isError, isSuccess, message } = useSelector((state) => state.producto)


  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    } else {
      dispatch(getProductos())
    }

    return () => {
      dispatch(reset())
    }
    // al agregar user desaparece la section de abajo
  }, [user, navigate, isError, message, dispatch])
  if (isLoading) {
    <Spinner />
  }
  return (
    <>
      <section className='bienvenida'>
        <h1> Hola! {user && user.name} ✨</h1>
      </section>

      <ProductoForm />

      <section className="contenido">
        {misproductos.length > 0 ?
          (
            <div className="lista-productos">
              {misproductos.map((producto)=> (
                <ProductoItem key={producto._id} producto={producto} />
              ))}
            </div>
          ) :
          (
            <h2>No hay Productos</h2>
          )
        }

      </section>

    </>
  )
}

export default Dashboard