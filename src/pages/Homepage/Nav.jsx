import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoss.svg";
import useAuth from "../../hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";

const Nav = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  console.log(user);
  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="navbar  bg-white z-20 mx-auto left-1/2 -translate-x-1/2 absolute top-6  px-10 max-w-[1350px]  py-3 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <Link to={"/"}>
          <img src={logo} className="w-[250px]" alt="logo" />
        </Link>
      </div>
      {/* <div className="navbar-center block lg:hidden">
      <HiOutlineBars3 />
    </div> */}
      <div className="navbar-end  relative  space-x-6">
        <div className="lg:block hidden">
          {user ? (
            <>
              <NavLink className={"btn btn-ghost mr-3"} to={"/dashboard"}>
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="btn bg-black text-white px-6 hover:bg-slate-800"
              >
                Log Out <MdLogout size={22} />
              </button>
            </>
          ) : (
            <>
              <NavLink className={"btn btn-ghost mr-2"} to={"/login"}>
                LOG IN
              </NavLink>
              <button className="btn bg-black text-white px-6 hover:bg-slate-800">
                Free Trails
              </button>
            </>
          )}
        </div>
        <div className="lg:hidden block">
          <HiOutlineBars3
            onClick={() => setOpen(!open)}
            className="cursor-pointer hover:scale-105 transition-transform duration-500"
            size={32}
          />
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute left-3 top-12 w-[200px] bg-white p-4 rounded-lg space-y-3 lg:hidden`}
        >
          {user ? (
            <>
              <NavLink className={"btn btn-md bg-green-50 text-green-600 w-full"} to={"/dashboard"}>
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="btn bg-green-50 w-full text-green-600 px-6 "
              >
                Log Out <MdLogout size={22} />
              </button>
            </>
          ) : (
            <>
              <NavLink className={"btn btn-ghost w-full mb-1 bg-slate-200"} to={"/login"}>
                LOG IN
              </NavLink>
              <button className="btn  bg-slate-200 w-full  text-black px-6 ">
                Free Trails
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
