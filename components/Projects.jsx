import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectOne from '../public/assets/projects/fitness.png'
import ProjectItem from './ProjectItem'
import fitnessImg from '../public/assets/projects/fitness.png'
import restaurantImg from '../public/assets/projects/restaurantImg.png'
import cardgameImg from '../public/assets/projects/cardgame.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
         <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
          <h2 className='py-4'>What Ive Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>

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
      title='Magic Card Game' 
      backgroundImg={cardgameImg}
      projectUrl='/cardGame'
      />

    

          </div>
         </div>
    </div>
  )
}

export default Projects