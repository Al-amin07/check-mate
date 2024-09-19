import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import { Doughnut } from 'react-chartjs-2';
import { MdTaskAlt } from "react-icons/md";
import { FaRecordVinyl } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";

import PieChartGraph from "../Charts/PieChart";
import { Link } from "react-router-dom";
import logo from "../../../../assets/1.jpeg";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import TrailModal from "../../Modals/TrailModal";
import axios from "axios";
import toast from "react-hot-toast";
import FirstModal from "../../Modals/FirstModal";
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
    <div className=" flex flex-col lg:flex-row  gap-4">
      {/* Task Summary */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="flex bg-[#487F56] items-center px-3 py-4 rounded-3xl shadow-md gap-3">
            <MdTaskAlt className=" text-white " size={44} />
            <div className=" text-white  flex flex-col items-center">
              <h2 className="text-3xl font-bold">{totalTasks?.length}</h2>
              <p>Total Task</p>
            </div>
          </div>
          <div className="flex bg-[#5A8C67] items-center px-3 py-4 rounded-3xl shadow-md gap-3">
            <MdTaskAlt className=" text-white " size={44} />
            <div className=" text-white  flex flex-col items-center">
              <h2 className="text-3xl font-bold">
                {/* {totalTasks?.filter(item => item?.Status === 'In progress')?.length} */}
                {progress?.length}
              </h2>
              <p>In Progress</p>
            </div>
          </div>
          <FirstModal isOpen={isTrailOpen} closeModal={closeTrailOpen} />
          <div className="flex bg-[#6D9978] items-center px-3 py-4 rounded-3xl shadow-md gap-3">
            <MdTaskAlt className=" text-white " size={44} />
            <div className=" text-white  flex flex-col items-center">
              <h2 className="text-3xl font-bold">{todo?.length}</h2>
              <p>Pending</p>
            </div>
          </div>
          <div className="flex bg-[#7FA589] items-center px-3 py-4 rounded-3xl shadow-md gap-3">
            <MdTaskAlt className=" text-white " size={44} />
            <div className=" text-white  flex flex-col items-center">
              <h2 className="text-3xl font-bold">{completed?.length}</h2>
              <p>Completed</p>
            </div>
          </div>
        </div>
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
              <h2 className="col text-2xl font-bold">Upcomming</h2>
              <Link
                to={"/task"}
                className="py-1 px-3 hover:bg-green-100 rounded-xl"
              >
                See all
              </Link>
            </div>
            <div className="flex w-full lg:w-72 flex-col space-y-4">
              {/* First Card */}
              <div className="bg-[#f9f9f9] w-full rounded-lg shadow p-4 flex justify-between items-start border border-gray-200">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-green-900">
                      Product Planning
                    </h2>
                    <p className="text-sm font-medium text-gray-500">4.00 PM</p>
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
              <div className="bg-[#f9f9f9] w-full rounded-lg shadow p-4 flex justify-between items-start border border-gray-200">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-green-900">
                      Product Planning
                    </h2>
                    <p className="text-sm font-medium text-gray-500">4.00 PM</p>
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
            </div>
          </div>
        </div>
      </div>

      {/* 2nd */}
      <div className="w-full lg:w-72 ">
        <div className="border relative bg-[#FFFCFC] border-gray-300 rounded-xl p-3 flex flex-col">
          <h1 className="text-green-700 text-center text-lg font-medium">
            Tasks Activity
          </h1>
          <PieChartGraph
            todo={todo?.length}
            progress={progress?.length}
            completed={completed?.length}
          />
          <div className="flex absolute bottom-6 justify-between gap-2">
            <div className="flex items-center gap-1">
              <span className=" w-4 h-4 rounded-full bg-[#1D3322]"></span>
              <h2 className="text-[#1D3322] text-sm">In Progress</h2>
            </div>
            <div className="flex items-center gap-1">
              <span className=" w-4 h-4 rounded-full bg-[#3A6645]"></span>
              <h2 className="text-[#3A6645] text-sm">To Do</h2>
            </div>
            <div className="flex items-center gap-1">
              <span className=" w-4 h-4 rounded-full bg-[#6D9978]"></span>
              <h2 className="text-[#6D9978] text-sm">Completed</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-5">
          <h2 className="col text-2xl font-bold">Completed</h2>
          <Link
            to={"/task"}
            className="py-1 px-3 hover:bg-green-100 rounded-xl"
          >
            See all
          </Link>
        </div>
        <div className="bg-[#F9F9F9] border border-gray-300 rounded-xl py-4 px-3 ">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium col">Product Design</h2>
            <h2 className="bg-green-100 text-green-950  px-2 rounded-sm py-[2px] text-xs">
              Completed
            </h2>
          </div>
          <p className="text-sm my-3 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore
            repellendus ea inventore eos iusto dignissimos quos sit culpa eum.
          </p>
          <div className="flex gap-3 items-center">
            <h2 className="text-green-800 text-md">Photo</h2>
            <img className="w-20  rounded-lg" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
