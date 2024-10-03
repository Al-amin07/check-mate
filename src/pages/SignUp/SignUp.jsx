import { Link, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

import fb from "../../assets/images/fb.png";
import g from "../../assets/images/g.png";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import GetPhoto from "../../utils/GetPhoto";
import { sendEmailVerification } from "firebase/auth";
import logo from "../../assets/logos.png";
import bg from "../../assets/bg.png";
const SignUp = () => {
  const {
    createUser,
    setUser,
    user,
    signInWithGoogle,
    signInWithFacebook,
    updateUserProfile,
    saveUser,
    logOut,
  } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      console.log(result);
      saveUser(result.user);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleFacebookSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithFacebook();
      console.log(result.user);
      saveUser(result.user);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const fullName = e.target.fullName.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];
    const confirmPassword = e.target.confirmPassword.value;
    const cname = e.target.cname.value;
    const csize = e.target.csize.value;
    const terms = e.target.terms.checked;
    if (password !== confirmPassword) {
      toast.error("Password and Confirm password dont match!!!");
      setLoading(false);
      return;
    }
    if (!terms) {
      toast.error("Accept Terms and Condition!!!");
      setLoading(false);
      return;
    }
    try {
      const image = await GetPhoto(photo);
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(fullName, image);
      setUser({ ...user, photoURL: image });
      toast.success("Registration Successfull");
      await saveUser({
        email: result?.user?.email,
        displayName: result?.user?.displayName,
        photoURL: result?.user?.photoURL,
        companyName: cname,
        companySize: csize,
      });
      sendEmailVerification(result.user);
      logOut();
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen relative w-full ">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen w-full -z-10  opacity-5 absolute bg-no-repeat bg-cover bg-center  "
      ></div>
      <div className=" p-8 mt-8 z-30  ">
        <h2 className="text-4xl font-bold text-center mb-1 text-green-800">
          Welcome to CheckMateGo
        </h2>
        <p className="text-green-700 text-center mb-4">
          Join now and start your journey with us{" "}
        </p>
        <form onSubmit={handleSignUp} className="max-w-md  mx-auto">
          {/* Full Name */}
          <div className="mb-4 ">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full z-30  px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              name="photo"
              placeholder="Photo"
              className="w-full px-5 py-1 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="cname"
              placeholder="Company Name"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="csize"
              placeholder="Company Size"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />
          </div>

          <div className="flex items-center my-4">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label className="ml-2 text-sm text-gray-500">
              I agree{" "}
              <span className="text-green-700 font-semibold">
                terms and conditions
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-[#4f7c5b] to-[#2e4f37] hover:from-green-800 hover:to-green-900 disabled:from-green-900 disabled:to-green-950"
          >
            {loading ? (
              <ImSpinner9 className="animate-spin m-auto" size={22} />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <div className="max-w-md mt-4 mx-auto">
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-green-800 font-bold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
        <div className="mt-4 max-w-md mx-auto flex items-center  justify-between">
          <div className="w-full border-t border-gray-300"></div>
          <p className="text-xs text-gray-400 mx-4">or</p>
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="flex max-w-md mx-auto flex-col gap-3 mt-4">
          <button
            // onClick={handleFacebookSignIn}
            className="flex z-30 gap-2 font-semibold border border-green-800 items-center justify-center   text-green-800 rounded-full  py-1 hover:scale-105 transition-transform duration-700 "
          >
            <img src={fb} className="h-7 w-7" alt="Facebook" />
            Login with Facebook
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="flex z-30 gap-3 font-semibold border border-green-800 items-center justify-center   text-green-800 transition-transform duration-700 rounded-full  py-1 hover:scale-105 "
          >
            <img src={g} className="h-6 w-6" alt="Google" />
            Login with Google
          </button>
        </div>
        <div>
          <img className="hover:scale-95 transition-transform duration-500 absolute top-4 left-12" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
