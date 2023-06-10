import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";

const CheckOutForm = ({ price }) => {
  const {user} = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((data) => {
      console.log(data.data.clientSecret);
      setClientSecret(data.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("error", error.message);
    } else {
      setError(" ");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'User',
            email: user?.email
          },
        },
      });
      if(confirmError){
        console.log(confirmError);
      }
      // console.log(paymentIntent);
  };
  return (
    <div>
      <form className="md:w-1/2 mx-auto my-10" onSubmit={handleSubmit}>
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
          className="btn btn-primary btn-sm mt-5"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default CheckOutForm;
