import React from 'react'
import DirectorCard from './DirectorCard'

const directors = [
  {
    name: 'Nikita Marks',
    title: 'Founder & CEO',
    comment:
      'It always amazes me how much talent there is in every corner of the globe.',
    imagePath: '/assets/avatar-nikita.jpg',
  },
  {
    name: 'Cristian Duncan',
    title: 'Co-founder & COO',
    comment:
      'Distributed teams required unique processes. You need to approach work in a new way.',
    imagePath: '/assets/avatar-christian.jpg',
  },
  {
    name: 'Cruz Hamer',
    title: '  Co-founder & CTO',
    comment:
      "Technology is at the forefront of enabling distributed teams. That's where we come in",
    imagePath: '/assets/avatar-cruz.jpg',
  },
  {
    name: 'Drake Heaton',
    title: 'Business Development Lead',
    comment:
      'Hiring similar people from similar backgrounds is a surefire way to stunt innovation.',
    imagePath: '/assets/avatar-drake.jpg',
  },
  {
    name: 'Griffin Wise',
    title: 'Lead Marketing',
    comment:
      'Unique perspectives shape unique products, which is what you need to survive these days.',
    imagePath: '/assets/avatar-griffin.jpg',
  },
  {
    name: 'Aden Allan',
    title: 'Head of Talent',
    comment:
      'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    imagePath: '/assets/avatar-aden.jpg',
  },
]

const Section2 = () => {
  return (
    <section className="relative overflow-hidden bg-deepJungleGreen">
      <img
        className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]"
        src={
          process.env.PUBLIC_URL + '/assets/bg-pattern-about-2-contact-1.svg'
        }
        alt="background pattern"
      />
      <div className="pt-[88px] pb-[116px] lg:pb-[168px] px-6 flex flex-col items-center">
        <h2 className="text-[40px] lg:text-[48px] font-bold">
          Meet the directors
        </h2>
        <div className="mt-12 grid gap-y-[52px] sm:grid-cols-2 sm:gap-x-3 sm:gap-y-[76px] md:grid-cols-3 md:gap-x-[30px]">
          {directors.map(({ name, title, comment, imagePath }) => (
            <DirectorCard
              name={name}
              title={title}
              comment={comment}
              imagePath={imagePath}
            />
          ))}
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0"
        src={process.env.PUBLIC_URL + '/assets/bg-pattern-home-4-about-3.svg'}
        alt="background pattern"
      />
    </section>
  )
}

export default Section2
