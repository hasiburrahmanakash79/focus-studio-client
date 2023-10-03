import useTitle from "../../Hook/useTitle";
import useClasses from "../../Hook/useClasses";
import ClassDetails from "./ClassDetails";
import { useState } from "react";
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
    <div className="pt-12">
      <div className="bg-[url('https://i.ibb.co/DY9pPK8/titlebg.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/40 text-center mt-5 text-yellow-600">
          <p>Make Your Dream</p>
          <h2 className="text-3xl md:text-6xl font-semibold uppercase py-2">
            Our All Courses
          </h2>
        </div>
      </div>
      <div className="p-5 container mx-auto">
        <h1 className="md:text-4xl text-2xl text-center font-semibold mb-5">
          Our Total paid course is {classes.length}
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
              See More Course
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
