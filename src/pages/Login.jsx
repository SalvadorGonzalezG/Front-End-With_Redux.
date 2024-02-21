import {useState, useEffect} from 'react'
import { PiUserCircleThin } from "react-icons/pi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData
  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
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