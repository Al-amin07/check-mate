import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import pl from "../../assets/pl.png";
import { FaCirclePlus } from "react-icons/fa6";
const pricingPlans = [
    {
      id: 1,
      type: "Home Program",
      price: {
        user: "$23/User",
        month: "$87/Month",
      },
      description: [
        "Base Price: $87 for up to 3 Users",
        "Additional Users: $23 for each",
        "USD/Billed Annually",
      ],
      features: [
        "Unlimited Projects",
        "Real-Time Photo Feed",
        "Collaborative Comments",
        "Dedicated Support",
        "Custom Checklists",
        "Export Job Reports",
      ],
      buttonText: "GET STARTED",
      highlighted: false,
    },
    {
      id: 2,
      type: "Getting Started",
      price: {
        user: "$23/User",
        month: "$87/User",
      },
      description: [
        "Base Price: $87 for up to 3 Users",
        "Additional Users: $23 for each",
        "USD/Billed Annually",
      ],
      features: [
        "Unlimited Projects",
        "Unlimited Data Storage",
        "Real-Time Photo Feed",
        "Collaborative Comments",
        "Dedicated Support",
        "Custom Checklists",
        "Export Job Reports",
      ],
      buttonText: "GET STARTED",
      highlighted: true,
    },
    {
      id: 3,
      type: "Scalling Up",
      price: {
        user: "$23/User",
        month: "$87/Month",
      },
      description: [
        "Base Price: $87 for up to 3 Users",
        "Additional Users: $23 for each",
        "USD/Billed Annually",
      ],
      features: [
        "Unlimited Projects",
        "Real-Time Photo Feed",
        "Collaborative Comments",
        "Dedicated Support",
        "Custom Checklists",
        "Export Job Reports",
      ],
      buttonText: "GET STARTED",
      highlighted: false,
    },
  ];
const Price = () => {
    const navigate = useNavigate();
    const { user } = useAuth()
  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/packages`
      );
      console.log(data);
      return data;
    },
  });
  const handleSubs = (id) => {
    if(!user?.email){
        Swal.fire({
            title: "You are not Logged In?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login"
          }).then((result) => {
            if (result.isConfirmed) {
                
             navigate('/login')
            }
          });
     
        return;
    }
    else{
        navigate(`/subscription/${id}`)
    }
    console.log(id)
  }
  console.log(packages);
  return (
    // <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
    //     <h3 className="text-3xl lg:text-4xl font-bold text-center mb-8">Pricing Plan</h3>
    //   <div className=" grid grid-cols-3 gap-12 ">
    //     {packages?.map((item) => (
    //       <div
    //         key={item._id}
    //         className="bg-white transition-transform duration-500 text-center hover:bg-[#f9f9f9] hover:shadow-xl py-8 px-8  rounded-3xl shadow-lg"
    //       >
    //         <h3 className="text-xl text-left  font-medium text-slate-800 ">
    //           {item?.name}
    //         </h3>
    //         <p className="text-xl text-[#24402B] font-medium mt-2">
    //           $ {item?.price}
    //         </p>
    //         <p className="text-sm text-gray-500">Per serviced location/month</p>
    //         <button
    //          onClick={() => handleSubs(item?._id)}
    //           className="mt-3 bg-[#487253] font-medium text-white py-2 inline-block  px-4 rounded-md hover:bg-green-800"
    //         >
    //           Get started
    //         </button>

    //         <ul className="mt-6 text-[#24402B]  text-left space-y-2 ">
    //           {item?.details?.map((lists, index) => (
    //             <li key={index} className="font-[500]">
    //               ✔ {lists}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className=" mt-12 container mx-auto mb-12 ">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
      Pricing Plan
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-6 px-2 md:px-6 lg:px-12 ">
      {pricingPlans.map((plan) => (
        <div
          key={plan.id}
          className={`${
            plan.highlighted
              ? "bg-[#27C661] scale-y-105  text-white"
              : "bg-white"
          } shadow-lg min-w-[300px] max-w-[400px] mx-auto rounded-lg p-6 w-full`}
        >
          <h3 className="text-lg font-bold mb-4">{plan.type}</h3>
          <div className="text-4xl font-bold">
            {plan.price.user}
            <span className="text-lg">, {plan.price.month}</span>
          </div>
          <hr className=" my-2" />
          <p className=" my-4">
            {plan.description.map((desc, index) => (
              <span key={index}>
                {desc} <br />
              </span>
            ))}
          </p>
          <ul className="mt-4 mb-6 space-y-2 text-gray-600">
            {plan.features.map((feature, index) => (
              <li
                className={`flex items-center gap-2 ${
                  plan.highlighted ? "text-white" : "text-black"
                }`}
                key={index}
              >
                {!plan.highlighted ? <FaCirclePlus /> : <img src={pl} />}{" "}
                {feature}
              </li>
            ))}
          </ul>
          <Link
            to={"/"}
            className={`mt-6  w-full tece inline-block font-bold hover:scale-105 text-center transition-transform duration-500 uppercase  py-2 px-4 rounded ${
              plan.highlighted
                ? "bg-white   border-2 text-black border-green-500"
                : "bg-green-500 text-white"
            }`}
          >
            Get Satrted
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Price;
