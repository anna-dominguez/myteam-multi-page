import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'

const Contact = () => {
  return (
    <div className="text-white  relative">
      <img
        className="absolute top-0 left-0 hidden sm:block translate-x-[-50%]"
        src={
          process.env.PUBLIC_URL + '/assets/bg-pattern-about-2-contact-1.svg'
        }
        alt="background pattern"
      />
      <div className="md:w-[80%] grid lg:grid-cols-2 mx-auto md:items-center">
        <Section1 />
        <Section2 />
      </div>
      <img
        className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] sm:translate-y-0"
        src={process.env.PUBLIC_URL + '/assets/bg-pattern-contact-2.svg'}
        alt="background pattern"
      />
    </div>
  )
}

export default Contact
