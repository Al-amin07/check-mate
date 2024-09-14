import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import BarChartGraph from "./BarChart";
import { LuPlus } from "react-icons/lu";
import PackageMOdal from "../../Modals/PackageModal";
import AllSubs from "./AllSubs";

const Subscriptions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const packages = [
    { name: "Total", count: 10, amount: "$100" },
    { name: "Getting Started", count: 4, amount: "$50" },
    { name: "Scaling Up", count: 3, amount: "$25" },
    { name: "Home Program", count: 3, amount: "$25" },
  ];

  const subscribers = [
    {
      id: 1,
      name: "John D",
      email: "john@gmail.com",
      company: "Virex ltd LTD. Employees: 10-20",
      subscription: "Scaling Up, Home Program",
      amount: "$20",
    },
    {
      id: 2,
      name: "John D",
      email: "john@gmail.com",
      company: "Virex ltd LTD. Employees: 10-20",
      subscription: "Scaling Up, Home Program",
      amount: "$20",
    },
    {
      id: 3,
      name: "John D",
      email: "john@gmail.com",
      company: "Virex ltd LTD. Employees: 10-20",
      subscription: "Scaling Up, Home Program",
      amount: "$20",
    },
    // Add more subscriber data as needed
  ];

  const handleData = async (e) => {
    e.preventDefault();
    const name = e.target.pname.value;
    const price = e.target.price.value;
    const duration = e.target.duration.value;
    const details = e.target.details.value;
    console.log(name, price, duration, details);
    setIsOpen(false);
  };

  return (
    <div className="max-w-6xl bg-white mx-auto p-6">
      {/* Package Summary Cards */}
      <div className="flex gap-2 justify-end items-center mb-6">
        <button
          onClick={() => setIsChange(!isChange)}
          className="text-[#4D7A58] border-[#4D7A58]  text-lg border bg-[#f9f9f9] py-[6px] px-4 rounded-full hover:bg-slate-100 hover:text-green-800"
        >
          {!isChange ? 'All Packages' : 'Overview'}
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#4D7A58] flex gap-1 items-center text-lg  text-white py-[6px] px-4 rounded-full hover:bg-green-800"
        >
          <LuPlus size={24} /> Create New Package
        </button>
        <PackageMOdal
          handleData={handleData}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
      { !isChange && <div className={``}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {packages.map((pkg, index) => (
            <div key={index} className="bgc text-white px-8 py-6 rounded-3xl">
              <div className="flex justify-between items-center">
                <div className="text-lg ">{pkg.name}</div>
                <div className="text-lg">{pkg.count}</div>
              </div>
              <div className="text-2xl font-bold">{pkg.amount}</div>
            </div>
          ))}
        </div>

        {/* Total Subscriptions Chart */}
        <div className="bg-white p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Total Subscriptions</h2>
            <select className="border border-green-500 rounded-full p-2">
              <option>Yearly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="min-h-[300px]">
            <BarChartGraph />
          </div>
        </div>

        {/* Subscribers Table */}
        <div className="bg-white p-6 rounded-lg ">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-semibold bg-base-200 hover:bg-green-100 text-green-700 py-2 px-4 rounded-lg mb-2 inline-block">
              Total Subscribers
            </h3>

            {/* Search and Date Picker */}
            <div className="flex items-center justify-end gap-4 mb-4">
              <div>
                <button className="flex bgc text-white py-1 px-5 rounded-full items-center gap-1 text-lg">
                  <IoSearchSharp size={22} />
                  Search
                </button>
              </div>
              <div>
                <select className="py-2 px-4 border col font-medium border-gray-300 rounded-lg">
                  <option>August 2024</option>
                  <option>September 2024</option>
                  <option>October 2024</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full table-auto rounded-lg">
              <thead className=" text-white">
                <tr className="bg-[#5A8C67]">
                  <th className="px-4 border-r py-2">Sl</th>
                  <th className="px-4 border-r py-2">Name</th>
                  <th className="px-4 border-r py-2">Email</th>
                  <th className="px-4 border-r py-2">Company Details</th>
                  <th className="px-4 border-r py-2">Subscription Details</th>
                  <th className="px-4 border-r py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((user, index) => (
                  <tr key={user.id} className="text-center border-t">
                    <td className="px-4 border-r col bg-[#f9f9f9] py-2">
                      {index + 1}
                    </td>
                    <td className="px-2 border-r col bg-[#f9f9f9] py-2">
                      {user.name}
                    </td>
                    <td className="px-2 border-r col bg-[#f9f9f9] py-2">
                      {user.email}
                    </td>
                    <td className="px-2 border-r col bg-[#f9f9f9] py-2">
                      {user?.company}
                    </td>
                    <td className="px-2 border-r col bg-[#f9f9f9] py-2">
                      {user?.subscription}
                    </td>
                    <td className="px-2 border-r col bg-[#f9f9f9] py-2">
                      {user?.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-[#5A8C67] py-[2px] w-full flex justify-end gap-8 pr-8">
              <div className="px-4 py-1 flex items-center text-right font-normal text-sm text-white">
                <h3>Page per page</h3>
                <select className=" ml-1 bgc text-white">
                  <option className="bg-white text-black" value="5">
                    5
                  </option>
                  <option className="bg-white text-black" value="7">
                    7
                  </option>
                  <option className="bg-white text-black" value="10">
                    10
                  </option>
                </select>
              </div>
              <div className="flex gap-1 items-center">
                <div className=" flex items-center  font-normal text-right text-white">
                  <TbPlayerTrackPrevFilled className="" />
                  <GrCaretPrevious className="" />
                </div>
                <div className=" flex items-center  font-normal text-right text-white">
                  <GrCaretNext className="inline-block" />
                  <TbPlayerTrackNextFilled className="inline-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
      {isChange && <AllSubs  />}
     
    </div>
  );
};

export default Subscriptions;
