import Lottie from "lottie-react";
import useTitle from "../../Hook/useTitle";
import contactAnimation from "../../assets/contact.json";

const Contact = () => {
  useTitle("Contact");
  return (
    // <div>
    <div className="pt-12">
      <div className="bg-[url('https://i.ibb.co/DY9pPK8/titlebg.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/40 text-center mt-5 text-yellow-600">
          <p>You can reach us</p>
          <h2 className="text-3xl md:text-6xl font-semibold uppercase py-2">
            Contact
          </h2>
        </div>
      </div>
      <div className="p-5 container mx-auto">
        <div className="my-7 md:grid grid-cols-4 gap-5 text-center">
          <div className="border bg-accent rounded-lg p-7 shadow-xl">
            <h1 className="text-2xl font-semibold">Address</h1>
            <p className="text-lg">Dhanmondi-32, Shongkor, Dhaka</p>
          </div>
          <div className="border bg-accent rounded-lg p-7 shadow-xl">
            <h1 className="text-2xl font-semibold">Phone</h1>
            <p className="text-lg">+880 9457 3421</p>
          </div>
          <div className="border bg-accent rounded-lg p-7 shadow-xl">
            <h1 className="text-2xl font-semibold">Email</h1>
            <p className="text-lg">focus@studio.com</p>
          </div>
          <div className="border bg-accent rounded-lg p-7 shadow-xl">
            <h1 className="text-2xl font-semibold">Website</h1>
            <p className="text-lg">hr-akash.com</p>
          </div>
        </div>
        <div className="mockup-window border">
          <div className="md:grid grid-cols-2 items-center gap-5 p-10 border-t">
            <div>
              <Lottie animationData={contactAnimation} loop={true} />
            </div>
            <div className="text-lg">
              <form action="" className="space-y-6">
                <input
                  type="text"
                  name=""
                  placeholder="Name"
                  className=" w-full p-3 border-2 bg-transparent"
                />
                <input
                  type="email"
                  name=""
                  placeholder="Email"
                  className=" w-full p-3 border-2 bg-transparent"
                />
                <textarea
                  name=""
                  rows="4"
                  placeholder="Message"
                  className="w-full p-3 border-2 bg-transparent"
                ></textarea>
                <input
                  type="submit"
                  className=" w-full btn btn-primary btn-outline font-bold p-3 border-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
