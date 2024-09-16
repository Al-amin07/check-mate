import { GrCaretNext } from "react-icons/gr";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { GrCaretPrevious } from "react-icons/gr";

const TaskTable = ({data}) => {
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
   
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg w-full overflow-auto">
      <table className="min-w-full table-auto  custom-table  border-spacing-y-2">
        <thead className="bgc text-white">
          <tr>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">Sl</th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">Task Name</th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">Duration</th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">Location</th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">Employee</th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((task, index) => (
            <tr key={task._id} className="text-center border-t ">
              <td className=" border-r text-sm whitespace-nowrap  border-b border-slate-400 text-green-800 bg-[#f9f9f9] ">
                {index  + 1}
              </td>
              <td className=" border-r text-sm border-b whitespace-nowrap border-slate-400 text-green-800 bg-[#f9f9f9] ">
                {task?.task_Name}
              </td>
              <td className=" border-r text-sm border-b border-slate-400 text-green-800 bg-[#f9f9f9] whitespace-nowrap ">
                {/* {`${task.date}  ${task.time}`} */}
                {task?.Duration}
                </td>
              <td className=" border-r text-sm border-b border-slate-400 text-green-800 bg-[#f9f9f9]  whitespace-nowrap">
                {task?.Location}
               
              </td>
              <td className=" border-r text-sm whitespace-nowrap border-b border-slate-400 text-green-800 bg-[#f9f9f9] ">
                {task?.Employee}
              </td>
              <td className=" font-semibold text-sm whitespace-nowrap border-slate-400 border-b bg-[#f9f9f9] text-green-800 ">
                <span
                  className={`
                  ${task?.Status === "Completed" && "text-green-500"}
                  ${task?.Status === "In progress" && "text-yellow-500"}
                  ${task?.Status === "Incomplete" && "text-red-500"}
                  `}
                >
                  {task?.Status}
                </span>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
          <div className="bg-[#5A8C67] py-[1px] w-auto flex justify-end gap-8 pr-8">
            <div className="px-4 py-1 flex items-center text-right font-normal text-sm text-white">
              <h3>Page per page</h3>
              <select className=" ml-1 bgc text-white">
                <option className="bg-white text-black" value="5">
                  5
                </option>
                <option className="bg-white text-black" value="7">
                  7
                </option>
                <option className="bg-white text-black" value="10">
                  10
                </option>
              </select>
            </div>
            <div className="flex gap-1 items-center">
              <div className=" flex items-center  font-normal text-right text-white">
                <TbPlayerTrackPrevFilled className="" />
                <GrCaretPrevious className="" />
              </div>
              <div className=" flex items-center  font-normal text-right text-white">
                <GrCaretNext className="inline-block" />
                <TbPlayerTrackNextFilled className="inline-block" />
              </div>
            </div>
          </div>
    </div>
  );
};

export default TaskTable;
