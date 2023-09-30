import { useState } from "react";
import useInstructors from "../../Hook/useInstructors";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useTitle from "../../Hook/useTitle";
import InstructorCart from "./InstructorCart";

const AllInstructors = () => {
    useTitle("All Instructor");
  const [seeMore, setSeeMore] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);

  const [instructors] = useInstructors()

  const handleSeeMore = () => {
    setSeeMore(true);
    setDisplayCount(instructors.length);
  }

  return (
    <div className="pt-24 container mx-auto">
      <SectionTitle
        title={"Make Your Dream"}
        subTitle={"Our Honourable Instructor"}
      ></SectionTitle>
      <div className="md:grid grid-cols-3 gap-5 py-5">
        {
          instructors.slice(0, displayCount).map(instructor => <InstructorCart key={instructor._id} instructor={instructor}></InstructorCart>)
        }
      </div>
      <div className="text-center my-5">
        {!seeMore && (
          <button onClick={handleSeeMore} className="btn btn-primary btn-outline">
            See More classes
          </button>
        )}
      </div>
    </div>
  );
};

export default AllInstructors;