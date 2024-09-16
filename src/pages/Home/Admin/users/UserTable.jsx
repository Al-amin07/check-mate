import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const users = [
  {
    id: 1,
    name: "John D",
    email: "john@gmail.com",
    status: "Paid",
    statusColor: "green",
  },
  {
    id: 2,
    name: "Yasin Ali",
    email: "yasin@gmail.com",
    status: "Unpaid",
    statusColor: "red",
  },
  {
    id: 3,
    name: "Khalid",
    email: "khalid@gmail.com",
    status: "Paid",
    statusColor: "green",
  },
];

const UserTable = ({ title }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:text-lg text-sm whitespace-nowrap font-semibold bg-base-200 hover:bg-green-100 text-green-700 py-2 px-4 rounded-lg mb-2 inline-block">
          {title}
        </h3>

        {/* Search and Date Picker */}
        <div className="flex items-center justify-end gap-4 ">
          <div>
            <button className="flex bgc text-white py-1 px-5 rounded-full items-center gap-1 text-lg">
              <IoSearchSharp size={22} />
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
      </div>

      {/* User Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className=" text-white">
            <tr className="bg-[#5A8C67]">
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">Sl</th>
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">Name</th>
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">Email</th>
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">Subscription Status</th>
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="text-center border-t">
                <td className="px-4 whitespace-nowrap border-r bg-[#f9f9f9] py-2">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-2 whitespace-nowrap border-r bg-[#f9f9f9] py-2">{user.name}</td>
                <td className="px-2 whitespace-nowrap border-r bg-[#f9f9f9] py-2">{user.email}</td>
                <td className="px-2 whitespace-nowrap border-r bg-[#f9f9f9] py-2">
                  <span
                    className={`text-${user.statusColor}-500 border-r bg-[#f9f9f9] font-semibold`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-2 whitespace-nowrap py-2 border-r flex gap-2 justify-center bg-[#f9f9f9] space-x-0">
                  <button className="bg-blue-500 flex items-center text-white py-1 px-3 rounded-lg hover:bg-blue-600">
                    <IoEyeOutline />
                    View
                  </button>
                  <button className="bg-red-500 flex items-center text-white py-1 px-3 rounded-lg hover:bg-red-600">
                    <MdDelete />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-[#5A8C67] py-[2px] w-auto flex justify-end gap-8 pr-8">
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
    </div>
  );
};

export default UserTable;
