import { Link,  useNavigate } from "react-router-dom";
import fb from "../../assets/images/fb.png";
import g from "../../assets/images/g.png";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from 'react-hot-toast'
import { ImSpinner9 } from "react-icons/im";

const Login = () => {
  const { signIn, signInWithGoogle, saveUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      const result = await signInWithGoogle()
      console.log(result)
      saveUser(result.user)
      navigate('/')

    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    try {
      const result = await signIn(email, password);
      console.log(result);
      navigate('/')
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white p-8 mx-auto mt-12 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
        Login
      </h2>
      <p className="text-green-700 text-center mb-6">
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
        <div className="">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
          />
        </div>
        <div className="mb-6 pl-2">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgotten password?
          </a>
        </div>
        <button
        disabled={loading}
          type="submit"
          className="w-full disabled:from-green-900 disabled:to-green-950 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-[#4f7c5b] to-[#2e4f37] hover:from-green-800 hover:to-green-900"
        >
          { loading ? <ImSpinner9 size={22} className=" animate-spin m-auto"/> : "Log In"}
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
        <button className="flex gap-2 font-semibold border border-green-800 items-center justify-center   text-green-800 rounded-full  py-1 hover:scale-105  ">
          <img src={fb} className="h-7 w-7" alt="Facebook" />
          Login with Facebook
        </button>

        <button onClick={handleGoogleSignIn} className="flex gap-3 font-semibold border border-green-800 items-center justify-center   text-green-800 rounded-full  py-1 hover:scale-105 ">
          <img src={g} className="h-6 w-6" alt="Google" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
