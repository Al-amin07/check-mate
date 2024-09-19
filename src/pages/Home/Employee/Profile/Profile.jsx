import { useState } from "react";
import Title from "../../Common/Title";
import useAuth from "../../../../hooks/useAuth";
import { FaPencil } from "react-icons/fa6";
import PersonalModal from "../../Modals/PersonalModal";
import ProfessionalModal from "../../Modals/ProfessionalModal";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const Profile = () => {
  const { user, updateUserProfile } = useAuth();

  const axiosSecure = useAxiosSecure();

  const [isEditPersonal, setIsEditPersonal] = useState(false);
  const [isEditProfessional, setIsEditProfessional] = useState(false);
  const {
    data: profile = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/profile/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  const closeModal = () => {
    setIsEditPersonal(false);
  };
  const proCloseModal = () => {
    setIsEditProfessional(false);
  };
  const handleProfrssionalData = async (e) => {
    e.preventDefault();
    const companyName = e.target.cname.value;
    const companySize = e.target.csize.value;
    const location = e.target.location.value;
    console.log(companyName, companySize, location);
    const details = {
      companyName,
      companySize,
      location,
      isEditPersonal: false,
    };
    try {
      const { data } = await axiosSecure.patch(
        `/update-user/${user?.email}`,
        details
      );
      if (data.modifiedCount) {
        toast.success("Profile Edited!!!");
        refetch();
      }
      console.log();
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsEditProfessional(false);
    }
  };
  const handlePersonalData = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const email = user?.email;

    const details = { email, name, phone, address, isPersonEdit: true };
    try {
      const { data } = await axiosSecure.patch(
        `/update-user/${user?.email}`,
        details
      );
      if (data.modifiedCount) {
        toast.success("Profile Edited!!!");
        refetch();
        await updateUserProfile(name, user?.photoURL);
      }
      console.log();
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsEditPersonal(false);
    }
  };
  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center ">
        <p className="text-lg text-slate-500">Loading....</p>
      </div>
    );
  return (
    <div className=" p-6 md:p-8 lg:p-16 bg-white">
      {/* Personal Information Section */}
      <div className=" mb-10">
        <Title title={"Personal Information"} />

        <div className=" flex lg:flex-row flex-col justify-between">
          <div className="flex flex-1 md:flex-row flex-col items-center gap-10 mb-4">
            <img
              referrerPolicy="no-referrer"
              // src={user?.photoURL} // Add the actual image source here
              src={profile?.image} // Add the actual image source here
              alt="Profile"
              className="w-36 h-36 border-[2px] border-green-600  rounded-full"
            />
            <div className="w-full space-y-3 gap-4">
              <div className="flex gap-3 items-center">
                <label className=" font-medium">Name: </label>
                <input
                  type="text"
                  disabled
                  value={profile?.name}
                  className="w-full border border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full ml-5"
                />
              </div>
              <div className="flex gap-3 items-center">
                <label className=" font-medium">Email: </label>
                <input
                  type="email"
                  value={profile?.email}
                  disabled
                  className="w-full border border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full ml-5"
                />
              </div>
              <div className="flex gap-3 items-center">
                <label className=" font-medium">Phone: </label>
                <input
                  type="text"
                  disabled
                  value={profile?.phone}
                  readOnly
                  className="w-full border border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full ml-4 "
                />
              </div>
              <div className="flex gap-3 items-center">
                <label className=" font-medium">Address: </label>
                <input
                  type="text"
                  disabled
                  value={profile?.address}
                  className="w-full border border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full ml-[2px] focus:outline-none focus:ring"
                />
              </div>
            </div>
          </div>

          <div className="flex xl:flex-1  justify-end items-start  mb-4">
            <button
              onClick={() => setIsEditPersonal(true)}
              className="text-green-600 bg-[#f9f9f9] hover:bg-slate-300 py-1 px-2 rounded-md flex items-center gap-2 hover:text-green-800"
            >
              <FaPencil size={18} /> Edit
            </button>
            <PersonalModal
              userDetails={profile}
              isOpen={isEditPersonal}
              handleData={handlePersonalData}
              closeModal={closeModal}
            />
          </div>
        </div>
      </div>

      {/* Professional Information Section */}
      <div className="mb-10 ">
        <Title title={"Professional Information"} />

        <div className="flex lg:gap-6 xl:gap-36 lg:flex-row flex-col justify-between">
          {/* Details */}
          <div className="w-full flex-1 space-y-5 gap-4">
            <div className="flex gap-3 items-center">
              <label className=" font-medium whitespace-nowrap">
                Company Name:{" "}
              </label>
              <input
                type="text"
                value={profile?.companyName}
                className="w-full border border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
              />
            </div>
            <div className="flex gap-3 items-center">
              <label className=" font-medium whitespace-nowrap">
                Compnany Size:{" "}
              </label>
              <input
                type="text"
                disabled
                value={profile?.companySize}
                className="w-full border ml-1 border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
              />
            </div>
            <div className="flex gap-3 items-center">
              <label className=" font-medium">Designation: </label>
              <input
                type="text"
                value={profile?.role}
                disabled
                className="w-full border ml-7 border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
              />
            </div>
            <div className="flex gap-3 items-center">
              <label className=" font-medium">Location: </label>
              <input
                type="text"
                disabled
                value={profile?.location || ""}
                className="w-full border ml-[52px] border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full focus:outline-none focus:ring"
              />
            </div>
          </div>

          {/* Map */}
          <div className="mt-4 flex flex-col md:flex-row justify-between gap-8 md:gap-12 xl:flex-1">
            <iframe
              title="Google Map"
              className="w-full h-48 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093717!2d144.96305771550433!3d-37.81627944252165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777d5e5a94b23d!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1613963630043!5m2!1sen!2sau"
            ></iframe>
            <div className="flex xl:flex-1  justify-end items-start  mb-4">
              <button
                onClick={() => setIsEditProfessional(true)}
                className="text-green-600 bg-[#f9f9f9] hover:bg-slate-300 py-1 px-2 rounded-md flex items-center gap-2 hover:text-green-800"
              >
                <FaPencil size={18} /> Edit
              </button>
              <ProfessionalModal
                isOpen={isEditProfessional}
                closeModal={proCloseModal}
                handleData={handleProfrssionalData}
                userDetails={profile}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Details Section */}
      <div className="mb-8 border-b pb-4">
        <Title title={"Subscription Details"} />
        <div className="flex flex-col sm:flex-row justify-between">
          <div className=" gap-4">
            <div className="mb-4 flex items-center gap-10">
              <label className=" text-gray-700 font-medium whitespace-nowrap ">
                Package Name:
              </label>
              <input
                type="text"
                className="w-full px-5 py-[6px] border rounded-full"
                value={profile?.subscription?.type}
                disabled
              />
            </div>
            <div className="mb-4 flex items-center gap-11">
              <label className=" text-gray-700 font-medium whitespace-nowrap ">
                Package Price:
              </label>
              <input
                type="text"
                className="w-full px-5 py-[6px] border rounded-full"
                value={` $ ${profile?.subscription?.price}`}
                disabled
              />
            </div>
            {profile?.subscription?.benefits.length > 0 && (
              <div className="mb-4 flex  gap-10">
                <label className=" text-gray-700 font-medium whitespace-nowrap ">
                  Package Details:
                </label>
                <ul className="list-none lists border space-y-2  p-5 bg-[#f9f9f9] rounded-md ">
                  <li>
                    <i className="fa fa-check"></i>Unlimited Technicians and
                    Admin
                  </li>
                  {profile?.subscription?.benefits?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-4 flex items-center gap-3">
              <label className=" text-gray-700 font-medium whitespace-nowrap ">
                Subscription Status:
              </label>
              <input
                type="text"
                className="w-full px-5 py-[6px] border rounded-full"
                value={profile?.subscription?.status}
                disabled
              />
            </div>
          </div>
          <div className="text-right">
            <Link
              to={"/price"}
              className="text-green-600 w-28 bg-[#f9f9f9] hover:bg-slate-300 py-[6px] px-3 rounded-md flex items-center gap-2 hover:text-green-800 whitespace-nowrap"
            >
              Upgrade Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
