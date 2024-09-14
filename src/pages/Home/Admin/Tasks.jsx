
import TaskTable from "./Tables/TaskTabel";
import { LuPlus } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import TaskModal from "../Modals/TaskModal";


const Tasks = () => {
 

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }

  const handleData = async (e) => {
    e.preventDefault();
    const taskName = e.target.task.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const location = e.target.task.value;
    const employeeName = e.target.ename.value;
    console.log(taskName, date, time, location, employeeName);
    setIsOpen(false)
  } 

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="flex justify-end items-center mb-4">
        
        <button onClick={() => setIsOpen(true)} className="bg-[#4D7A58] flex items-center text-lg  text-white py-2 px-4 rounded-full hover:bg-green-800"><LuPlus size={28} /> Create New Task</button>
        <TaskModal handleData={handleData} isOpen={isOpen} closeModal={closeModal}/>
      </div>
      <div className="flex items-center gap-6 mb-3">
      <h2 className="text-xl font-bold text-green-900">All Tasks</h2>
      <hr className="flex-1 border"/>
      </div>

      {/* Search and Date Picker */}
      <div className="flex items-center justify-end gap-4 mb-4">
        <div>
          <button className="flex bgc text-white py-1 px-5 rounded-full items-center gap-1 text-lg">
            <IoSearchSharp  size={26}/>
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
      <TaskTable />
    </div>
  );
};

export default Tasks;
