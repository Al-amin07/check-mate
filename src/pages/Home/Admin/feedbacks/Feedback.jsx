

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
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Feedback</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Sl</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Photos</th>
              <th className="border border-gray-300 px-4 py-2">Comments</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className="even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{row.name}</td>
                <td className="border border-gray-300 px-4 py-2">{row.email}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href={row.location} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {row.location}
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src={row.photo} alt={row.name} className="h-12 w-12 object-cover rounded" />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.comments.map((comment, idx) => (
                    <p key={idx}>{comment}</p>
                  ))}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2">View</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-600">Rows per page 3</p>
        <p className="text-sm text-gray-600">1-10 of 24</p>
        <div className="flex space-x-1">
          <button className="px-2 py-1 bg-gray-300 rounded">{"<"}</button>
          <button className="px-2 py-1 bg-green-500 text-white rounded">1</button>
          <button className="px-2 py-1 bg-gray-300 rounded">2</button>
          <button className="px-2 py-1 bg-gray-300 rounded">3</button>
          <button className="px-2 py-1 bg-gray-300 rounded">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
