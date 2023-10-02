import useTitle from "../../Hook/useTitle";
import Success from "../HomeSection/Success/Success";
import CompanyStory from "./CompanyStory";

const About = () => {
  useTitle("About");

  return (
    <div className="pt-16">
      <div className="p-5 py-16 bg-black text-center mt-5 text-yellow-600">
        <h2 className="text-3xl md:text-6xl font-semibold uppercase py-2">About Us</h2>
      </div>
      <div>
        <CompanyStory/>
        <Success/>
      </div>
    </div>
  );
};

export default About;
