import React from 'react'
import { useNavigate } from 'react-router-dom'

const ViewCart = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/Greeting")
    }
  return (
    <div>
      <button className='bg-green-800 text-white w-52 h-7' onClick={handleClick}>View Product</button>
    </div>
  )
}

export default ViewCart
