import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useTitle from "../../../Hook/useTitle";
// import useAxiosSecure from "../../../Hook/useAxiosSecure";
// import { useQuery } from "react-query";

const PaymentHistory = () => {
  useTitle("History");
  const [allClasses, setAllClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/history/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
      });
  }, [user]);
  return (
    <div>
      <SectionTitle title={"Payment History"}></SectionTitle>
      <div className="p-7">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-300 text-lg ">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>price</th>
                <th>Transaction ID</th>
                <th>date</th>
                <th>Payment status</th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((classes, index) => (
                <tr key={classes._id}>
                  <th>{index + 1}</th>
                  <td>{classes?.classNames}</td>
                  <td>${classes.price}</td>
                  <td>Transaction ID: {classes?.transactionId}</td>
                  <td>Date: {classes?.date} </td>
                  <td className="text-lg bg-yellow-600 text-center font-semibold">{classes?.status} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
