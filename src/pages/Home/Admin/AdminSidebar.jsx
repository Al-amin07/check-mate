import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineTask } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { MdFeedback } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { LuTag } from "react-icons/lu";


const AdminSidebar = () => {
    const { user } = useAuth();
    return (
        <>
                <div className="mb-6 mt-6">
                    <img className="w-24 h-24 rounded-2xl mx-auto" src={user?.photoURL} alt="Admin Image" />
                    <h2 className="col text-center font-bold mt-2 mb-1">{user?.displayName}</h2>
                    <p className="text-sm text-center text-slate-600">Admin</p>
                </div>
                <NavLink
                to='/'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
                      isActive ? 'bg-[#477553]  text-white border-0' : 'text-[#649474] bg-white'
                    }`
                  }
              >
                <MdDashboard className='w-6 h-6' />

                <span className='mx-4 font-medium'>Dashboard</span>
              </NavLink>
                <NavLink
                to='/tasks'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
                    isActive ? 'bg-[#477553]  text-white border-0' : 'text-[#649474] bg-white'
                  }`
                }
              >
                <MdOutlineTask className='w-6 h-6' />

                <span className='mx-4 font-medium'>Tasks</span>
              </NavLink>
                <NavLink
                to='/users'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
                    isActive ? 'bg-[#477553]  text-white border-0' : 'text-[#649474] bg-white'
                  }`
                }
              >
                <HiUsers className='w-6 h-6' />

                <span className='mx-4 font-medium'>Users</span>
              </NavLink>
                <NavLink
                to='/feedbacks'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
                    isActive ? 'bg-[#477553]  text-white border-0' : 'text-[#649474] bg-white'
                  }`
                }
              >
                <MdFeedback className='w-6 h-6' />

                <span className='mx-4 font-medium'>Feedbackes</span>
              </NavLink>
                <NavLink
                to='/subscriptions'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
                    isActive ? 'bg-[#477553]  text-white border-0' : 'text-[#649474] bg-white'
                  }`
                }
              >
                <LuTag className='w-6 h-6' />

                <span className='mx-4 font-medium'>Subscriptions</span>
              </NavLink>
              
        </>
    );
};

export default AdminSidebar;