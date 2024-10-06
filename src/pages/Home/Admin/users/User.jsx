import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Title from "../../Common/Title";
import UserTable from "./UserTable";
import { useQuery } from "@tanstack/react-query";

const User = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: totalUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/all-user");
      console.log(data);
      return data;
    },
  });
  console.log(
    totalUsers?.filter((item) => item?.subscription?.type === "Getting Started")
  );
  console.log(
    totalUsers?.filter((item) => item?.subscription?.type === "Getting Started")
  );
  console.log(
    totalUsers?.filter((item) => item?.subscription?.type === "Home Program")
  );
  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg text-slate-600">Loading....</p>
      </div>
    );
  return (
    <div className="p-4 lg:p-8">
      <Title title={"List of Users"} />
      <div className="space-y-12">
        <UserTable
          refetch={refetch}
          users={totalUsers}
          title={"Getting Started"}
        />
     
        <UserTable refetch={refetch} users={totalUsers} title={"Scaling Up"} />
        <UserTable
          refetch={refetch}
          users={totalUsers?.filter(
            (item) => item?.subscription?.type === "Home Program"
          )}
          title={"Home Program"}
        />
      </div>
    </div>
  );
};

export default User;
