import { GrCaretNext } from "react-icons/gr";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { GrCaretPrevious } from "react-icons/gr";

const TaskTable = () => {
  const tasks = [
    {
      id: 1,
      name: "Project design",
      date: "Sept 22",
      time: "4:00 PM",
      location: "Location",
      employee: "John D",
      status: "Completed",
      statusColor: "green",
    },
    {
      id: 2,
      name: "Washing car",
      date: "Sept 18",
      time: "2:00 PM",
      location: "Location",
      employee: "Khalid",
      status: "Incomplete",
      statusColor: "red",
    },
    {
      id: 3,
      name: "Deliver product",
      date: "Sept 23",
      time: "4:00 PM",
      location: "Location",
      employee: "Afrahim",
      status: "In progress",
      statusColor: "yellow",
    },
    {
      id: 4,
      name: "Take a ride",
      date: "Sept 12",
      time: "1:00 PM",
      location: "Location",
      employee: "Jack",
      status: "Completed",
      statusColor: "green",
    },
    {
      id: 5,
      name: "Take a ride",
      date: "Sept 12",
      time: "1:00 PM",
      location: "Location",
      employee: "Jack",
      status: "Completed",
      statusColor: "green",
    },
    {
      id: 6,
      name: "Take a ride",
      date: "Sept 12",
      time: "1:00 PM",
      location: "Location",
      employee: "Jack",
      status: "Completed",
      statusColor: "green",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full table-auto overflow-x-auto custom-table  border-spacing-y-2">
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
            <tr key={task.id} className="text-center border-t py-2">
              <td className="px-4 border-r bbb border-slate-400 text-green-800 bg-[#f9f9f9] py-2">
                {task.id}
              </td>
              <td className="px-4 border-r border-slate-400 text-green-800 bg-[#f9f9f9] py-2">
                {task.name}
              </td>
              <td className="px-4 border-r border-slate-400 text-green-800 bg-[#f9f9f9] py-2">{`${task.date}  ${task.time}`}</td>
              <td className="px-4 border-r border-slate-400 text-green-800 bg-[#f9f9f9] py-2">
                {/* {task.location} */}
                Lorem ipsum dolor sit amet,.
              </td>
              <td className="px-4 border-r border-slate-400 text-green-800 bg-[#f9f9f9] py-2">
                {task.employee}
              </td>
              <td className="px-4 border-slate-400 bg-[#f9f9f9] text-green-800 py-2">
                <span className={`
                  ${task?.status === 'Completed' && 'text-green-500'}
                  ${task?.status === 'In progress' && 'text-yellow-500'}
                  ${task?.status === 'Incomplete' && 'text-red-500'}
                  `}>
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
           <tr className="bgc">
            <th className="px-4 py-1  font-normal text-white"></th>
            <th className="px-4 py-1 font-normal text-white"></th>
            <th className="px-4 py-1  font-normal text-white"></th>
            <th className="px-4 py-1 text-right font-normal text-sm text-white">Page Per Page 
              <select className=" ml-1 bgc text-white">
                <option className="bg-white text-black" value="5">5</option>
                <option className="bg-white text-black" value="7">7</option>
                <option className="bg-white text-black" value="10">10</option>
              </select>
            </th>
            <th className="px-4   font-normal text-right text-white">
              <TbPlayerTrackPrevFilled className="inline-block" />
              <GrCaretPrevious className="inline-block"/>
            </th>
            <th className="px-4 border-r flex items-center gap-1 text-left pt-[6px] font-normal text-white "><GrCaretNext  className="text-white "/>
            <TbPlayerTrackNextFilled className="text-white" /></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
