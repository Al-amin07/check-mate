import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineTask } from "react-icons/md";

const EmployeeSidebar = () => {
  return (
    <>
      <NavLink
        end
        to="/dashboard"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-4 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
            isActive
              ? "bg-[#477553]  text-white "
              : "text-[#649474] bg-white"
          }`
        }
      >
        <MdDashboard className="w-6 h-6" />

        <span className="mx-4 font-medium">Overview</span>
      </NavLink>
      <NavLink
        to="/dashboard/task"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
            isActive
              ? "bg-[#477553]  text-white "
              : "text-[#649474] bg-white"
          }`
        }
      >
        <MdOutlineTask className="w-6 h-6" />

        <span className="mx-4 font-medium">Tasks</span>
      </NavLink>
      <NavLink
        to="/dashboard/calender"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
            isActive
              ? "bg-[#477553]  text-white "
              : "text-[#649474] bg-white"
          }`
        }
      >
        <FaRegCalendarAlt className="w-6 h-6" />

        <span className="mx-4 font-medium">Calender</span>
      </NavLink>
      <NavLink
        to="/dashboard/uploaded"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
            isActive
              ? "bg-[#477553]  text-white "
              : "text-[#649474] bg-white"
          }`
        }
      >
        <MdOutlinePhotoSizeSelectActual className="w-6 h-6" />

        <span className="mx-4 font-medium">Uploaded Photo</span>
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mb-3 border rounded-md border-[#477553]  transition-colors duration-300 transform  hover:text-white    hover:bg-[#477553] ${
            isActive
              ? "bg-[#477553]  text-white "
              : "text-[#649474] bg-white"
          }`
        }
      >
        <IoPersonSharp className="w-6 h-6" />

        <span className="mx-4 font-medium">Profile</span>
      </NavLink>
    </>
  );
};

export default EmployeeSidebar;
