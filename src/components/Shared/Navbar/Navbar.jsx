import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import { MdLogout } from "react-icons/md";

import { FaFlag } from "react-icons/fa";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const Navbar = () => {
  const {
    user,
    logOut,
    userDetails: { totalNotification },
  } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const [notification, setNotification] = useState(totalNotification);

  // useEffect(() => {
  //   setNotification(
  //     role === "admin"
  //       ? adminData?.totalNotification ?? []
  //       : employeeData?.totalNotification ?? []
  //   );
  // }, [role, adminData, employeeData]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(notification);
  const handleLogOut = async () => {
    await logOut();
  };

  const handleNotification = async () => {
    if (notification?.filter((item) => item?.isRead === false)?.length > 0) {
      try {
        const { data } = await axiosSecure.patch(`/mark-read/${user?.email}`);
        console.log(data);
        const newdata = notification?.map((item) => {
          if (item.isRead === false) item.isRead = true;
          return item;
        });
        setNotification(newdata);

        setIsOpen(false);
      } catch (error) {
        toast.error(error?.message);
      }
    }
  };

  return (
    <div className="bg-[#E4F5EC] z-50 py-4">
      <div className="flex max-w-7xl mx-auto  justify-between items-center ">
        <div className=" hover:scale-105 transition-all duration-300">
          <Link
            to={"/"}
            className="font-medium border-2 hidden  xl:hidden   text-xl text-white bg-green-800 px-3 py-1 z-20 rounded-full"
          >
            CheckMateGo
          </Link>
        </div>
        <div className="hidden lg:block">
          <h2 className="ml-28 text-2xl font-bold">Welcome Back ,  {user?.displayName}  👋</h2>
        </div>
        <div className="flex items-center gap-5">
          <label  className="input hidden  md:flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search..." />
          </label>
          <div className="h-12 hidden md:block w-[2px] bg-slate-700">

          </div>
          <TiMessages className="text-green-500" size={32} />
          <button className="btn btn-ghost btn-circle">
            <div className="indicator   relative">
              <MdNotificationsActive
                className=" text-green-500"
                size={38}
                onClick={() => setIsOpen(!isOpen)}
              />

              {notification?.filter((item) => item?.isRead === false)?.length >
              0 ? (
                <span className="badge badge-xs absolute top-2 right-2  badge-error indicator-item"></span>
              ) : undefined}
            </div>
          </button>
          {isOpen && (
            <div className="bg-white z-50 absolute top-24 max-h-[550px] overflow-x-auto right-10 shadow-2xl  shadow-slate-600 rounded-lg p-4 w-80">
              <div className=" flex justify-between items-center">
                <h3 className="font-semibold text-lg mb-4">
                  Recent Activities
                </h3>
                <h3
                  onClick={handleNotification}
                  className="font-semibold hover:bg-base-200 px-2 py-[6px] hover:scale-105 cursor-pointer rounded-md text-sm mb-4"
                >
                  Mark all read
                </h3>
              </div>
              <ul className="space-y-3">
                {notification && notification?.length > 0
                  ? notification?.map((activity, index) => (
                      <li
                        key={index}
                        className="flex   cursor-pointer bg-[#f9f9f9] relative rounded-md hover:shadow-lg gap-4 mb-3 px-2 py-4"
                      >
                        <div
                          className={` text-white w-10 bgc h-10 flex items-center justify-center   rounded-full `}
                        >
                          <FaFlag className=" " size={18} />
                          {/* <FaFlag className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" size={18} /> */}
                        </div>
                        {/* Activity details */}
                        <div className="flex-1">
                          <p className="text-sm ">
                            <span className="font-medium">
                              {activity?.message}
                            </span>{" "}
                            {activity?.action}
                          </p>
                          <p className="text-xs mt-2 text-gray-500">
                            {new Date(activity?.createdAt).getDate()}
                            {new Date(activity?.createdAt).toLocaleString(
                              "en-US",
                              { month: "short" }
                            )}{" "}
                            {new Date(activity?.createdAt).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              }
                            )}
                            {/* {new Date(activity?.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} */}
                          </p>
                        </div>
                        {activity?.isRead === false && (
                          <div className="bg-red-500 absolute top-1 right-3 h-2 w-2 rounded-full"></div>
                        )}
                      </li>
                    ))
                  : "No New Notification!!!"}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-2">
            <div className="avatar ">
              <div className="w-12 rounded-full hover:scale-75 transition-all duration-500">
                <img
                  alt="user"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <div>
              <h2 className="font-bold ">{user?.displayName}</h2>
              <p className="text-sm">Admin</p>
            </div>
          </div>
          <MdLogout
            onClick={handleLogOut}
            size={30}
            className="text-red-600 mr-2 md:mr-1 hover:scale-110 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
