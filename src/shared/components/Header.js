import React, { useState } from 'react'
import Nav from './Nav'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="px-6 sm:px-10 py-12 md:px-0 md:w-[80%] md:mx-auto sm:py-16 flex justify-between sm:justify-normal items-center z-50">
      <img
        src={process.env.PUBLIC_URL + '/assets/logo.svg'}
        alt="myteam logo"
      />
      <div className="hidden sm:flex items-center ml-12 w-full justify-between">
        <Nav />
      </div>
      <div
        onClick={() => setOpenMenu(true)}
        className="sm:hidden cursor-pointer"
      >
        <img
          src={process.env.PUBLIC_URL + '/assets/icon-hamburger.svg'}
          alt="myteam logo"
        />
      </div>
      {openMenu && (
        <div className="fixed bg-black/50 w-screen h-screen top-0 left-0 z-50">
          <div className="absolute right-0 top-0 h-screen w-[70%] bg-policeBlue py-14 pl-12 pr-6 flex flex-col gap-10">
            <div
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer self-end"
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/icon-close.svg'}
                alt="myteam logo"
              />
            </div>
            <Nav />
          </div>
          <img
            className="absolute bottom-0 right-0 translate-x-[50%]"
            src={
              process.env.PUBLIC_URL +
              '/assets/bg-pattern-about-1-mobile-nav-1.svg'
            }
            alt="background pattern"
          />
        </div>
      )}
    </header>
  )
}

export default Header
