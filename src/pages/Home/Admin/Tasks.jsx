import TasksRow from "./Tables/TasksRow";


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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-green-900">All Tasks</h2>
        <button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800">+ Create New Task</button>
      </div>

      {/* Search and Date Picker */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <span className="absolute top-2 right-3 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18l6-6m0 0l-6-6m6 6H3" />
            </svg>
          </span>
        </div>
        <div>
          <select className="py-2 px-4 border border-gray-300 rounded-lg">
            <option>August 2024</option>
            <option>September 2024</option>
            <option>October 2024</option>
          </select>
        </div>
      </div>

      {/* Task Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-4 py-2">Sl</th>
              <th className="px-4 py-2">Task Name</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Employee Name</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
             <TasksRow key={task.id} index={index} task={task}/>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-2 bg-green-100">
          <span className="text-sm">Rows Per Page: 7</span>
          <span className="text-sm">1-7 of 24</span>
          <div className="flex space-x-2">
            <button className="p-1 rounded-full bg-green-700 text-white">‹</button>
            <button className="p-1 rounded-full bg-green-700 text-white">›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
