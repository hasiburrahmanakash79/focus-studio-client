import useInstructors from "../../../Hook/useInstructors";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularInstructorCarts from "./PopularInstructorCarts";

const PopularInstructor = () => {
  const [instructors] = useInstructors();
  const PopularInstructors = instructors.filter(
    (instructor) => instructor.category === "popular"
  );
  console.log(PopularInstructors);
  return (
    <div>
      <SectionTitle
        title={"Our most Popular Instructor"}
        subTitle={"Top Rated Instructor"}
      ></SectionTitle>
      <div className="md:grid grid-cols-6 gap-4">
        {PopularInstructors.map((PopularInstructor) => (
          <PopularInstructorCarts
            key={PopularInstructor._id}
            PopularInstructor={PopularInstructor}
          ></PopularInstructorCarts>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
