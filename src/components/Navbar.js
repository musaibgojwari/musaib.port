import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

export default function Navbar() {


    const CustomLinks = ({href,title,className=""}) => {
        const router = useRouter();
        return (
            <Link href={href} className={`${className} relative group`}>
                {title}
                <span className={`inline-block absolute h-[1px] bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
            
        )
    }

  return (
    <header className='w-full px-24 py-8 flex justify-between items-center'>
       <navbar className='space-x-4'>
            <CustomLinks href="/" title="Home"></CustomLinks>
            <CustomLinks href="/about" title="About"></CustomLinks>
            <CustomLinks href="/projects" title="Project"></CustomLinks>
            <CustomLinks href="/articles" title="Articles"></CustomLinks>
       </navbar>

       <nav className='flex justify-center items-center flex-wrap space-x-4'>
            <motion.a href="https://www.twitter.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <TwitterIcon />
            </motion.a>
            <motion.a href="https://www.github.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <LinkedInIcon />
            </motion.a>
            <motion.a href="https://www.pinterest.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <PinterestIcon />
            </motion.a>
            <motion.a href="https://www.dribble.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <DribbbleIcon />
            </motion.a>
            <motion.a href="#" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <SunIcon />
            </motion.a>
       </nav>
       <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
       </div>
    </header>
  )
}
