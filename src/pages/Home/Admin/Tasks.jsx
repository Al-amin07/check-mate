import TaskTable from "./Tables/TaskTabel";
import { LuPlus } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import TaskModal from "../Modals/TaskModal";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
const Tasks = () => {
  const {
    userDetails: { totalTasks },

    user,
  } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const task_Name = e.target.task.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const Location = e.target.task.value;
    const Details = e.target.details.value;
    const Employee = e.target.ename.value;
    console.log(task_Name, Location, Employee, Details);
    const taskData = {
      task_Name,
      date,
      time,
      Location,
      Employee,
      Details,
      Status: "Pending",
      assignedBy: {
        name: user?.displayName,
        image: user?.photoURL,
      },
    };
    try {
      const { data } = await axiosSecure.post("/tasks", taskData);
      console.log(data);

      if (data?.result?.insertedId) {
        const serviceId = "service_3ieawc7";
        const publicKey = "_1OxL25JLzWngpMGb";
        const templateId = "template_0mr7v1i";
        const tamplateParams = {
          from_name: user?.displayName,
          from_email: user?.email,
          to_name: Employee,
          to_email: data?.email,

          message: `You have been assigned a new task: ${task_Name}. Due date: ${
            date + " " + time
          }`,
        };
        toast.success(`Task Assigned to ${Employee}`);
        emailjs
          .send(serviceId, templateId, tamplateParams, publicKey)
          .then(() => console.log("Email Send!!!"))
          .catch((error) => console.log(error?.message));
        setIsOpen(false);
        totalTasks.push(taskData);
      } else {
        toast.error("No employee exist with this name");
      }
    } catch (error) {
      toast.error(error?.message || "HH");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="flex justify-end items-center mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#4D7A58] flex items-center text-lg  text-white py-2 px-4 rounded-full hover:bg-green-800"
        >
          <LuPlus size={28} /> Create New Task
        </button>
        <TaskModal
          handleData={handleData}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
      <div className="flex items-center gap-6 mb-3">
        <h2 className="text-xl font-bold text-green-900">All Tasks</h2>
        <hr className="flex-1 border" />
      </div>

      {/* Search and Date Picker */}
      <div className="flex items-center justify-end gap-4 mb-4">
        <div>
          <button className="flex bgc text-white py-1 px-5 rounded-full items-center gap-1 text-lg">
            <IoSearchSharp size={26} />
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

      {/* Task Table */}
      <TaskTable data={totalTasks} />
    </div>
  );
};

export default Tasks;
