import React from 'react'

const Section1 = () => {
  return (
    <section className="relative text-center overflow-hidden">
      <img
        className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] sm:translate-y-0"
        src={
          process.env.PUBLIC_URL + '/assets/bg-pattern-about-1-mobile-nav-1.svg'
        }
        alt="background pattern"
      />
      <div
        className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start gap-2.5 sm:gap-6 lg:gap-[50px]
                  justify-center px-6 md:w-[80%] md:mx-auto md:px-0"
      >
        <h2
          className="text-[40px] sm:text-[64px] lg:text-start
                leading-10 sm:leading-[56px] lg:leading-[100px] font-bold"
        >
          About
        </h2>
        <div className="flex flex-col lg:justify-between lg:h-full gap-[80px]">
          <div className="hidden lg:flex w-[50px] h-1 bg-lightCoral"></div>
          <p
            className="text-[15px] lg:text-[18px] lg:text-start font-semibold
                     leading-[28px] sm:w-[60%] lg:w-[100%] mx-auto mb-24 md:mb-36"
          >
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section1
