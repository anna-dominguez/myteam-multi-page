import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()

  return (
    <>
      <nav className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start text-white font-semibold text-lg">
        <h2
          onClick={() => navigate('/')}
          className="cursor-pointer hover:text-lightCoral"
        >
          home
        </h2>
        <h2
          onClick={() => navigate('/about')}
          className="cursor-pointer hover:text-lightCoral"
        >
          about
        </h2>
      </nav>
      <button
        onClick={() => navigate('/contact')}
        className="text-white text-lg font-semibold hover:bg-white hover:text-darkGreen py-2.5 px-8 border-2 border-white rounded-[24px]"
      >
        contact us
      </button>
    </>
  )
}

export default Nav
