import { useState } from "react";
import { GrLogout } from "react-icons/gr";

import { AiOutlineBars } from "react-icons/ai";

import { Link } from "react-router-dom";
import logo from "../../assets/logoss.svg";
import useAuth from "../../hooks/useAuth";
import { RxCross1 } from "react-icons/rx";
import AdminSidebar from "./Admin/AdminSidebar";
import EmployeeSidebar from "./Employee/EmployeeSidebar";
import useRole from "../../hooks/useRole";
import v1 from '../../assets/Vector.png'
import v2 from '../../assets/vector2.svg'
const Sidebar = () => {
  const { logOut } = useAuth();
  const [role, isLoading] = useRole();
  const [isActive, setActive] = useState(true);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#f9f9f9]  text-gray-800 flex justify-between ">
        <button
          onClick={handleToggle}
          className=" z-50 absolute inline-block  lg:hidden top-3 left-4 p-4 focus:outline-none   hover:bg-gray-300 hover:scale-105 transition-all duration-500 focus:bg-[#f9f9f9]"
        >
          {!isActive ? (
            <RxCross1 className="h-6 w-6" />
          ) : (
            <AiOutlineBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10  md:fixed shadow-2xl bg-black  lg:shadow-none   flex flex-col justify-between overflow-x-hidden  w-[260px]   pl-2 pr-2  py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className=" relative z-20">
          <div className=" flex justify-center hover:scale-105 transition-all duration-500">
            <Link
              to={"/"}
              className="font-medium hidden lg:flex   z-40      rounded-xl"
            >
              <img className="w-[220px]" src={logo} />
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex  flex-col  justify-between  flex-1 mt-[42px] lg:mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              {isLoading && <p className="text-lg text-white text-center">Loading...</p>}
              {role === "admin" && !isLoading && <AdminSidebar />}
              {role === "employee" && !isLoading && <EmployeeSidebar />}
            </nav>
          </div>
        </div>

        <div className=" relative z-10 px-4">
          <button
            onClick={logOut}
            className="flex w-full items-center gap-2 text-white rounded-md  p-2  bg-red-600   hover:bg-red-800  transition-colors duration-500 transform"
          >
            <GrLogout className="w-6 h-6" />

            <span className="mr-4 font-medium">Logout</span>
          </button>
        </div>
        <img src={v1} className="absolute bottom-0 right-0"/>
        <img src={v2} className="absolute top-0 left-0"/>
      </div>
    </>
  );
};

export default Sidebar;
