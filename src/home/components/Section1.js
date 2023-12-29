import React from 'react'

const Section1 = () => {
  return (
    <section className="relative">
      <img
        className="hidden lg:flex absolute translate-x-[-50%]"
        src={process.env.PUBLIC_URL + '/assets/bg-pattern-home-1.svg'}
        alt="background pattern"
      />
      <div
        className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start gap-2.5 sm:gap-6 lg:gap-[50px]
                  justify-center px-6 md:w-[80%] md:mx-auto md:px-0"
      >
        <h1
          className="text-[40px] sm:text-[64px] lg:text-start lg:text-[100px]
                leading-10 sm:leading-[56px] lg:leading-[100px] font-bold"
        >
          Find the
          <br /> best <span className="text-lightCoral">talent</span>
        </h1>
        <div className="flex flex-col lg:justify-between lg:h-full gap-[80px]">
          <div className="hidden lg:flex w-[50px] h-1 bg-raptureBlue"></div>
          <p
            className="text-[15px] lg:text-[18px] lg:text-start font-semibold
                     leading-[28px] sm:w-[60%] lg:w-[100%] mx-auto mb-24"
          >
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
          <img
            className="w-[98%] sm:w-fit bottom-0 mx-auto"
            src={process.env.PUBLIC_URL + '/assets/bg-pattern-home-2.svg'}
            alt="background pattern"
          />
        </div>
      </div>
    </section>
  )
}

export default Section1
