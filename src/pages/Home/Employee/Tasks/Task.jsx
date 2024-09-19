import Todo from "./Status/Todo";
import Progress from "./Status/Progress";
import Complete from "./Status/Complete";
import useAuth from "../../../../hooks/useAuth";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
const Task = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: totalTasks, refetch } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/employee-task/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  const [todo, setTodo] = useState(totalTasks?.filter((item) => item?.Status === "Pending"))
  const [progress, setProgress] = useState(totalTasks?.filter((item) => item?.Status === "In progress"))
  const [completed, setCompleted] = useState(totalTasks?.filter((item) => item?.Status === "Completed"))
  console.log(todo, progress, completed)
  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex items-center gap-6">
        <h2 className=" text-xl text-green-800 font-medium">ABS Company</h2>

        <hr className="border flex-1" />
      </div>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Todo
          refetch={refetch}
          data={totalTasks?.filter((item) => item?.Status === "Pending")}
        />
        <Progress
          refetch={refetch}
          data={totalTasks?.filter((item) => item?.Status === "In progress")}
        />
        <Complete data={totalTasks?.filter((item) => item?.Status === "Completed")}  />
      </div>
    </div>
  );
};

export default Task;
