import { LuTag } from "react-icons/lu";
import { HiUsers } from "react-icons/hi2";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import StatsCard from "../Common/StatsCard";
import TaskTable from "./Tables/TaskTabel";
import PieChartPlaceholder from "./PieChartPlaceholder";
import { Link } from "react-router-dom";
const AdminHome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard icon={LuTag} title="Total Subscribers" count="1,000" />
        <StatsCard icon={HiUsers} title="Total Users" count="1000" />
        <StatsCard
          icon={IoMdCheckmarkCircleOutline}
          title="Total Tasks"
          count="1,000"
        />
        <StatsCard
          icon={RiExchangeDollarLine}
          title="Total Amounts"
          count="1,000"
        />
      </div>
      <div>
       <div className="flex justify-between lg:w-3/4 my-4 lg:pr-5">
       <h2 className="text-2xl font-medium text-[#24402b]">
          All Tasks Lists{" "}
        </h2>
        <Link to={'/tasks'} className="col text-lg hover:bg-green-100 px-3 py-1 rounded-md ">See All</Link>
       </div>
        <div className="flex flex-col lg:flex-row  gap-5">
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-0"> */}
          <div className="flex-1">
        
            <TaskTable />
          </div>
          <div className=" w-3/4 mx-auto lg:w-64 border p-4 border-green-900 rounded-md flex flex-col h-[350px]">
            <h2 className="text-xl text-center">Tasks Activities</h2>
            <PieChartPlaceholder />
            <div className="flex items-center pl-16 gap-1">
              <div
                className={` bg-[#4F7859]  w-4 h-4 rounded-sm  `}
              ></div>
              Complete
            </div>
            <div className="flex items-center pl-16  gap-1">
              <div
                className={` bg-[#1D3322] w-4 h-4 rounded-sm  `}
              ></div>
              In Progress
            </div>
            <div className="flex items-center  pl-16 gap-1">
              <div
                className={` bg-[#2B4C34] w-4 h-4 rounded-sm  `}
              ></div>
              Reject
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
