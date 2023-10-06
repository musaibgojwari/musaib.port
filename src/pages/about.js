import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import aboutPic from "../..//public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import Cards from '@/components/Cards'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
const About = () => {
  return (

    <>
    <Head>
  <title>CodeBucks | Aboute Page</title>
  <meta name='description' content='any description' />
    </Head>

    <main className='flex flex-col w-full items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" />
        <div className="grid grid-cols-3 gap-4 text-dark">
          <div>
            <h1 className='font-bold text-dark/75 mb-2'>Biography</h1>
            <p className='font-semibold mb-4'>- Hi, I'm Musaib Bashir, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
              new and innovative ways to bring my clients' visions to life. </p>

            <p className='font-semibold mb-4'>I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.</p>
            <p className='font-semibold'>
             Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
          </div>
          <div className="relative border-4 border-dark border-solid bg-yellow-500">
            <div className='absolute w-[102%] h-[103%] -z-10 top-0 -right-3 bg-dark' />
            <Image src={aboutPic} alt="mypic"></Image>
          </div>

          <div className='flex flex-col items-end justify-center'>
            <Cards digit="40+" tagline="satisfied Clients"  />
            <Cards digit="50+" tagline="projects completed"  />
            <Cards digit="4+" tagline="years of experience"  />
          </div>
        </div>
      <Skills />
      <Experience />
      </Layout>
    </main>

    </>
  )
}

export default About