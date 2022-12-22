import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectOne from '../public/assets/projects/fitness.png'
import ProjectItem from './ProjectItem'
import fitnessImg from '../public/assets/projects/fitness.png'
import restaurantImg from '../public/assets/projects/restaurantImg.png'
import netflixImg from '../public/assets/projects/netflixImg.png'
import membershipImg from '../public/assets/projects/membership.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-28'>
         <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
          <h2 className='py-4'>What Ive Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>

      <ProjectItem 
      title='The Appliance Plug Membership Program' 
      backgroundImg={membershipImg}
      projectUrl='/membershipwebsite'
      />
      <ProjectItem 
      title='Fitness App' 
      backgroundImg={fitnessImg}
      projectUrl='/fitness'
      />
      <ProjectItem 
      title='Restaurant Website' 
      backgroundImg={restaurantImg}
      projectUrl='/restaurant'
      />
      <ProjectItem 
      title='Netflix Clone' 
      backgroundImg={netflixImg}
      projectUrl='/netflix'
      />

    

          </div>
         </div>
    </div>
  )
}

export default Projects