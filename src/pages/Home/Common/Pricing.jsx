import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TrailModal from "../Modals/TrailModal";

const Pricing = () => {
  const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        },1000)
    },[])
  return (
    <div className=" flex flex-col justify-center min-h-screen py-10">
      {/* Heading */}
      <div className="text-center  mb-10">
        <h2 className="text-xl md:text-2xl md:w-9/12 lg:w-full lg:text-3xl mx-auto font-bold text-[#24402B]">
          For a limited time get the first 2 months of Checkmate’s Scaling Up
          package 50% off
        </h2>
        <p className="text-lg text-[#24402B] my-4 w-full px-2 md:px-1 md:w-7/12 mx-auto text-center">
          Access our &apos;Scaling Up&apos; package for two months at half the
          price. Save time, grow revenue, and deliver a seamless customer
          experience with Skimmer&apos;s industry-leading pool service platform.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Getting Started */}
        <div className="bg-white transition-transform duration-500 text-center hover:bg-[#f9f9f9] hover:-translate-y-10 py-8  rounded-3xl shadow-xl">
          <h3 className="text-2xl  font-medium text-[#24402B]  ">
            Getting Started
          </h3>
          <p className="text-xl text-[#24402B] font-medium mt-2">$10.00</p>
          <p className="text-sm text-gray-500">Per serviced location/month</p>
          <button className="mt-3 bg-[#487253] font-medium text-white py-2 px-4 rounded-md hover:bg-green-800">
            Get started
          </button>

          <ul className="mt-6 text-[#24402B]  px-8 text-left space-y-2 ">
            <li className="font-[500]">✔ 20-50 Employees and Admin</li>
            <li className="font-[500]">✔ Route Builders</li>
            <li className="font-[500]">✔ 50 Photos per Visit</li>
            <li className="font-[500]">✔ Upload Photos</li>
            <li className="font-[500]">✔ Unlimited Admin</li>
            <li className="font-[500]">✔ Unlimited Technicians</li>
            <li className="font-[500]">✔ 20 Photos per Location</li>
            <li className="font-[500]">✔ Customer Support Lite</li>
          </ul>
        </div>

        {/* Scaling Up */}
        <div className="bg-white transition-transform duration-500 hover:bg-[#f9f9f9] hover:-translate-y-10 text-center p-8  rounded-3xl shadow-xl">
          <h3 className="text-2xl  font-medium text-[#24402B]  ">
            Scalling Up
          </h3>
          <p className="text-xl text-[#24402B] font-medium mt-2">$20.00</p>
          <p className="text-sm text-gray-500">Per serviced location/month</p>
          <button className="mt-3 bg-[#487253] font-medium text-white py-2 px-4 rounded-md hover:bg-green-800">
            Get started
          </button>
          <ul className="mt-6 text-left space-y-2 text-gray-700">
            <li className="text-[#24402b] font-[500]">
              ✔ Unlimited Technicians and Admin
            </li>
            <li className="text-[#24402b] font-[500]">✔ Route Builders</li>
            <li className="text-[#24402b] font-[500]">✔ 50 Photos per Visit</li>
            <li className="text-[#24402b] font-[500]">✔ Upload Photos</li>
            <li className="text-[#24402b] font-[500]">✔ Unlimited Admin</li>
            <li className="text-[#24402b] font-[500]">
              ✔ Unlimited Technicians
            </li>
            <li className="text-[#24402b] font-[500]">
              ✔ 20 Photos per Location
            </li>
            <li className="text-[#24402b] font-[500]">
              ✔ Customer Support Lite
            </li>
            <li className="text-[#24402b] font-[500]">✔ Shopping Visit</li>
          </ul>
        </div>

        {/* Home Program */}
        <div className="bg-white hover:bg-[#f9f9f9] hover:-translate-y-10 transition-transform duration-500 p-8 text-center rounded-lg shadow-xl">
          <h3 className="text-2xl  font-medium text-[#24402B]  ">
            Home Program
          </h3>
          <p className="text-xl text-[#24402B] font-medium mt-2">$5.00</p>
          <p className="text-sm text-gray-500">Per serviced location/month</p>
          <button className="mt-3 bg-[#487253] font-medium text-white py-2 px-4 rounded-md hover:bg-green-800">
            Get started
          </button>
          <ul className="mt-6 text-left space-y-2 text-gray-700">
            <li className="text-[#24402B] font-[500]">
              ✔ 11-20 Employees and Admin
            </li>
            <li className="text-[#24402B] font-[500]">✔ Route Builders</li>
            <li className="text-[#24402B] font-[500]">✔ 50 Photos per Visit</li>
            <li className="text-[#24402B] font-[500]">✔ Upload Photos</li>
            <li className="text-[#24402B] font-[500]">✔ Unlimited Admin</li>
            <li className="text-[#24402B] font-[500]">
              ✔ Unlimited Technicians
            </li>
            <li className="text-[#24402B] font-[500]">
              ✔ 20 Photos per Location
            </li>
            <li className="text-[#24402B] font-[500]">
              ✔ Customer Support Lite
            </li>
          </ul>
        </div>
        <TrailModal closeModal={closeModal} isOpen={isOpen}/>
      </div>
      <Link
        onClick={() => {
          navigate(-1);
        }}
        className="absolute  top-4 left-3 text-2xl font-bold py-2 px-4 rounded-xl hover:bg-green-50 text-green-900"
      >
        Back
      </Link>
    </div>
  );
};

export default Pricing;
