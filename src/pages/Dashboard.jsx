import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { toast } from "react-toastify"
const Dashboard = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
      
    }
    },[navigate])

  return (
    <div mx-auto max-w-7xl px-4 sm:px-6 lg:px-8>

    </div>
  )
}

export default Dashboard