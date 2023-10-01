import useTitle from "../../Hook/useTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const About = () => {
  useTitle("About");

  return (
    <div className="pt-16">
      <SectionTitle title={"about"}></SectionTitle>
      <div className="md:flex items-center justify-center p-5 gap-10 ">
        <div className="md:w-1/2 mb-3">
          <img
            src="https://i.ibb.co/TqNnpjX/Logo-SILVER.png"
            className="w-32 "
            data-aos="zoom-in"
          />
          <h1 className="text-3xl font-semibold border-l-8 border-x-slate-400 p-3 my-5">
            Focus Studio
          </h1>
          <p>
            <span className="text-purple-600 text-xl font-semibold">
              Welcome to Focus Studio,
            </span>{" "}
            a premier photography institute dedicated to nurturing and honing
            the creative skills of aspiring photographers. At Focus Studio, we
            believe that photography is not just about capturing moments but
            also about telling compelling stories through images.
            <br />
            With a team of experienced and passionate instructors, we offer a
            wide range of courses designed to cater to photographers of all
            levels, from beginners to advanced enthusiasts. Our institute is
            equipped with state-of-the-art facilities, including well-equipped
            studios, darkrooms, and the latest photography equipment, providing
            our students with the perfect environment to unleash their artistic
            potential.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            className="rounded-md shadow-xl"
            src="https://i.ibb.co/tZsnTLm/about.jpg"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
