import { Link } from "react-router-dom";

const ClassDetails = ({tutorial}) => {
    const {name, image, instructor_name, available_seat, price, category} = tutorial
  return (
    <div className="border p-3 rounded-md hover:border-yellow-300">
      <div className="avatar">
        <div className="w-full rounded">
          <img src={image} />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p>Instructor name: {instructor_name} </p>
        <p>Available seats: {available_seat} </p>
        <p>Price: ${price} </p>
        <p>Category: {category} </p>
      </div>
      <div className="text-end">
        <Link>
          <button className="btn btn-sm my-3">Select Class</button>
        </Link>
      </div>
    </div>
  );
};

export default ClassDetails;
