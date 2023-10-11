import React, {useState} from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaInstagram
} from 'react-icons/fa'
import Logo from '../assets/firebase.png'
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className="fixed top-0 w-full h-[80px] flex justify-between items-center px-3 text-2xl bg-[#0a192f] text-gray-300 transition-all duration-300 ease-in-out z-50">
         
        <div>
            <Link  to='home' smooth={true} duration={500}>
            <img src={Logo} alt='logo' style={{width: '80px'}}/>
            </Link>
        </div>
        {/* Meenu */}
        <div className='object-cover object-top'>
            <ul className='hidden md:flex'>
                <li >
                    <Link  to='home' smooth={true} duration={500}>
                       Home
                    </Link>
                </li>
                <li>
                    <Link  to='about' smooth={true} duration={500}>
                       About
                    </Link>   
                </li>
                <li>
                    <Link  to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link  to='school' smooth={true} duration={500}>
                        School
                    </Link>
                </li>
                <li>
                    <Link  to='contact' smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Humberger */}
        <div onClick={handleClick} className='md:hidden z-50'>
        {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
             <ul className={!nav ? 'hidden' : 'fixed text-right top-0 left-0 w-full h-full bg-[#0a192f] flex flex-col justify-center items-center z-40 transition-transform duration-300 ease-in-out transform translate-x-0 '}>
                
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                       Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                       About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                     <Link onClick={handleClick} to='school' smooth={true} duration={500}>
                        School
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

            {/* Sosial media icons */}
        <div className='  hidden lg:flex fixed flex-col  top-[35%] left-0 z-50'>
            <ul>
                <li className=' w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#242930]'>
                    <a 
                    className=' flex justify-between items-center w-full text-gray-300' 
                    href='https://www.linkedin.com/in/andre-nur-setiawan-629854254/'>
                        Linkedin <FaLinkedin size={32}/>
                    </a>
                </li>
                <li className=' w-[185px] h-[60px] flex justify-between items-center ml-[-125px] hover:ml-[-10px] duration-300 bg-[#242930]'>
                    <a 
                    className=' flex justify-between items-center w-full text-gray-300' 
                    href='https://www.facebook.com/andrensetiawann'>
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#242930]'>
                    <a 
                    className=' flex justify-between items-center w-full text-gray-300' 
                    href='https://github.com/Andrensetiawan'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[187px] h-[60px] flex justify-between items-center ml-[-127px] hover:ml-[-10px] duration-300 bg-[#242930]'>
                     <a
                     className='flex justify-between items-center w-full text-gray-300'
                     href='https://www.instagram.com/andrensetiawan/?hl=en'>
                          Instagram <FaInstagram size={30} />
                   </a>
                </li>
                
                
                
            </ul>

        </div>
   


    </div>

 
   
  )
}

export default Navbar