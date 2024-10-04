import logo from "../../assets/feature.png";

import fog from '../../assets/fog3.svg';
import feature from '../../assets/feature2.svg'
import { MdOutlineArrowOutward } from "react-icons/md";
const NewsLetter = () => {
  return (
    <div className=" relative mt-12  flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex-1 relative z-20 flex flex-col justify-center items-start p-8 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Try <span className="underline decoration-green-500  underline-offset-4">CheckMate Go</span> for Free.
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          Learn the app in less than an hour. Become a pro in less than a day.
        </p>
        {/* Email Input */}
        <div className="flex flex-col gap-4 w-full md:max-w-md">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className=" flex gap-4 items-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md 
             hover:bg-green-600 transition text-sm md:text-base flex items-center gap-1">
              GET STARTED FOR FREE <MdOutlineArrowOutward size={24} />
            </button>
            <button className=" text-[#0F172A] text-sm md:text-base border border-[#0F172A] rounded-md px-6 py-3   transition">
              SEE PRICING PLANS
            </button>
          </div>
        </div>
      </div>

      {/* Right Section (Image and Dashboard Preview) */}
      <div className="flex-1 relative z-20 flex items-center justify-center p-8 md:p-16 ">
        <img src={logo} alt="" />
      </div>
      <img src={fog} className="absolute w-[400px] left-1/2 -translate-x-1/2" alt="" />
      <img src={feature} className=' h-[300px] md:h-[400px]  absolute bottom-0 right-0' alt="" />
    </div>
  );
};

export default NewsLetter;
