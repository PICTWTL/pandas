import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import '../styles/landingNavbar.scss'
import { Navigate, useNavigate } from 'react-router-dom';
export const Landing = () => {
  let navigate = useNavigate();

  const handleClick = ()=>{
      navigate('/signup')
  }
  return (
    <div>
    <LandingNavbar />
    <section className='hero-with-image'>
        <div className='container-2'>
            <div className='hero-wrapper-two'>
                <h1 className='heading-2'>
                    Lets give your brand a
                    <span className='big-h1'>headstart</span>
                </h1>
                <button onClick={handleClick} className='button-primary w-button'>Get Started</button>
            </div>
        </div>
    </section>
    </div>
  )
}
