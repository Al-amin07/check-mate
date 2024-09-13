import TasksRow from "./Tables/TasksRow";
import TaskTable from "./Tables/TaskTabel";
import { LuPlus } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";


const Tasks = () => {
  const tasks = [
    { id: 1, name: 'Project design', date: 'Sept 22', time: '4:00 PM', location: 'https://www.google.com/maps/place/Toronto', employee: 'John D', status: 'Completed', statusColor: 'green' },
    { id: 2, name: 'Washing car', date: 'Sept 18', time: '2:00 PM', location: 'https://www.google.com/maps/place/Toronto', employee: 'Khalid', status: 'Rejected', statusColor: 'red' },
    { id: 3, name: 'Deliver product', date: 'Sept 23', time: '4:00 PM', location: 'https://www.google.com/maps/place/Toronto', employee: 'Afrahim', status: 'In progress', statusColor: 'yellow' },
    { id: 4, name: 'Take a ride', date: 'Sept 12', time: '1:00 PM', location: 'https://www.google.com/maps/place/Toronto', employee: 'Jack', status: 'Completed', statusColor: 'green' },
    { id: 5, name: 'Deliver Food', date: 'Sept 15', time: '4:00 PM', location: 'https://www.google.com/maps/place/Toronto', employee: 'Samin', status: 'Rejected', statusColor: 'red' },
    { id: 6, name: 'Cleaning house', date: 'Sept 16', time: '4:00 PM', location: 'https://www.google.com/maps/place/Toronto', employee: 'Reehan', status: 'Completed', statusColor: 'green' },
    { id: 7, name: 'Cleaning pool', date: 'Sept 20', time: '4:00 PM', location: 'https://www.google.com/maps/place/Toronto', employee: 'Azizul', status: 'In progress', statusColor: 'yellow' }
  ];

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="flex justify-end items-center mb-4">
        
        <button className="bg-[#4D7A58] flex items-center text-lg  text-white py-2 px-4 rounded-full hover:bg-green-800"><LuPlus size={28} /> Create New Task</button>
      </div>
      <div className="flex items-center gap-4 mb-3">
      <h2 className="text-lg font-bold text-green-900">All Tasks</h2>
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
