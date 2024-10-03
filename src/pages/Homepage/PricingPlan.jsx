import { FaCirclePlus } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import pl from "../../assets/pl.png";
const pricingPlans = [
  {
    id: 1,
    type: "Premium",
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
    type: "Premium",
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
    type: "Premium",
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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Pricing Plan</h2>
      <div className="flex justify-center gap-6 px-2 md:px-6 lg:px-12 ">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`${
              plan.highlighted ? "bg-[#27C661] scale-y-105 text-white" : "bg-white"
            } shadow-lg min-w-[300px] rounded-lg p-6 w-full`}
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
            <ul className="mt-4 space-y-2 text-gray-600">
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
            <button
              className={`mt-6 font-bold hover:scale-105 transition-transform duration-500 w-full py-2 px-4 rounded ${
                plan.highlighted
                  ? "bg-white  border-2 text-black border-green-500"
                  : "bg-green-500 text-white"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
