import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { IoEyeOutline, IoSearchSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";


const Feedback = () => {
  const data = [
    {
      id: 1,
      name: 'John D',
      email: 'john@gmail.com',
      location: 'https://www.google.com/maps/place/Toronto',
      photo: 'https://via.placeholder.com/50', // Replace with the actual image URL
      comments: ['Admin: Good Work', 'John D: Welcome'],
    },
    {
      id: 2,
      name: 'Khalid',
      email: 'khalid@gmail.com',
      location: 'https://www.google.com/maps/place/Toronto',
      photo: 'https://via.placeholder.com/50', // Replace with the actual image URL
      comments: ['Admin: '],
    },
    {
      id: 3,
      name: 'Afrahim',
      email: 'afrahim@gmail.com',
      location: 'https://www.google.com/maps/place/Toronto',
      photo: 'https://via.placeholder.com/50', // Replace with the actual image URL
      comments: ['Admin: Good Work', 'Afrahim: Welcome'],
    },
  ];

  return (
    <div className="p-4 lg:p-8">
       <div className="flex items-center gap-6 mb-3">
      <h2 className="text-xl font-bold text-green-900">Feedback</h2>
      <hr className="flex-1 border"/>
      </div>
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
      <div className="overflow-x-auto">
       
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto">
        <thead className="bgc text-white">
            <tr>
              <th className="border border-gray-300 whitespace-nowrap py-2">Sl</th>
              <th className="border border-gray-300 whitespace-nowrap py-2">Name</th>
              <th className="border border-gray-300 whitespace-nowrap py-2">Email</th>
              <th className="border border-gray-300 whitespace-nowrap py-2">Location</th>
              <th className="border border-gray-300 whitespace-nowrap py-2">Photos</th>
              <th className="border border-gray-300 whitespace-nowrap py-2">Comments</th>
              <th className="border border-gray-300 whitespace-nowrap py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user.id} className="text-center border-t">
                <td className="px-4 border-r whitespace-nowrap bg-[#f9f9f9] py-2">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-2 border-r whitespace-nowrap bg-[#f9f9f9] py-2">{user.name}</td>
                <td className="px-2 border-r whitespace-nowrap bg-[#f9f9f9] py-2">{user.email}</td>
                <td className="px-2 border-r  whitespace-normal break-words bg-[#f9f9f9] py-2">
                <a href={user.location} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {user?.location.length>30 ? user?.location.slice(0,30) : user?.location}
                  </a>
                </td>
                <td className="border whitespace-nowrap border-gray-300 px-4 py-2">
                  <img src={user.photo} alt={user.name} className="h-12 w-12 object-cover rounded" />
                </td>
                <td className="border whitespace-nowrap border-gray-300 px-4 py-2">
                  {user.comments.map((comment, idx) => (
                    <p key={idx}>{comment}</p>
                  ))}
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

export default Feedback;
