import { Link } from "react-router-dom";
import useTitle from "../../Hook/useTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const AllClasses = () => {
  useTitle("All Classes");

  return (
    <div className="pt-24">
      <SectionTitle
        title={"All Classes"}
        subTitle={"Make Your Dream"}
      ></SectionTitle>
      <div className="md:grid grid-cols-4 gap-5 py-5">
        <div className="border p-3 rounded-md hover:border-yellow-300">
          <div className="avatar">
            <div className="w-full rounded">
              <img src="https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?cs=srgb&dl=pexels-alex-andrews-821749.jpg&fm=jpg" />
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">kasjdhkas</h1>
            <p>Price: </p>
            <p>Rating: </p>
          </div>
          <div className="text-end">
          <Link>
              <button className="btn bg-black btn-sm my-3">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
