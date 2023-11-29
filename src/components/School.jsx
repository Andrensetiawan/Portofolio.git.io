import Nuris from '../assets/Sekolah/LOGONURIS.png'
import Unpam from '../assets/Sekolah/LOGOUNPAM.png'
import SD from '../assets/Sekolah/LOGOSDN1.png'
import SMP from '../assets/Sekolah/LOGOSMPN3.png'
import RIse from '../assets/Sekolah/hari senin.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';



function School() {
  return (
    <div name='school' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>School</p>
            <p className='py-4'> These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
          <Link>
            <NavLink to="SD">
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={SD} alt="nuris" className='w-80 mx-auto'/>
                <p className='my-4'>SD N 1 Kubangwungu</p>
                </div>
            </NavLink>
          </Link>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-80 mx-auto' src={SMP} alt="unpam" />
                <p className='my-4'>SMP N 3 Ketangungan</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Nuris} alt="nuris" className='w-80 mx-auto'/>
                <p className='my-4'>SMK Nurul Islam Larangan</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Link to="UNPAM">
              <NavLink to='UNPAM'>
              <img className=' w-80 mx-auto' src={Unpam} alt="unpam" />
              <p className='my-4'>Universita Pamulang</p>
              </NavLink>
            </Link>
          </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-80 mx-auto' src={RIse} alt="unpam" />
                <Link to='/'></Link>
                <p className='my-4'>HariSenin.com</p>
            </div>
        </div>
    </div>
  </div>
    
  )
}

export default School