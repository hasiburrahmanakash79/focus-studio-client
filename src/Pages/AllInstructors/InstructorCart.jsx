import { FcApproval } from "react-icons/fc";

const InstructorCart = ({ instructor }) => {
  const { name, image, classesTaken, email, popularClassName } = instructor;
  return (
    <div className="card md:card-side bg-blue-100/20 shadow-lg p-3 mt-2 border">
      <div className="avatar">
        <div className="md:w-52 rounded-lg">
          <img src={image} />
        </div>
      </div>
      <div className="card-body font-semibold">
        <h2 className="card-title">
          {name} <FcApproval></FcApproval>
        </h2>
        <a className="text-blue-700 hover:underline">{email}</a>
        <p>Number of Classes taken: {classesTaken}</p>
        <p>Name of a Class: {popularClassName}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">See classes</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCart;
