import { useState } from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";
import CameraCapture from "../Photo/CameraCapture";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const ProgressCard = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  // const { employeeRefetch } = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const handleComplete = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (!imageUrl) {
      toast.error("Take a Photo First!!!");
      return;
    }
    const details = {
      name: item?.Employee,
      comment,
      imageUrl,
    };
    try {
      const { data } = await axiosSecure.patch(`/tasks/${item?._id}`, details);
      if(data?.result?.modifiedCount){
        // employeeRefetch()
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="bg-[#f9f9f9] w-full rounded-lg shadow p-4 flex justify-between items-start border border-gray-200">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-green-900">
            {item?.task_Name}
          </h2>
          <p className="text-sm font-medium text-gray-500">{item?.time}</p>
        </div>
        <p className="text-sm text-green-800 my-[6px]">{item?.Details}</p>
        <iframe
          title="Google Map"
          className="w-1/2 h-14 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093717!2d144.96305771550433!3d-37.81627944252165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777d5e5a94b23d!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1613963630043!5m2!1sen!2sau"
        ></iframe>
        <div className="flex justify-between items-center mt-2">
          <MdOutlinePhotoCamera
            onClick={() => setIsOpen(!isOpen)}
            size={26}
            className=" text-green-800 cursor-pointer"
          />
          <p className="text-sm text-red-600 font-semibold">Due Sep 12</p>
        </div>
        {isOpen && <CameraCapture setImageUrl={setImageUrl} />}
        <h2 className=" col">Comments : </h2>

        <form onSubmit={handleComplete} className="flex justify-end">
          <input
            type="text"
            className="border-0 bg-[#f9f9f9] border-b px-2 py-1 w-full"
            name="comment"
            id=""
            required
            placeholder="Type here"
          />
          <button type="submit" className="bgc text-white py-[6px] px-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProgressCard;
