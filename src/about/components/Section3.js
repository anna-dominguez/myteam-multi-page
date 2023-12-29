import React from 'react'

const Section3 = () => {
  return (
    <section className="relative bg-sacramentoStateGreen overflow-hidden">
      <img
        className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] sm:translate-x-0 lg:translate-y-0"
        src={process.env.PUBLIC_URL + '/assets/bg-pattern-about-4.svg'}
        alt="background pattern"
      />
      <div className="py-[88px] sm:py-[100px] lg:px-[140px] flex flex-col items-center gap-16">
        <h2 className="text-[40px] lg:text-[48px] font-bold">
          Some of our clients
        </h2>
        <div className="flex flex-col sm:flex-row gap-[60px] px-10 flex-wrap justify-center items-center">
          <img
            className="h-6"
            src={process.env.PUBLIC_URL + '/assets/logo-the-verge.png'}
            alt="the verge logo"
          />
          <img
            className="h-5"
            src={process.env.PUBLIC_URL + '/assets/logo-jakarta-post.png'}
            alt="the verge logo"
          />
          <img
            className="h-6"
            src={process.env.PUBLIC_URL + '/assets/logo-the-guardian.png'}
            alt="the verge logo"
          />
          <img
            className="h-6"
            src={process.env.PUBLIC_URL + '/assets/logo-tech-radar.png'}
            alt="the verge logo"
          />
          <img
            className="h-10"
            src={process.env.PUBLIC_URL + '/assets/logo-gadgets-now.png'}
            alt="the verge logo"
          />
        </div>
      </div>
    </section>
  )
}

export default Section3
