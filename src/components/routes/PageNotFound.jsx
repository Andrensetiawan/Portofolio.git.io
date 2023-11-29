import React from 'react'
import { Link,NavLink } from 'react-router-dom'


function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row md:gap-5 items-center justify-center">
         <h1 className="text-[75px]">404</h1>
        <div className="font-semibold text-center md:text-left">
            <p className="text-[35px]">We Couldn't find this page.</p>
            <p className="font-normal italic">BACK TO 
              <Link>
              <NavLink to="/" className="hover:underline">
                 HOME PAGE
               </NavLink>
              </Link>
            </p>
        PageNotFound
            </div>
            </div>
  )
}

export default PageNotFound