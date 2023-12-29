import React from 'react'
import HeadFooter from '../../shared/components/HeadFooter'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'

const About = () => {
  return (
    <div className="text-white">
      <Section1 />
      <Section2 />
      <Section3 />
      <HeadFooter />
    </div>
  )
}

export default About
