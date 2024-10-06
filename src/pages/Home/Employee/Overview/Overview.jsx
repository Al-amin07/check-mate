import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


import { Link } from "react-router-dom";

import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import TrailModal from "../../Modals/TrailModal";
import axios from "axios";
import toast from "react-hot-toast";

import img1 from "../../../../assets/one.png";
import img2 from "../../../../assets/two.png";
import img3 from "../../../../assets/three.png";
import img4 from "../../../../assets/three1.png";
import StatsCard from "../../Common/StatsCard";
import PieChartPlaceholder from "../../Admin/PieChartPlaceholder";
const Overview = () => {
  const taskData = [
    { name: "Jan", tasks: 30 },
    { name: "Feb", tasks: 40 },
    { name: "Mar", tasks: 50 },
    { name: "Apr", tasks: 80 },
    { name: "May", tasks: 120 },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isTrailOpen, setIsTrailOpen] = useState(false);
  const closeTrailOpen = () => {
    setIsTrailOpen(false);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const time = new Date();
    if (
      user?.subscription?.type === "Trail" &&
      user?.subscription?.trailEndDate < time
    ) {
      console.log("Trail Using");
      setIsTrailOpen(true);
    }
  }, []);

  const handleTrail = async () => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/trail/${user?.email}`
      );
      console.log(data);
      if (data?.modifiedCount) {
        toast.success("Your using 7 days free trails");
        setIsOpen(false);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const {
    userDetails: { user, totalTasks },
  } = useAuth();
  console.log(user);
  useEffect(() => {
    if (user?.subscription?.isFirst) {
      setTimeout(() => {
        setIsOpen(true);
        removeFirstTime();
      }, 4000);
    }
  }, []);
  const removeFirstTime = async () => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/first-data/${user?.email}`
      );
      console.log(data);
    } catch (error) {
      console.log(error?.message);
    }
  };
  const [progress, setProgress] = useState(
    totalTasks?.filter((item) => item?.Status === "In progress")
  );
  const [todo, setTodo] = useState(
    totalTasks?.filter((item) => item?.Status === "Pending")
  );
  const [completed, setCompleted] = useState(
    totalTasks?.filter((item) => item?.Status === "Completed")
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard img={img2} title="Total Task" count={totalTasks?.length} />
        <StatsCard img={img1} title="In Progress" count={progress?.length} />
        <StatsCard img={img4} title="Pending" count={todo?.length} />
        <StatsCard img={img3} title="Completed" count={completed?.length} />
      </div>
      <div className=" flex flex-col lg:flex-row  gap-4">
        {/* Task Summary */}

        <div className="flex-1">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Calendar & Total Work */}
            <div className="flex flex-1 flex-col gap-4 mb-8">
              {/* Calendar */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Total Work</h3>
                <div className="border p-4 rounded-lg">
                  {/* Replace with any calendar component */}
                  <p>Calendar here</p>
                </div>
              </div>

              {/* Line Chart */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Tasks</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={taskData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="tasks" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <TrailModal
              handleData={handleTrail}
              isOpen={isOpen}
              closeModal={closeModal}
            />
            {/* Cards */}
            <div>
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-slate-800 text-2xl font-bold">Upcomming</h2>
                <Link
                  to={"/dashboard/task"}
                  className="py-1 px-3 hover:bg-green-100 rounded-xl"
                >
                  See all
                </Link>
              </div>
              <div className="flex w-full lg:w-72 flex-col space-y-4">
                {/* First Card */}
                <div className="bg-white w-full rounded-lg shadow-md p-4 flex justify-between items-start ">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-bold text-green-900">
                        Product Planning
                      </h2>
                      <p className="text-sm font-medium text-gray-500">
                        4.00 PM
                      </p>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center mt-4">
                        <img
                          src="https://i.pravatar.cc/32"
                          alt="assigned-by"
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-sm font-medium text-gray-500">
                          Assigned by
                        </p>
                      </div>
                      <p className="text-sm text-red-600 font-semibold mt-4">
                        Due Sep 12
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Card */}
                <div className="bg-white w-full rounded-lg shadow-md p-4 flex justify-between items-start ">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-bold text-green-900">
                        Product Planning
                      </h2>
                      <p className="text-sm font-medium text-gray-500">
                        4.00 PM
                      </p>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center mt-4">
                        <img
                          src="https://i.pravatar.cc/32"
                          alt="assigned-by"
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-sm font-medium text-gray-500">
                          Assigned by
                        </p>
                      </div>
                      <p className="text-sm text-red-600 font-semibold mt-4">
                        Due Sep 12
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="w-full  lg:w-72 ">
          <div className=" w-3/4 mx-auto lg:w-64 shadow-2xl rounded-xl flex flex-col h-[350px]">
            <h2 className="text-lg py-1 text-white mb-6 rounded-t-xl bg-green-500 text-center">Tasks Activities</h2>
            <PieChartPlaceholder />
            <div className="flex items-center pl-16 gap-1">
              <div className={` bg-[#153622]  w-3 h-3 rounded-full `}></div>
              Complete
            </div>
            <div className="flex items-center pl-16  gap-1">
              <div className={` bg-[#1E5034] w-3 h-3 rounded-full `}></div>
              In Progress
            </div>
            <div className="flex items-center  pl-16 gap-1">
              <div className={` bg-[#22C55E] w-3 h-3 rounded-full `}></div>
              Reject
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
