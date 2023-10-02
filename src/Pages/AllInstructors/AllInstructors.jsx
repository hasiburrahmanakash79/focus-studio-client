import { useContext, useState } from "react";
import useInstructors from "../../Hook/useInstructors";
import useTitle from "../../Hook/useTitle";
import InstructorCart from "./InstructorCart";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../components/Loading/Loading";

const AllInstructors = () => {
  useTitle("All Instructor");
  const {loading} = useContext(AuthContext)
  const [seeMore, setSeeMore] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);

  const [instructors] = useInstructors();

  const handleSeeMore = () => {
    setSeeMore(true);
    setDisplayCount(instructors.length);
  };

  if(loading){
    return <Loading/>
  }

  return (
    <div className="pt-16">
      <div className="p-5 py-16 mt-5 bg-black text-center text-yellow-600">
        <p>Our honorable Instructor</p>
        <h2 className="text-3xl md:text-6xl font-semibold uppercase py-2">
          Make Your Dream
        </h2>
      </div>
      <div className="pt-16 container mx-auto">
        <div className="md:grid grid-cols-3 gap-5 py-5">
          {instructors.slice(0, displayCount).map((instructor) => (
            <InstructorCart
              key={instructor._id}
              instructor={instructor}
            ></InstructorCart>
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
    </div>
  );
};

export default AllInstructors;
