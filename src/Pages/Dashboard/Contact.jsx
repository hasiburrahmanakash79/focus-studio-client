import useTitle from "../../Hook/useTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  useTitle('Contact')
  return (
    <div className="p-5">
      <SectionTitle title={"contact"}></SectionTitle>
      <div className="mockup-window border border-base-300">
        <div className="md:flex items-center gap-5 px-4 py-16 border-t border-base-300">
          <div>
            <img src="https://i.ibb.co/4VmdctY/contact.png" alt="" />
          </div>
          <div className="text-2xl">
          <p className="font-semibold">Contact</p>
          <p className="">Address: Dhanmondi-32, Shongkor, Dhaka</p>
          <p className="">Phone: +777 5654 6565</p>
          <p className="">Email: focus@studio.com</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
