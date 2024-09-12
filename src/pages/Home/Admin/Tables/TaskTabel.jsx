

const TaskTable = () => {
  const tasks = [
    { id: 1, name: 'Project design', date: 'Sept 22', time: '4:00 PM', location: 'Location', employee: 'John D', status: 'Completed', statusColor: 'green' },
    { id: 2, name: 'Washing car', date: 'Sept 18', time: '2:00 PM', location: 'Location', employee: 'Khalid', status: 'Incomplete', statusColor: 'red' },
    { id: 3, name: 'Deliver product', date: 'Sept 23', time: '4:00 PM', location: 'Location', employee: 'Afrahim', status: 'In progress', statusColor: 'yellow' },
    { id: 4, name: 'Take a ride', date: 'Sept 12', time: '1:00 PM', location: 'Location', employee: 'Jack', status: 'Completed', statusColor: 'green' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full table-auto overflow-x-hidden ">
        <thead className="bgc text-white">
          <tr>
            <th className="px-4 border-r font-normal py-3">Sl</th>
            <th className="px-4 border-r font-normal py-3">Task Name</th>
            <th className="px-4 border-r font-normal py-3">Duration</th>
            <th className="px-4 border-r font-normal py-3">Location</th>
            <th className="px-4 border-r font-normal py-3">Employee</th>
            <th className="px-4 border-r font-normal py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="text-center border-t">
              <td className="px-4 border-r border-slate-400 bg-[#f9f9f9] py-2">{task.id}</td>
              <td className="px-4 border-r border-slate-400 bg-[#f9f9f9] py-2">{task.name}</td>
              <td className="px-4 border-r border-slate-400 bg-[#f9f9f9] py-2">{`${task.date} ${task.time}`}</td>
              <td className="px-4 border-r border-slate-400 bg-[#f9f9f9] py-2">{task.location}</td>
              <td className="px-4 border-r border-slate-400 bg-[#f9f9f9] py-2">{task.employee}</td>
              <td className="px-4  border-slate-400 bg-[#f9f9f9] py-2">
                <span className={`text-${task.statusColor}-500`}>{task.status}</span>
              </td>
            </tr>
          ))}
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
