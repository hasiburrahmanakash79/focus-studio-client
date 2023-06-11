import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import useAddToCart from "../../../../Hook/useAddToCart";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);

const Payment = () => {
  const [classes] = useAddToCart()
  const {id} = useParams()
  const tutorial = classes.filter(singleClass => singleClass._id === id )
  console.log(tutorial);
  return (
    <div className="p-10
    ">
      <SectionTitle title={"Payment"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm price={tutorial[0]?.price} tutorial={tutorial[0]}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
