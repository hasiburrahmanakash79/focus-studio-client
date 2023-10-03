import Lottie from "lottie-react";
import useTitle from "../../Hook/useTitle";
import contactAnimation from "../../assets/contact.json";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  useTitle("Contact");
  return (
    <div className="p-5 container mx-auto">
      <SectionTitle title={"contact"}></SectionTitle>
      <div className="mockup-window border">
        <div className="md:grid grid-cols-2 items-center gap-5 p-10 border-t">
          <div>
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
          <div className="text-lg">
            {/* <p className="font-semibold">Contact</p>
          <p className="">Address: Dhanmondi-32, Shongkor, Dhaka</p>
          <p className="">Phone: +777 5654 6565</p>
          <p className="">Email: focus@studio.com</p> */}
            <form action="" className="space-y-6">
              <input
                type="text"
                name=""
                placeholder="Name"
                className=" w-full p-3 border-2"
              />
              <input
                type="email"
                name=""
                placeholder="Email"
                className=" w-full p-3 border-2"
              />
              <textarea
                name=""
                rows="4"
                placeholder="Message"
                className="w-full p-3 border-2"
              ></textarea>
              <input
                type="submit"
                className=" w-full btn btn-primary btn-outline text-white font-bold p-3 border-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
