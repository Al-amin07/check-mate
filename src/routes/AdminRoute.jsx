import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


const AdminRoute = ({children}) => {
    const { user , loading} = useAuth();
    const [role, isLoading] = useRole();
    const location = useLocation();
    if(loading || isLoading) return <LoadingSpinner />
    if(user && role === 'admin') return children;
    return <Navigate to={'/login'} state={location?.pathname}/>
};

export default AdminRoute;