import { BsThreeDots } from "react-icons/bs";
import ProgressCard from "../ProgressCard";
import { useState } from "react";

const Progress = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <h2 className="bg-[#487F56] mb-5 py-2 px-3 flex justify-between text-lg font-medium rounded-lg w-full text-white">
        In Progress{" "}
        <BsThreeDots
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          size={32}
        />
      </h2>
     {
        isOpen &&  <div className="flex flex-col gap-5">
        <ProgressCard />
        <ProgressCard />
      </div>
     }
    </div>
  );
};

export default Progress;
