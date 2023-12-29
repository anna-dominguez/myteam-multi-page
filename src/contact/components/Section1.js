import React from 'react'

const Section1 = () => {
  return (
    <section className="relative px-6 pb-14 sm:pb-16 lg:pb-[128px]">
      <div className="text-center lg:text-start flex flex-col sm:w-[515px] sm:mx-auto">
        <h3 className="text-[40px] sm:text-[64px] lg:leading-[100px] font-bold mb-4 sm:mb-6 lg:mb-4">
          Contact
        </h3>
        <h4 className="text-[32px] leading-[48px]">Ask us about</h4>
        <div className="flex flex-col gap-6 mt-10 sm:items-start">
          <div className="flex gap-6 items-center">
            <img
              src={process.env.PUBLIC_URL + '/assets/icon-person.svg'}
              alt="icon person"
            />
            <p className="text-[18px] leading-[28px] font-bold text-start">
              The quality of our talent network
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <img
              src={process.env.PUBLIC_URL + '/assets/icon-cog.svg'}
              alt="icon person"
            />
            <p className="text-[18px] leading-[28px] font-bold text-start">
              Usage & implementation of our software
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <img
              src={process.env.PUBLIC_URL + '/assets/icon-chart.svg'}
              alt="icon person"
            />
            <p className="text-[18px] leading-[28px] font-bold text-start">
              How we help drive innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
