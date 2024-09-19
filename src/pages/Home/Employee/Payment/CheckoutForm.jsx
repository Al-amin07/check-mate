import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Checkout.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({ packages }) => {
  const navigate = useNavigate();
  console.log(packages);
  const stripe = useStripe();
  const {
    userDetails: { user: paidUser },
  } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const elements = useElements();
  console.log(paidUser);
  const datas = { ...packages };
  console.log(datas);
  delete datas._id;
  console.log(datas);
  useEffect(() => {
    if (packages?.price && packages?.price > 1)
      getClientSecret({ price: packages?.price });
  }, []);
  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post("/create-payment-intent", price);
    console.log(data);
    setClientSecret(data.clientSecret);
  };
  console.log(clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error?.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: paidUser?.email,
            name: paidUser?.name,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setProcessing(false);
      setCardError(confirmError?.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const userData = {
        name: paidUser?.name,
        email: paidUser?.email,
        companyDetails: {
          companyName: paidUser?.companyName,
          companySize: paidUser?.companySize,
        },
        subscriptionDetails: {
          plan: packages?.name,
          price: packages?.price,
        },
        bookedAt: new Date(),
        transactionId: paymentIntent?.id,
      };

      console.table(userData);
      try {
        const { data } = await axiosSecure.put("/subscribe", {
          userData,
          datas,
        });
        console.log(data);
        if (data?.result?.insertedId) {
          toast.success("Subscription plan Booked!!!");
          navigate("/");
        }
      } catch (error) {
        toast.error(error?.message);
      } finally {
        setProcessing(false);
      }
    }
    setProcessing(false);
  };

  return (
    <div className="max-w-lg p-6 bg-white rounded-lg">
      <h2 className="text-5xl font-bold  mb-4">Lets Make Payment</h2>
      <p className="text-xl from-emerald-50 mb-8">
        To start your subscription, input your card details to make payment
      </p>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bgc mt-4 py-2  font-bold px-5 rounded-full text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? (
            <ImSpinner9 size={24} className="animate-spin m-auto" />
          ) : (
            ` Pay $${packages?.price}`
          )}
        </button>
      </form>
      {cardError && <p className=" text-lg text-red-500">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
