import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos.png";
import useAuth from "../../hooks/useAuth";
import { MdLogout } from "react-icons/md";

const Nav = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogout = async () => {
    await logOut();
  }
  return (
    <div className="navbar bg-white z-20 mx-auto left-1/2 -translate-x-1/2 absolute top-6  px-10 max-w-[1350px]  py-3 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <Link to={"/home"}>
          <img src={logo} className="w-[200px]" alt="logo" />
        </Link>
      </div>

      <div className="navbar-end space-x-6">
        {user ? (
          <>
            <NavLink className={"btn btn-ghost"} to={"/dashboard"}>
              Dashboard
            </NavLink>
            <button onClick={handleLogout} className="btn bg-black text-white px-6 hover:bg-slate-800">
              Log Out <MdLogout size={22}/>
            </button>
          </>
        ) : (
          <>
            <NavLink className={"btn btn-ghost"} to={"/login"}>
              LOG IN
            </NavLink>
            <button className="btn bg-black text-white px-6 hover:bg-slate-800">
              Free Trails
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
