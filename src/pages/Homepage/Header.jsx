import back from "../../assets/back.png";
import fog from "../../assets/fog.svg";
import fog2 from "../../assets/fog2.svg";
import das from "../../assets/das2.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import toast from "react-hot-toast";
import lin from '../../assets/lin.svg'
const Header = ({ setIsOpen, user = {} }) => {
  const handleTrail = () => {
    if (!user?.email) {
      toast.error("Please Login first!!!");
      return;
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
      }}
      className="bg-no-repeat relative flex flex-col justify-center items-center bg-center bg-cover min-h-[700px] md:min-h-[800px] rounded-b-[80px] py-32"
    >
      <div className="z-10 space-y-6  mb-28">
        <h2 className="text-3xl relative md:text-4xl lg:text-6xl  leading-[42px] md:leading-[50px] lg:leading-[80px]  text-white md:w-2/3 mx-auto text-center">
          Capture job site photos, share updates, and stay in control <br />
          <span className=" underline decoration-green-500 underline-offset-4 decoration-[5px]">CheckMateGo.</span>
       
        </h2>
        <p className="text-sm text-[#ffffff] text-center">
          Every Photo, Video, Chat and Project in one App.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleTrail}
            className="px-10 mx-auto flex items-center gap-1 uppercase py-3 font-medium bg-[#22C55E] text-white rounded-lg"
          >
            Get Started of Free <MdOutlineArrowOutward size={24} />
          </button>
        </div>
      </div>
      <img className="absolute top-0 right-0 h-[400px]" src={fog} alt="cloud" />
      <img
        className="absolute bottom-0 left-0 h-[400px] rounded-b-[80px]"
        src={fog2}
        alt="cloud"
      />
      <img
        className=" w-[450px] md:w-[520px]  lg:w-[700px] object-cover absolute -bottom-28 md:-bottom-32 lg:-bottom-[300px]"
        src={das}
        alt=""
      />
      {/* <img className="absolute h-[500px] -bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={das} alt="" /> */}
    </div>
  );
};

export default Header;
