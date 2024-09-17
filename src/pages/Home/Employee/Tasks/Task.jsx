import Todo from "./Status/Todo";
import Progress from "./Status/Progress";
import Complete from "./Status/Complete";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";

const Task = () => {
  const {
    userDetails: { totalTasks },
  } = useAuth();
 
  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex items-center gap-6">
        <h2 className=" text-xl text-green-800 font-medium">ABS Company</h2>

        <hr className="border flex-1" />
      </div>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Todo data={totalTasks?.filter((item) => item?.Status === "Pending")} />
        <Progress
          data={totalTasks?.filter((item) => item?.Status === "In progress")}
        />
        <Complete />
      </div>
    </div>
  );
};

export default Task;
