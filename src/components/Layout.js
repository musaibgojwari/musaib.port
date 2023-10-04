import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`inline-block h-full w-full p-32 bg-light ${className}`}>{children}</div>
  )
}

export default Layout