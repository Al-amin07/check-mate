import { FaPencil } from "react-icons/fa6";

import { useState } from "react";
import CreatePackageModal from "../../Modals/CreatePackageModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "../../Modals/DeleteModal";

const PackageCard = ({ item, index, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const [loading, setLoading] = useState(false);
  // console.log(totalSubscribers)
  // const [subItem, setSubItem] = useState(item);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [details, setDetails] = useState(item?.details);
  const handleData = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(details);
    const name = e.target.name.value || item?.name;
    const price = e.target.price.value || item?.price;
    const duration = e.target.duration.value || item?.duration;
    console.log(name, price, duration, details);
    const packageDetails = { name, price, duration, details };

    try {
      const { data } = await axiosSecure.put(
        `/packages/${item?._id}`,
        packageDetails
      );
      console.log(data);
      if (data?.modifiedCount) {
        toast.success("Package Updated!!!");
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsOpen(false);
      setLoading(false);
    }
  };
  const handleDelete = async () => {
    try {
      const { data } = await axiosSecure.delete(`/subscription/${item?._id}`);
      console.log(data);
      if (data?.deletedCount) {
        refetch();
        toast.success("package Deleted!!!");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="">
      <div className="flex justify-between items-center  mb-4">
        <button className="bgc text-white py-[6px] px-5 rounded-lg">
          Package {index + 1}
        </button>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="text-green-600 bg-slate-200/80 hover:bg-slate-300 py-1 px-2 rounded-md flex items-center gap-2 hover:text-green-800"
          >
            <RiDeleteBinLine size={18} /> Delete
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="text-green-600 bg-slate-200/80 hover:bg-slate-300 py-1 px-2 rounded-md flex items-center gap-2 hover:text-green-800"
          >
            <FaPencil size={18} /> Edit
          </button>
        </div>
        <CreatePackageModal
          details={details}
          setDetails={setDetails}
          item={item}
          isOpen={isOpen}
          closeModal={closeModal}
          handleData={handleData}
          index={index}
          loading={loading}
        />
        <DeleteModal
          handleDelete={handleDelete}
          isOpen={isDeleteOpen}
          closeModal={closeDeleteModal}
        />
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
            value={"$" + item?.price}
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
          {item?.details?.map((pack) => (
            <li key={pack}>{pack}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
PackageCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default PackageCard;
