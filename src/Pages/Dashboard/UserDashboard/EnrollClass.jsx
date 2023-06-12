import { useContext, useEffect, useState } from "react";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";

const EnrollClass = () => {
  useTitle("Your Class");
  const [allClasses, setAllClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://focus-studio-server.vercel.app/history/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
      });
  }, [user]);
  return (
    <div className="p-7">
      <SectionTitle title={"your enroll classes"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5">
        {allClasses.map((classes) => (
          <div
            key={classes._id}
            className="card md:card-side bg-base-100 shadow-lg p-3 mt-2 border"
          >
            <div className="avatar w-52">
              <div className=" rounded-lg">
                <img src={classes?.image} />
              </div>
            </div>
            <div className="card-body font-semibold">
              <h2 className="card-title">{classes?.classNames}</h2>
              <p>Instructor: {classes?.instructor}</p>
              <button className="btn">Start Class</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollClass;
