import { useContext, useEffect, useState } from "react";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyClasses = () => {
  useTitle("MyClass");
  const [allClasses, setAllClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
        console.log(data);
      });
  }, [user]);
  return (
    <div className="p-5">
      <SectionTitle title={"your classes"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-300 text-lg ">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>price</th>
              <th>available Seat</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((classes) => (
              <tr key={classes._id}>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded">
                      <img
                        src={classes?.image}
                      />
                    </div>
                  </div>
                </td>
                <td>{classes?.name}</td>
                <td>${classes?.price}</td>
                <td>{classes?.available_seat} Person</td>
                <td className="text-lg font-semibold">
                  {classes?.status}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
