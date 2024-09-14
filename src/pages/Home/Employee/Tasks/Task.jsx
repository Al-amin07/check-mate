import Cards from "../../Common/Cards";

import { BsThreeDots } from "react-icons/bs";

const Task = () => {
    return (
        <div className="p-8">
          <div className="flex items-center gap-6">
            <h2 className=" text-xl text-green-800 font-medium">ABS Company</h2>
             
            <hr  className="border flex-1"/>
            </div>  

            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1st  */}
              <div>
                <h2 className="bg-[#487F56] mb-5 py-2 px-3 flex justify-between text-lg font-medium rounded-lg w-full text-white">To Do <BsThreeDots  size={32}/></h2>
                <div className="flex flex-col gap-5">
                  <Cards />
                  <Cards />
                  <Cards />
                </div>
              </div>

              {/* 2nd  */}
              <div>
                <h2 className="bg-[#487F56] mb-5 py-2 px-3 text-lg font-medium rounded-lg w-full text-white">In Progress</h2>
                <div className="flex flex-col gap-5">
                  <Cards />
                  <Cards />
                  <Cards />
                </div>
              </div>

              {/* 3rd */}
              <div>
                <h2 className="bg-[#487F56] mb-5 py-2 px-3 text-lg font-medium rounded-lg w-full text-white">Completed</h2>
                <div className="flex flex-col gap-5">
                  <Cards />
                  <Cards />
                  <Cards />
                </div>
              </div>
            </div>
        </div>
    );
};

export default Task;