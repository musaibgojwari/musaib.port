import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  const Skill = ({x=0,y=0,name}) => {


    return <>
            <motion.div className={`flex absolute items-center justify-center py-3 px-6 cursor-pointer shadow-dark text-light bg-dark rounded-full`}
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={ {duration:1.5} }
            viewport={{once:true}}
            >{name}</motion.div>
          </>
  }
  return (
    <>
      <h1 className='text-8xl font-bold text-center'>Skills</h1>
      <div className='relative flex flex-col items-center justify-center w-full h-screen bg-circularLight rounded-full'>
        <motion.div className='absolute flex items-center justify-center p-8 text-light bg-dark rounded-full'
        whileHover={{scale:1.05}}
        >
          Web
        </motion.div>
        <Skill x="-20vw" y="2vw" name="HTML" />
        <Skill x="-5vw" y="-10vw" name="CSS" />
        <Skill x="20vw" y="6vw" name="JavaScript" />
        <Skill x="0vw" y="12vw" name="ReactJS" />
        <Skill x="-20vw" y="-15vw" name="NextJS" />
        <Skill x="15vw" y="-12vw" name="GatsbyJS" />
        <Skill x="32vw" y="-5vw" name="Web Design" />
        <Skill x="0vw" y="-20vw" name="Figma" />
        <Skill x="-25vw" y="18vw" name="Firebase" />
      </div>
    </>
  )
}

export default Skills