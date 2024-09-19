import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../../components/Shared/LoadingSpinner";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const SubscriptionForm = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  const { id } = useParams();
  const { data: packages = {}, isLoading } = useQuery({
    queryKey: ["package", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/package/${id}`
      );
      console.log(data);
      return data;
    },
  });
  if (isLoading)
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <p className="text-lg text-slate-700">Loading....</p>
      </div>
    );
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center gap-12 min-h-screen items-center px-6 md:px-16 lg:px-32 ">
      <div className="flex-1">
        <Elements stripe={stripePromise}>
          <CheckoutForm packages={packages} />
        </Elements>
      </div>
      <div className="w-[350px]">
        <h2 className="text-3xl text-green-800 font-medium ">You are Paying</h2>
        <h2 className="text-8xl text-green-950 mt-4 mb-8 font-bold ">
          ${packages?.price}
        </h2>
        
          <ul className="mt-6 border-b-[3px] pb-6 text-[#24402B]   text-left space-y-2 ">
            {packages?.details?.map((lists, index) => (
              <li key={index} className="font-[500]">
                ✔ {lists}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl from-emerald-50 font-bold text-green-950">Tax  </h2>
            <h2 className=" text-xl from-emerald-50 font-bold text-green-950">$ 0</h2>
          </div>
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl from-emerald-50 font-bold text-green-950">Total  </h2>
            <h2 className="text-xl from-emerald-50 font-bold text-green-950">$ {packages?.price}</h2>
          </div>
        
      </div>
    </div>
  );
};

export default SubscriptionForm;
