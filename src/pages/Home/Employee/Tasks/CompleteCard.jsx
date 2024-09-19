import logo from '../../../../assets/1.jpeg'

const CompleteCard = ({item}) => {
    return (
        <div className="bg-[#F9F9F9] border border-gray-300 rounded-xl py-4 px-3 ">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium col">{item?.task_Name}</h2>
            <h2 className="bg-green-100 text-green-950  px-2 rounded-sm py-[2px] text-xs">
              {item?.Status}
            </h2>
          </div>
          <p className="text-xs my-3 text-green-700">
            {item?.Details}
          </p>
          <div className="flex gap-3 items-center">
            <h2 className="text-green-800 text-md">Photo</h2>
            <img className="w-20  rounded-lg" referrerPolicy='no-referrer' src={logo} alt="" />
          </div>
          <h2 className='text-green-900 font-medium mt-3'>Comments: <span className='text-sm text-gray-500'>{item?.feedback || item?.comment}</span> </h2>
        </div>
    );
};

export default CompleteCard;