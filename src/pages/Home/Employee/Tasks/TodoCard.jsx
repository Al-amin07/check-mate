import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const TodoCard = ({item}) => {
  const axiosSecure = useAxiosSecure();
  // const { employeeRefetch } = useAuth()
  const updateStatus = async () => {
    try {
      const { data } = await axiosSecure.patch(`/update-task/${item?._id}`)
      console.log(data);
      if(data?.modifiedCount){
        // employeeRefetch()
        console.log('Modified')
      }
    } catch (error) {
      toast.error(error?.message)
    }
  }
    return (
        <div className="bg-[#f9f9f9] relative group w-full rounded-lg shadow p-4 flex justify-between items-start border border-gray-200">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-green-900">{item?.task_Name}</h2>
          <p className="text-sm font-medium text-gray-500">{item?.time}</p>
        </div>
        <p className="text-sm text-green-700 mt-1">
          {item?.Details}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mt-4">
            <img
              src={item?.assignedBy?.image}
              alt="assigned-by"
              className="w-8 h-8 rounded-full mr-2"
            />
            <p className="text-sm font-medium text-gray-500">Assigned by</p>
          </div>
          <p className="text-sm text-red-600 font-semibold mt-4">Due {item?.date}</p>
        </div>
      </div>
      <div  className=" bg-black/5 flex justify-center translate-y-full group-hover:-translate-y-0 absolute  opacity-0 group-hover:opacity-100 py-4 bg-opacity-30 left-1/2 -translate-x-1/2 w-full backdrop-blur-[1px] bottom-0 transition-transform duration-700 pr-1">
        <button onClick={updateStatus} className="bgc text-white py-2 px-5 hover:scale-105 rounded-sm">Start</button>
      </div>
    </div>
    );
};

export default TodoCard;