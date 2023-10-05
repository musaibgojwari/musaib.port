import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import aboutPic from "../..//public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import { Cardo } from 'next/font/google'
import Cards from '@/components/Cards'
const About = () => {
  return (

    <>
    <head>
  <title>CodeBucks | Aboute Page</title>
  <meta name='description' content='any description' />
    </head>

    <main className='flex flex-col w-full items-center justify-center'>
      <Layout>
        <AnimatedText text="Passion Fuels Purpose!" />
        <div className="grid grid-cols-3 gap-4 text-dark">
          <div>
            <h1>Biography</h1>
            <p>- Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
              new and innovative ways to bring my clients' visions to life. <br /> 
              I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.

             Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project. <br />

              </p>
          </div>
          <div className="w-full p-6 border-4 border-dark border-solid">
            <Image src={aboutPic} alt="mypic"></Image>
          </div>

          <div className='flex flex-col w-full justify-center'>
            <Cards head="40+" tagline="satisfied Clients"  />
            <Cards head="50+" tagline="projects completed"  />
            <Cards head="4+" tagline="years of experience"  />
          </div>
        </div>
      </Layout>

    </main>

    </>
  )
}

export default About