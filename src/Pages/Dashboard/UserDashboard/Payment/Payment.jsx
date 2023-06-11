import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import useAddToCart from "../../../../Hook/useAddToCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);

const Payment = () => {
  const [classes] = useAddToCart()
  const totalPrice = classes.reduce((sum, tutorial) => sum + tutorial.price, 0);
  const price = parseFloat(totalPrice.toFixed(2))
  return (
    <div className="p-10
    ">
      <SectionTitle title={"Payment"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm price={price} classes={classes}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
