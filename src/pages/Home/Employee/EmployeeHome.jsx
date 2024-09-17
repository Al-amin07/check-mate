import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Overview from "./Overview/Overview";
import axios from "axios";


const EmployeeHome = () => {
 
    return (
        <div>
            <Overview />
        </div>
    );
};

export default EmployeeHome;