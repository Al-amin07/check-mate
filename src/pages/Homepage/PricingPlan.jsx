import { FaCirclePlus } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import pl from "../../assets/pl.png";
import { Link } from "react-router-dom";
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
const PricingPlan = () => {
  return (
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
              to={"/price"}
              className={`mt-6  w-full tece inline-block font-bold hover:scale-105 transition-transform duration-500 uppercase  py-2 px-4 rounded ${
                plan.highlighted
                  ? "bg-white  border-2 text-black border-green-500"
                  : "bg-green-500 text-white"
              }`}
            >
              Get Satrted
            </Link>
          </div>
        ))}
      </div>
    </div>
    // <div className="mt-12 container mx-auto mb-12">
    //   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
    //     Pricing Plan
    //   </h2>
    //   <div className="gridpx-2 md:px-6 lg:px-12">
    //     {pricingPlans.map((plan) => (
    //       <div
    //         key={plan.id}
    //         className={`${
    //           plan.highlighted
    //             ? "bg-[#27C661] scale-y-105 text-white"
    //             : "bg-white"
    //         } shadow-lg min-w-[300px] rounded-lg p-6 w-full md:w-1/3`}
    //       >
    //         <h3 className="text-lg font-bold mb-4">{plan.type}</h3>
    //         <div className="text-4xl font-bold">
    //           {plan.price.user}
    //           <span className="text-lg">, {plan.price.month}</span>
    //         </div>
    //         <hr className="my-2" />
    //         <p className="my-4">
    //           {plan.description.map((desc, index) => (
    //             <span key={index}>
    //               {desc} <br />
    //             </span>
    //           ))}
    //         </p>
    //         <ul className="mt-4 mb-6 space-y-2 text-gray-600">
    //           {plan.features.map((feature, index) => (
    //             <li
    //               className={`flex items-center gap-2 ${
    //                 plan.highlighted ? "text-white" : "text-black"
    //               }`}
    //               key={index}
    //             >
    //               {!plan.highlighted ? <FaCirclePlus /> : <img src={pl} />}{" "}
    //               {feature}
    //             </li>
    //           ))}
    //         </ul>
    //         <Link
    //           to={"/price"}
    //           className={`mt-6 w-full text-center inline-block font-bold hover:scale-105 transition-transform duration-500 uppercase py-2 px-4 rounded ${
    //             plan.highlighted
    //               ? "bg-white border-2 text-black border-green-500"
    //               : "bg-green-500 text-white"
    //           }`}
    //         >
    //           Get Started
    //         </Link>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default PricingPlan;
