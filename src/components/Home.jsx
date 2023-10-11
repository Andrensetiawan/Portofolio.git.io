import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import backdrop from "../assets/Backdrop/Backdrop1.jpg";

const Home = () => {
  return (
  <div name='home' className="w-full h-screen">
    
            <img src={ backdrop } alt="backdrop" className="absolute w-full h-full " />
            <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute text-white">
                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute">
                  <div className=' max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full'>
                    <p className='  text-blue-600'>Hi, My Name Is</p>
                    <h1 className='text-4x1 sm:text-7xl font-bold text-white'>Andre Nur Setiawan</h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#8893b0]'>I'm a Full Stack Developer</h2>
                    <p className='text-[#8892b0] py-4 max-w-{700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus culpa eius ut soluta eligendi perferendis. Tempore neque architecto odit in ipsam quasi debitis, deleniti cum dolorem, repellendus quidem laudantium vel.</p>
                    <div>
                      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>View Work 
                      <span className=' group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className=' ml-3'/>
                      </span>
                    </button>
                  </div>
                </div>
                    
              </div>
            </div>
    
  </div>
    // <div name='home' className='w-full h-screen bg-[#0e2342] '>
    //     {/* Container */}
    //     <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    //         <p className='text-blue-600 text-2xl'>Hi, MY NAME IS</p>
    //         <h1 className='text-4x1 sm:text-7xl font-bold text-white'>Andre Nur Setiawan</h1>
    //         <h2 className=' text-4xl sm:text-7xl font-bold text-[#8893b0]'>I'm a Full Stack Developer</h2>
    //         <p className='text-[#8892b0] py-4 max-w-{700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus culpa eius ut soluta eligendi perferendis. Tempore neque architecto odit in ipsam quasi debitis, deleniti cum dolorem, repellendus quidem laudantium vel.</p>
    //         <div>
    //             <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>View Work 
    //             <span className=' group-hover:rotate-90 duration-300'>
    //             <HiArrowNarrowRight className=' ml-3'/>
    //             </span>
    //             </button>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Home