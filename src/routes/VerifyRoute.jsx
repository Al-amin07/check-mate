import axios from "axios";
import { useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link, useParams } from "react-router-dom";


const VerifyRoute = () => {
    const { email} = useParams();
    const updateStatus = async (email) => {
        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/verify/${email}`)
            console.log(data)
        } catch (error) {
            console.log(error?.message)
        }
    }
    useEffect(() => {
        if(email){
            updateStatus(email);
        }
    },[email])
    console.log(email)
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="px-12 py-10 rounded-xl space-y-5 border border-green-900">
                <h2><IoMdCheckmarkCircleOutline size={36}/> Successfully Verified!!!</h2>
                <Link to={'/'} className="bgc  text-white py-2 px-5 rounded-lg">Go to Home page</Link>
            </div>
        </div>
    );
};

export default VerifyRoute;