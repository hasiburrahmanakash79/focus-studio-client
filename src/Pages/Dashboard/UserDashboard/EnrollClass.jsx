// import { useContext, useEffect, useState } from "react";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import useEnrollClass from "../../../Hook/useEnrollClass";

const EnrollClass = () => {
  useTitle("Your Class");
  const [enroll] = useEnrollClass()
  return (
    <div className="p-7 container mx-auto">
      <SectionTitle title={"your enroll classes"}></SectionTitle>
      <div className="grid md:grid-cols-3 gap-5">
        {enroll.map((classes) => (
          <div
            key={classes?._id}
            className="card md:card-side bg-base-100 shadow-lg p-3 mt-2 border"
          >
            <div className="avatar md:w-52">
              <div className=" rounded-lg">
                <img src={classes?.image} />
              </div>
            </div>
            <div className="card-body font-semibold">
              <h2 className="card-title">{classes?.classNames}</h2>
              <p>Instructor: {classes?.instructor}</p>
              {classes.certificate === "yes" ? (
                <Link to={`/certificate/${classes._id}`} className="btn">
                  Your course complete
                </Link>
              ) : (
                <button className="btn">Start Class</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollClass;
