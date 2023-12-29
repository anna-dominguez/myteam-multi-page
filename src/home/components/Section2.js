import React from 'react'

const Section2 = () => {
  return (
    <section className="bg-sacramentoStateGreen relative">
      <img
        className="absolute right-0 translate-x-[50%] lg:bottom-0"
        src={process.env.PUBLIC_URL + '/assets/bg-pattern-home-3.svg'}
        alt="background pattern"
      />
      <div className="px-6 sm:px-24 md:w-[80%] mx-auto md:px-0 py-16 sm:py-[100px] lg:py-36 flex flex-col gap-8">
        <div className="lg:flex w-[50px] h-1 bg-lightCoral"></div>
        <div className="lg:grid lg:grid-cols-2">
          <h2 className="text-left font-bold w-[70%] text-[32px] lg:text-[48px]">
            Build & manage distributed teams like no one else.
          </h2>
          <div className="flex flex-col gap-12 mx-auto">
            <article className="mt-14 lg:mt-0 mx-auto flex flex-col sm:flex-row gap-4 lg:gap-6 items-center">
              <img
                src={process.env.PUBLIC_URL + '/assets/icon-person.svg'}
                alt="person icon"
              />
              <div className="flex flex-col sm:text-left">
                <h3 className="sm:mt-0 text-lightCoral font-bold text-[18px]">
                  Experienced Individuals
                </h3>
                <p className="mt-2 font-semibold opacity-80">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </article>
            <article className="mt-14 lg:mt-0 mx-auto flex flex-col sm:flex-row gap-4 lg:gap-6 items-center">
              <img
                src={process.env.PUBLIC_URL + '/assets/icon-cog.svg'}
                alt="person icon"
              />
              <div className="flex flex-col sm:text-left">
                <h3 className="sm:mt-0 text-lightCoral font-bold text-[18px]">
                  Easy to Implement
                </h3>
                <p className="mt-2 font-semibold opacity-80">
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </article>
            <article className="mt-14 lg:mt-0 mx-auto flex flex-col sm:flex-row gap-4 lg:gap-6 items-center">
              <img
                src={process.env.PUBLIC_URL + '/assets/icon-chart.svg'}
                alt="person icon"
              />
              <div className="flex flex-col sm:text-left">
                <h3 className="sm:mt-0 text-lightCoral font-bold text-[18px]">
                  Enhanced Productivity
                </h3>
                <p className="mt-2 font-semibold opacity-80">
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
