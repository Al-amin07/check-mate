import { LuTag } from "react-icons/lu";
import { HiUsers } from "react-icons/hi2";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import StatsCard from "../Common/StatsCard";
import TaskTable from "./Tables/TaskTabel";
import PieChartPlaceholder from "./PieChartPlaceholder";

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
        <h2 className="text-3xl font-medium text-[#24402b]">
          All Tasks Lists{" "}
        </h2>
        <div className="flex gap-10">
          <div className="flex-1">
            <TaskTable />
          </div>
          <div className="">
            <PieChartPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
