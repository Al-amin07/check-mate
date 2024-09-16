import Todo from "./Status/Todo";
import Progress from "./Status/Progress";
import Complete from "./Status/Complete";

const Task = () => {
  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex items-center gap-6">
        <h2 className=" text-xl text-green-800 font-medium">ABS Company</h2>

        <hr className="border flex-1" />
      </div>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Todo />
        <Progress />
        <Complete />
      </div>
    </div>
  );
};

export default Task;
