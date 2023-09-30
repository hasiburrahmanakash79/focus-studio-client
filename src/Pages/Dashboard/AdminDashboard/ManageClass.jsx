
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "react-query";

const ManageClass = () => {
  useTitle("ManageClass");

  const {data: classes = []} = useQuery({
    queryKey: ['pending'],
    queryFn: async () => {
        const res = fetch("https://focus-studio-server.vercel.app/status/pending");
        const data = res.json();
        return data
        
    }
    
})
console.log(classes);

  return (
    <div>
      <SectionTitle title={"manage Class"}></SectionTitle>
      <div className="p-5">
        <div className="overflow-x-auto rounded-xl border">
          <table className="table">
            <thead className="bg-slate-100 uppercase">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Instructor Name</th>
                <th>Email</th>
                <th>Total seat</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td><button className="btn">Approve</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClass;
