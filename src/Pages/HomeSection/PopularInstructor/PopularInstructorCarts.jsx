import { FaStar } from "react-icons/fa";

const PopularInstructorCarts = ({ PopularInstructor }) => {
  const { name, popularClassName, image } = PopularInstructor;
  return (
    <div className="text-center border rounded-xl p-7">
      <div className="avatar">
        <div className="w-32 rounded-full">
          <img src={image} />
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-semibold">{name}</h4>
        <p>
          <small>{popularClassName}</small>
        </p>
        <div className="flex justify-center gap-1 text-yellow-600 my-3">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCarts;
