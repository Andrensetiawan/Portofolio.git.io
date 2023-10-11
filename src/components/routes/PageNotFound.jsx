import React from 'react'
import Home from '../Home'
import { Link } from 'react-scroll'


function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row md:gap-5 items-center justify-center">
         <h1 className="text-[75px]">404</h1>
        <div className="font-semibold text-center md:text-left">
            <p className="text-[35px]">We Couldn't find this page.</p>
           <p className="font-normal italic">BACK TO <Link to={Home} className="hover:underline">HOME PAGE</Link></p>
        PageNotFound
            </div>
            </div>
  )
}

export default PageNotFound