
import dashboardImage from '../../assets/das2.png'; // Replace with the actual path to the image
import fog from '../../assets/fog3.svg'
import feature from '../../assets/feature2.svg'
import { MdOutlineArrowOutward } from "react-icons/md";

const ProductivitySection = () => {
  return (
    <div className=" relative py-20 flex items-center justify-center">
      <div className="container relative z-20 mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 text-left pl-6 md:pl-0">
          <h2 className=" text-3xl md:text-4xl font-bold text-gray-800 ">
            Unlock productivity with{" "}
            <span className="">CheckMateGo!</span>
          </h2>
          <p className="text-gray-600 my-3 md:my-4 lg:my-7">
            Start your free 7-day trial today.
          </p>
          <button className="bg-green-500 text-white  py-3 px-6 flex items-center gap-1 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            GET STARTED FOR FREE <MdOutlineArrowOutward size={24}/>
          </button>
        </div>

        {/* Right Section - Dashboard Image */}
        <div className="px-3 md:w-1/2">
          <img
            src={dashboardImage}
            alt="Dashboard Mockup"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <img src={fog} className=' h-[400px] absolute md:top-0  top-48' alt="" />
      <img src={feature} className=' h-[300px] md:h-[400px]  absolute bottom-0 right-0' alt="" />
    </div>
  );
};

export default ProductivitySection;
