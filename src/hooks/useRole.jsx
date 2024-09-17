import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const { user,setRole, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: role = 'employee', isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/role/${user?.email}`)
            // console.log(data)
            // setRole(data?.role)
            // return data.role
        }
    })

    return [role, isLoading]
};

export default useRole;