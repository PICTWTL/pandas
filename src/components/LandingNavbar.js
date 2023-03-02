import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LandingNavbar = () => {
  const navigate = useNavigate();
  const redirectLogin = ()=>{
    navigate("/login")
  }
  return (
    <div className='navbarr'>
        <h1 className='heading'>Website</h1>
        <div className='menu-items'>
            <div>Why Us</div>
            <div>Pricing</div>
            <div>Contact</div>
        </div>
        <div>
            <button onClick={redirectLogin} className='w-button'>Log In</button>
        </div>
    </div>
  )
}
