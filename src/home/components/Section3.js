import React from 'react'

const Section3 = () => {
  return (
    <section className="bg-deepJungleGreen relative">
      <img
        className="absolute top-0 left-0 h-fit"
        src={process.env.PUBLIC_URL + '/assets/bg-pattern-home-4-about-3.svg'}
        alt="background pattern"
      />
      <img
        className="absolute bottom-0 right-0"
        src={process.env.PUBLIC_URL + '/assets/bg-pattern-home-5.svg'}
        alt="background pattern"
      />
      <div className="flex flex-col pt-36 pb-40 gap-[84px] px-6 md:px-0 sm:w-[80%] mx-auto">
        <h2 className="font-bold text-[32px] lg:text-[48px] lg:max-w-[932px] lg:mx-auto">
          Delivering real results for top companies. Some of our{' '}
          <span className=" text-raptureBlue">success stories.</span>
        </h2>
        <div className="flex flex-col gap-[84px] lg:grid lg:grid-cols-3">
          <article className="relative">
            <img
              className="absolute z-10 left-[50%] translate-x-[-50%] top-[-10%] sm:top-[-15%]"
              src={process.env.PUBLIC_URL + '/assets/icon-quotes.svg'}
              alt="quotes"
            />
            <div className="z-30 flex flex-col gap-4 lg:gap-6 items-center">
              <p className="z-30 font-semibold text-[15px] leading-[25px]">
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg text-raptureBlue font-bold">
                  Kady Baker
                </h3>
                <p className="text-[13px] italic font-medium leading-[18px]">
                  Product Manager at Bookmark
                </p>
              </div>
              <img
                className="w-[62px] rounded-full border-2 border-raptureBlue"
                src={process.env.PUBLIC_URL + '/assets/avatar-kady.jpg'}
                alt="kady avatar"
              />
            </div>
          </article>
          <article className="relative">
            <img
              className="absolute z-10 left-[50%] translate-x-[-50%] top-[-10%] sm:top-[-15%]"
              src={process.env.PUBLIC_URL + '/assets/icon-quotes.svg'}
              alt="quotes"
            />
            <div className="z-30 flex flex-col gap-4 lg:gap-6 items-center">
              <p className="z-30 font-semibold text-[15px] leading-[25px]">
                “We needed to automate our entire onboarding process. The team
                came in and built out the whole journey. Since going live, user
                retention has gone through the roof!”
              </p>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg text-raptureBlue font-bold">
                  Aiysha Reese
                </h3>
                <p className="text-[13px] italic font-medium leading-[18px]">
                  Founder of Manage
                </p>
              </div>
              <img
                className="w-[62px] rounded-full border-2 border-raptureBlue"
                src={process.env.PUBLIC_URL + '/assets/avatar-aiysha.jpg'}
                alt="aiysha avatar"
              />
            </div>
          </article>
          <article className="relative">
            <img
              className="absolute z-10 left-[50%] translate-x-[-50%] top-[-10%] sm:top-[-15%]"
              src={process.env.PUBLIC_URL + '/assets/icon-quotes.svg'}
              alt="quotes"
            />
            <div className="z-30 flex flex-col gap-4 lg:gap-6 items-center">
              <p className="z-30 font-semibold text-[15px] leading-[25px]">
                “Amazing. Our team helped us build an app that delivered a new
                experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.”
              </p>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg text-raptureBlue font-bold">
                  Arthur Clarke
                </h3>
                <p className="text-[13px] italic font-medium leading-[18px]">
                  Co-founder of MyPhysio
                </p>
              </div>
              <img
                className="w-[62px] rounded-full border-2 border-raptureBlue"
                src={process.env.PUBLIC_URL + '/assets/avatar-arthur.jpg'}
                alt="arthur avatar"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Section3
