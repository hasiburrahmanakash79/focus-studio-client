import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useQuery } from "react-query";

const UserCertificate = () => {
  const { data: classes = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://focus-studio-server.vercel.app/history");
    return res.json();
  });

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
        fetch(`https://focus-studio-server.vercel.app/history/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.modifiedCount) {
              Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                title: "Done",
                icon: "success",
              });
            }
          });
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
                  {finish.certificate === "yes" ? (
                    <p>Done</p>
                  ) : (
                    <button
                      onClick={() => handleCertificate(finish._id)}
                      className="btn"
                    >
                      Complete
                    </button>
                  )}
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
