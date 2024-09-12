import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill } from 'react-icons/bs'

import { AiOutlineBars } from 'react-icons/ai'

import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import useAuth from '../../hooks/useAuth'
import { RxCross1 } from "react-icons/rx";
import AdminSidebar from './Admin/AdminSidebar'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-[#f9f9f9]  text-gray-800 flex justify-between md:hidden'>
        {/* <div>
          <div className=' hidden lg:block cursor-pointer p-4 font-bold'>
          <Link
            to={"/"}
            className="font-medium hidden lg:flex items-center gap-1   text-xl text-white bg-green-800 px-3 py-1 z-20 rounded-full"
          >
            <IoMdCheckmarkCircleOutline size={24}/>
            CheckMateGo
          </Link>
          </div>
        </div> */}

        <button
          onClick={handleToggle}
          className=' z-50 absolute inline-block lg:hidden top-3 left-4 p-4 focus:outline-none hover:bg-gray-300 hover:scale-105 transition-all duration-500 focus:bg-[#f9f9f9]'
        >
            {!isActive ? <RxCross1 className='h-6 w-6'/> : <AiOutlineBars className='h-6 w-6' />}
          
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed   flex flex-col justify-between overflow-x-hidden bg-[#f9f9f9] w-64 space-y-2 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className=' flex justify-center hover:scale-105 transition-all duration-500'>
          
            <Link
            to={"/"}
            className="font-medium hidden lg:flex items-center gap-0 z-40   text-xl text-white bg-[#477553] px-2 py-1  rounded-xl"
          >
            <IoMdCheckmarkCircleOutline size={32}/>
            CheckMateGo
          </Link>
           
          </div>

          {/* Nav Items */}
          <div className='flex  flex-col bg-[#f9f9f9] justify-between px-2 flex-1 mt-[42px] lg:mt-6'>
            {/* Conditional toggle button here.. */}
          
            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <AdminSidebar />
            

            
            </nav>
          </div>
        </div>

        <div>
       

         
          <button
            onClick={logOut}
            className='flex w-full items-center gap-0 rounded-md mx-2 px-4 py-2  text-red-600 bg-white border border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-500 transform'
          >
            <GrLogout className='w-6 h-6' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
