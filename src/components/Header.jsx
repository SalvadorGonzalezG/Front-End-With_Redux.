import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { PiUserPlus } from "react-icons/pi";
import { LiaUser } from "react-icons/lia";
import { Link } from 'react-router-dom' // Nos permintira hacer links
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    
    <header className="header">
        <div className="logo">
            <button className='boton'>
            <Link className='productos' to='/'><BsCart4/>Productos</Link>
            </button>
            
            
            <ul>
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
            </ul>
        </div>
    </header>
  )
}

export default Header