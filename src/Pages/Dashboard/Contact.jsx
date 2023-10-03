import Lottie from "lottie-react";
import useTitle from "../../Hook/useTitle";
import contactAnimation from "../../assets/contact.json";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  useTitle("Contact");
  return (
    <div className="p-5 container mx-auto">
      <SectionTitle title={"contact"}></SectionTitle>
      <div className='my-7 md:grid grid-cols-4 gap-5 text-center'>
        <div className="border bg-white p-7 shadow-xl">
          <h1 className="text-2xl font-semibold">Address</h1>
          <p className="text-lg">Dhanmondi-32, Shongkor, Dhaka</p>
        </div>
        <div className="border bg-white p-7 shadow-xl">
          <h1 className="text-2xl font-semibold">Phone</h1>
          <p className="text-lg">+880 9457 3421</p>
        </div>
        <div className="border bg-white p-7 shadow-xl">
          <h1 className="text-2xl font-semibold">Email</h1>
          <p className="text-lg">focus@studio.com</p>
        </div>
        <div className="border bg-white p-7 shadow-xl">
          <h1 className="text-2xl font-semibold">Website</h1>
          <p className="text-lg">hrakash.com</p>
        </div>
      </div>
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
