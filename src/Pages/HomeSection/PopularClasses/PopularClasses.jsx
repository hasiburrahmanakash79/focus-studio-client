import useClasses from "../../../Hook/useClasses";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularClassCart from "./PopularClassCart";

const PopularClasses = () => {
  const [classes] = useClasses();
  const popularClasses = classes.filter(
    (popularClass) => popularClass.category === "Popular"
  );
  return (
    <div>
      <SectionTitle
        title={"Our Popular class"}
        subTitle={"Design your dream with us"}
      ></SectionTitle>
      <div className="md:grid grid-cols-4 gap-10">
        {popularClasses.map((popular) => (
          <PopularClassCart
            key={popular._id}
            popular={popular}
          ></PopularClassCart>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
