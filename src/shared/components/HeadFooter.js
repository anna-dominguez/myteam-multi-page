import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeadFooter = () => {
  const navigate = useNavigate()

  return (
    <section className="relative bg-lightCoral overflow-hidden">
      <img
        className="absolute bottom-0 left-0 translate-y-[10%]"
        src={process.env.PUBLIC_URL + '/assets/bg-pattern-home-6-about-5.svg'}
        alt="background pattern"
      />
      <div className=" py-[83px] w-[70%] flex flex-col md:flex-row md:justify-between mx-auto gap-6 items-center">
        <h2 className="text-center text-sacramentoStateGreen font-bold text-[32px] lg:text-[48px]">
          Ready to get started?
        </h2>
        <button
          onClick={() => navigate('/contact')}
          className="text-sacramentoStateGreen text-lg font-semibold hover:bg-sacramentoStateGreen
          hover:text-white py-2.5 px-8 border-2 border-sacramentoStateGreen rounded-[24px]"
        >
          contact us
        </button>
      </div>
    </section>
  )
}

export default HeadFooter
