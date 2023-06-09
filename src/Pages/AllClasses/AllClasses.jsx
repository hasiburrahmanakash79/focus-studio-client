import useTitle from "../../Hook/useTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClasses from "../../Hook/useClasses";
import ClassDetails from "./ClassDetails";
import {  useState } from "react";
const AllClasses = () => {
  useTitle("All Classes");
  const [seeMore, setSeeMore] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);

  const [classes] = useClasses();

  const handleSeeMore = () => {
    setSeeMore(true);
    setDisplayCount(classes.length);
  };

  return (
    <div className="pt-24">
      <SectionTitle
        title={"All Classes"}
        subTitle={"Make Your Dream"}
      ></SectionTitle>
      <h1 className="md:text-4xl text-2xl text-center font-semibold">
        Our Total paid tutorial is {classes.length}
      </h1>
      <div className="md:grid grid-cols-4 gap-5 py-5">
        {classes.slice(0, displayCount).map((tutorial) => (
          <ClassDetails key={tutorial._id} tutorial={tutorial}></ClassDetails>
        ))}
      </div>
      <div className="text-center my-5">
        {!seeMore && (
          <button
            onClick={handleSeeMore}
            className="btn btn-primary btn-outline"
          >
            See More classes
          </button>
        )}
      </div>
    </div>
  );
};

export default AllClasses;
