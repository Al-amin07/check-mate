import { IoSearchSharp } from "react-icons/io5";

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
      <div className="flex justify-between items-center">
        <h3 className="text-md font-semibold bg-base-200 hover:bg-green-100 text-green-700 py-2 px-4 rounded-lg mb-2 inline-block">
          {title}
        </h3>

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
      </div>

      {/* User Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-4 py-2">Sl</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Subscription Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="text-center border-t">
                <td className="px-4 py-2">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`text-${user.statusColor}-500 font-semibold`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
                    View
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-2 bg-green-100">
          <span className="text-sm">Rows Per Page: 3</span>
          <span className="text-sm">1-3 of 24</span>
          <div className="flex space-x-2">
            <button className="p-1 rounded-full bg-green-700 text-white">
              ‹
            </button>
            <button className="p-1 rounded-full bg-green-700 text-white">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
