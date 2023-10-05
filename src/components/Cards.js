import React from 'react'

const Cards = ({head,tagline}) => {
  return (
    <div className='flex flex-col w-full text-dark text-center mb-4'>
        <h1 className='text-8xl font-bold'>{head}</h1>
        <p className='text-base font-bold text-gray-400 capitalize'>{tagline}</p>
    </div>
  )
}

export default Cards