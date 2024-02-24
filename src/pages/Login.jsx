import {useState, useEffect} from 'react'
import { PiUserCircleThin } from "react-icons/pi";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice' // mandamos llamar a la funcion reducer del slice register()
import Spinner from '../components/Spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isError, isSuccess, isLoading, message } = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess){
      navigate('/')
      toast.success('✨Haz iniciado sesión✨',{position: 'bottom-right'})
    }
    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email, password
    }
    dispatch(login(userData))
  }

  return (
    <>
    <section className='register'>
      <h1 className="img-login"><PiUserCircleThin/> </h1>
      <p></p>
    </section>

    <section className='section-container'>
      <div className="form-container">
      <div className="blue-box"></div>
      <form className='form' onSubmit={onSubmit}>
        <div>
          <input
          className='input-field'
           type="email" 
           name="email" 
           id="email"
           value={email}
           placeholder="example@mail.com"
           onChange={onChange}
           />
          <input
          className='input-field'
           type="password"
           name="password"
           id="password"
           value={password}
           placeholder="Coloca tu password"
           onChange={onChange}
          />
        </div>
        <div className='flex-container'>
          <button type='submit' className='submit-button'>
            Login
          </button>
        </div>
      </form>
      </div>
    </section>
    </>
    
  )
}

export default Login