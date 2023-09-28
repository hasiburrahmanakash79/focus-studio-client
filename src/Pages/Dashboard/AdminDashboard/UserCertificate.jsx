import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const UserCertificate = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/history")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        console.log(data);
      });
  }, []);
  const handleCertificate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to provide certificate",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
      }
    });
  };
  return (
    <div className="p-7">
      <SectionTitle title={"provide student certificate"}></SectionTitle>

      <div className="overflow-x-auto rounded-xl border">
        <table className="table">
          <thead className="bg-slate-100 uppercase">
            <tr>
              <th>Image</th>
              <th>Course Name</th>
              <th>Student Email</th>
              <th>Instructor Name</th>
              <th>Enroll date</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((finish) => (
              <tr key={finish._id}>
                <td>
                  <div className="avatar">
                    <div className="w-32 rounded">
                      <img src={finish.image} />
                    </div>
                  </div>
                </td>
                <td>{finish.classNames}</td>
                <td className="text-lg font-bold">{finish.email}</td>
                <td>{finish.instructor}</td>
                <td>{finish.date}</td>

                <td>
                  <button
                    onClick={() => handleCertificate(finish._id)}
                    className="btn"
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCertificate;
