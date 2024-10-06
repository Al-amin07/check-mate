import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PhotoCard from "./PhotoCard";
import { Link } from "react-router-dom";
const Uploaded = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: uploadTask,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/employee-task/${user?.email}`);
      //   console.log(data);
      return data.filter((item) => item?.Status === "Completed");
    },
  });

  const groupImagesByDate = (images) => {
    if (!images || images.length === 0) {
      return {}; // Return an empty object if images are undefined or empty
    }

    return images.reduce((groups, image) => {
      const completedTime = image?.completedTime;

      // Check if the completedTime is valid
      if (completedTime) {
        const date = new Date(completedTime);

        // Ensure the date is valid
        if (!isNaN(date)) {
          const formattedDate = date.toISOString().split("T")[0]; // Format to 'YYYY-MM-DD'

          if (!groups[formattedDate]) {
            groups[formattedDate] = [];
          }
          groups[formattedDate].push(image);
        }
      }

      return groups;
    }, {});
  };

  const array = Object.entries(groupImagesByDate(uploadTask));

  //   console.log(array);
  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading....</p>
      </div>
    );
  return (
    <div className="p-8 space-y-5 ">
      {array && array?.length === 0 && (
        <div className="">
          <h2 className=" text-2xl mb-6 font-medium">
            You Dont Upload any Photo
          </h2>
          <Link
            className="bgc mx-auto mt-8 text-white px-6 py-2 rounded-xl font-medium"
            to={"/dashboard/task"}
          >
            Go to task page
          </Link>
        </div>
      )}
      {array?.map((item, index) => (
        <PhotoCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Uploaded;
