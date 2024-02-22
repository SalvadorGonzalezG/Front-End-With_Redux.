import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { PiUserPlus } from "react-icons/pi";
import { LiaUser } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom' // Nos permintira hacer links
import { BsCart4 } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice';
import {toast} from 'react-toastify'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state)=> state.auth)

    const onLogout = () => {
        dispatch(reset())
        dispatch(logout())
        //navigate('/login')
        toast.info('Tu sesión fue cerrada correctamente',{position: 'top-center'})

    }
  return (
    
    <header className="header">
        <div className="logo">
            <button className='boton'>
            <Link className='productos' to='/'><BsCart4/>Productos</Link>
            </button>
            
            <ul>
            {user ? (
            <>
            <button className='boton-li' onClick={onLogout}>logout</button>
            </>
            ):(
            <>
            <li className='boton-li'> 
                     <Link to='/login'>
                                <LiaUser/>Login
                            </Link>
                </li>
                <li className='boton-li'>
                    <Link to='/register'>
                        <PiUserPlus/> Register
                    </Link>
                </li>
            </>
            )}
                
            </ul>
        </div>
    </header>
  )
}

export default Header