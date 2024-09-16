import { Link, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

import fb from "../../assets/images/fb.png";
import g from "../../assets/images/g.png";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import GetPhoto from "../../utils/GetPhoto";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
  const {
    createUser,
    setUser,
    user,
    signInWithGoogle,
    updateUserProfile,
    saveUser,
    logOut
  } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      console.log(result);
      saveUser(result.user)
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
      sendEmailVerification(result.user)
      logOut()
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    // <div className='flex justify-center items-center min-h-screen'>
    //   <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
    //     <div className='mb-8 text-center'>
    //       <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
    //       <p className='text-sm text-gray-400'>Welcome to StayVista</p>
    //     </div>
    //     <form
    //       noValidate=''
    //       action=''
    //       className='space-y-6 ng-untouched ng-pristine ng-valid'
    //     >
    //       <div className='space-y-4'>
    //         <div>
    //           <label htmlFor='email' className='block mb-2 text-sm'>
    //             Name
    //           </label>
    //           <input
    //             type='text'
    //             name='name'
    //             id='name'
    //             placeholder='Enter Your Name Here'
    //             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
    //             data-temp-mail-org='0'
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor='image' className='block mb-2 text-sm'>
    //             Select Image:
    //           </label>
    //           <input
    //             required
    //             type='file'
    //             id='image'
    //             name='image'
    //             accept='image/*'
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor='email' className='block mb-2 text-sm'>
    //             Email address
    //           </label>
    //           <input
    //             type='email'
    //             name='email'
    //             id='email'
    //             required
    //             placeholder='Enter Your Email Here'
    //             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
    //             data-temp-mail-org='0'
    //           />
    //         </div>
    //         <div>
    //           <div className='flex justify-between'>
    //             <label htmlFor='password' className='text-sm mb-2'>
    //               Password
    //             </label>
    //           </div>
    //           <input
    //             type='password'
    //             name='password'
    //             autoComplete='new-password'
    //             id='password'
    //             required
    //             placeholder='*******'
    //             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <button
    //           type='submit'
    //           className='bg-rose-500 w-full rounded-md py-3 text-white'
    //         >
    //           Continue
    //         </button>
    //       </div>
    //     </form>
    //     <div className='flex items-center pt-4 space-x-1'>
    //       <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
    //       <p className='px-3 text-sm dark:text-gray-400'>
    //         Signup with social accounts
    //       </p>
    //       <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
    //     </div>
    //     <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
    //       <FcGoogle size={32} />

    //       <p>Continue with Google</p>
    //     </div>
    //     <p className='px-6 text-sm text-center text-gray-400'>
    //       Already have an account?{' '}
    //       <Link
    //         to='/login'
    //         className='hover:underline hover:text-rose-500 text-gray-600'
    //       >
    //         Login
    //       </Link>
    //       .
    //     </p>
    //   </div>
    // </div>
    <div className="bg-white p-8 mt-8  ">
      <h2 className="text-4xl font-bold text-center mb-1 text-green-800">
        Welcome to CheckMateGo
      </h2>
      <p className="text-green-700 text-center mb-4">
        Join now and start your journey with us{" "}
      </p>
      <form onSubmit={handleSignUp} className="max-w-md mx-auto">
        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full  px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
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
        <button className="flex gap-2 font-semibold border border-green-800 items-center justify-center   text-green-800 rounded-full  py-1 hover:scale-105  ">
          <img src={fb} className="h-7 w-7" alt="Facebook" />
          Login with Facebook
        </button>

        <button
          onClick={handleGoogleSignIn}
          className="flex gap-3 font-semibold border border-green-800 items-center justify-center   text-green-800 rounded-full  py-1 hover:scale-105 "
        >
          <img src={g} className="h-6 w-6" alt="Google" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
