import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularInstructor = () => {
  return (
    <div>
      <SectionTitle
        title={"Our most Popular Instructor"}
        subTitle={"Top Rated Instructor"}
      ></SectionTitle>
      <div className="md:grid grid-cols-6 gap-4">
        <div
          className="text-center border rounded-xl p-7"
        >
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl">Harrison Lorenza</h4>
            <p>
              <small>CALIFORNIA</small>
            </p>
            <div className="flex justify-center gap-1 text-yellow-600 my-3">
              {/* <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> */}
              *****
            </div>
            <p>
              I recently purchased a robot from this website and I am extremely
              satisfied with my purchase. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
