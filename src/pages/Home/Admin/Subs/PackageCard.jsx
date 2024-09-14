import { FaPencil } from "react-icons/fa6";

import { useState } from "react";
import CreatePackageModal from "../../Modals/CreatePackageModal";
const PackageCard = ({item, index}) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }
    const handleData = async e => {
        e.preventDefault();
        
    }
  return (
    <div className="">
      <div className="flex justify-between items-center  mb-4">
        <button className="bgc text-white py-[6px] px-5 rounded-lg">Package {index + 1}</button>
        <button onClick={() => setIsOpen(true)} className="text-green-600 bg-slate-200/80 hover:bg-slate-300 py-1 px-2 rounded-md flex items-center gap-2 hover:text-green-800">
          <FaPencil size={18} /> Edit
        </button>
        <CreatePackageModal item={item} isOpen={isOpen} closeModal={closeModal} handleData={handleData} index={index} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-2">
        <div className="flex gap-3 items-center">
          <label className=" font-medium whitespace-nowrap">
            Package Name:{" "}
          </label>
          <input
            type="text"
            required
            name="pname"
            value={item?.name}
            disabled
            className="w-full border border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className=" font-medium whitespace-nowrap">Price: </label>
          <input
            type="text"
            required
            name="price"
            value={item?.price}
            disabled
            className="w-full ml-[68px] md:ml-0 border border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className=" font-medium whitespace-nowrap">Duration</label>
          <input
            type="text"
            required
            name="duration"
            value={item?.duration}
            disabled
            className="w-full border border-[#D1DED4] ml-12 md:ml-0 bg-[#f9f9f9] py-1 px-5 rounded-full "
          />
        </div>
      </div>
      <div className="flex gap-3 mt-5">
        <label className=" font-medium whitespace-nowrap">
          Package Details:
        </label>
        <ul className="w-full p-2 md:p-8 bg-[#f9f9f9] rounded-lg border  list-disc list-inside">
            {item?.details?.map(pack => <li>{pack}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default PackageCard;
