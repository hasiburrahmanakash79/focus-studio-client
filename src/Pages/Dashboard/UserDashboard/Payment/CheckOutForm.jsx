import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOutForm = ({ tutorial, price }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((data) => {
        setClientSecret(data.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

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
      console.log(paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "User",
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setSuccess(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: tutorial.length,
        classID: tutorial._id,
        classNames: tutorial.name,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: "Payment Successful",
            icon: "success",
          });
          const id = tutorial.id;
          fetch(`https://focus-studio-server.vercel.app/payment_update/${id}`, {
            method: "PUT",
          })
            .then((res) => {
              console.log(res);
            })
            
        }
      });
    }
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
        <div className="text-center">
          <button
            className="btn btn-primary btn-sm mt-5"
            type="submit"
            disabled={!stripe || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && (
        <p className="text-green-500 text-center">
          {" "}
          Complete Your Payment. Your Transaction ID: {success}{" "}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
