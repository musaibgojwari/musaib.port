import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='flex fixed items-center justify-center left-1 bottom-1'>
        <div className='flex relative items-center justify-center w-48 h-auto'>
            <CircularText className=" animate-spin-slow"/>
            <Link href="mailto:musaibx@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ligt  font-semibold border-solid border-dark bg-dark h-20 w-20 rounded-full'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe