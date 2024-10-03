import { Link, useLocation, useNavigate } from "react-router-dom";
import fb from "../../assets/images/fb.png";
import g from "../../assets/images/g.png";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import bg from "../../assets/bg.png";
import logo from "../../assets/logos.png";

const Login = () => {
  const { signIn, signInWithGoogle, saveUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state ? location?.state : "/";
  const [isOpen, setIsOpen] = useState(false);
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      console.log(result);
      saveUser(result.user);
      navigate(path);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    try {
      const result = await signIn(email, password);
      console.log(result);
      navigate(path);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative w-full flex justify-center items-center">
      <div className="bg-white z-30  p-8 mx-auto mt-12 rounded-lg  max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">
          Login
        </h2>
        <p className="text-green-700 text-center mb-8">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />
          </div>
          <div className=" relative ">
            <input
              type={isOpen ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />

            {isOpen ? (
              <IoEyeOffSharp
                onClick={() => setIsOpen(!isOpen)}
                size={20}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
              />
            ) : (
              <IoEye
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                size={20}
              />
            )}
          </div>
          <div className="mb-6 pl-2">
            <Link
              to={"/reset"}
              // onClick={handleFormgetPassword}
              className="text-sm text-blue-500 hover:underline"
            >
              Forgotten password?
            </Link>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full disabled:from-green-900 disabled:to-green-950 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-[#4f7c5b] to-[#2e4f37] hover:from-green-800 hover:to-green-900"
          >
            {loading ? (
              <ImSpinner9 size={22} className=" animate-spin m-auto" />
            ) : (
              "Log In"
            )}
          </button>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm">
            Don&apos;t have account?{" "}
            <Link
              to={"/signup"}
              className="text-green-800 font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="mt-4 flex items-center  justify-between">
          <div className="w-full border-t border-gray-300"></div>
          <p className="text-xs text-gray-400 mx-4">or</p>
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <button className="flex gap-2 font-semibold border border-green-800 items-center justify-center   text-green-800 rounded-full  py-1 hover:scale-105 transition-transform duration-700 ">
            <img src={fb} className="h-7 w-7" alt="Facebook" />
            Login with Facebook
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="flex gap-3 font-semibold border border-green-800 items-center justify-center   text-green-800 rounded-full  py-1 hover:scale-105  transition-transform duration-700"
          >
            <img src={g} className="h-6 w-6" alt="Google" />
            Login with Google
          </button>
        </div>
        <div className=" absolute top-12 left-12 flex justify-center hover:scale-105 transition-all duration-500">
          {/* <button className="font-medium flex items-center gap-0 z-40   text-2xl text-white bg-[#477553] px-2 py-1  rounded-xl">
            <IoMdCheckmarkCircleOutline size={36} />
            CheckMateGo
          </button> */}
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen opacity-5 bg-no-repeat bg-cover bg-center w-full absolute"
      ></div>
    </div>
  );
};

export default Login;
