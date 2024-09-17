import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import { MdLogout } from "react-icons/md";

import { FaFlag } from "react-icons/fa";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";

const Navbar = () => {
  const {
    user,
    logOut,
    userDetails: { totalNotification },
  } = useAuth();
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
    <div className="bg-[#f9f9f9] py-4">
      <div className="flex max-w-7xl mx-auto  justify-between items-center ">
        <div className=" hover:scale-105 transition-all duration-300">
          <Link
            to={"/"}
            className="font-medium border-2 hidden  xl:hidden   text-xl text-white bg-green-800 px-3 py-1 z-20 rounded-full"
          >
            CheckMateGo
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="w-12 rounded-full hover:scale-75 transition-all duration-500">
              <img src={user?.photoURL} />
            </div>
          </div>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator   relative">
              <svg
                onClick={() => setIsOpen(!isOpen)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {notification?.filter((item) => item?.isRead === false)?.length >
              0 ? (
                <span className="badge badge-xs absolute top-2 right-2  badge-error indicator-item"></span>
              ) : undefined}
            </div>
          </button>
          {isOpen && (
            <div className="bg-white z-50 absolute top-24 right-10 shadow-2xl  shadow-slate-600 rounded-lg p-4 w-80">
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
              <ul>
                {notification && notification?.length > 0
                  ? notification?.map((activity, index) => (
                      <li
                        key={index}
                        className="flex cursor-pointer relative rounded-md hover:shadow-lg gap-4 mb-3 px-2 py-4"
                      >
                        <div
                          className={` text-white bgc p-2 w-10 h-10 rounded-full `}
                        >
                          <FaFlag className="" size={18} />
                        </div>
                        {/* Activity details */}
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">
                              {activity?.message}
                            </span>{" "}
                            {activity?.action}
                          </p>
                          <p className="text-xs mt-2 text-gray-500">
                            {activity?.time}
                          </p>
                        </div>
                        {activity?.isRead === false && (
                          <div className="bg-red-500 absolute top-4 right-4 h-2 w-2 rounded-full"></div>
                        )}
                      </li>
                    ))
                  : "No New Notification!!!"}
              </ul>
            </div>
          )}
          <MdLogout
            onClick={handleLogOut}
            size={30}
            className="text-red-600 hover:scale-110 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
