import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const stripePromise = loadStripe('');

const Payment = () => {
  return (
    <div>
      <SectionTitle title={"Payment"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}></Elements>
      </div>
    </div>
  );
};

export default Payment;
