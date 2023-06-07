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
      <div className="grid grid-cols-3 gap-5 py-5">
        
      </div>
    </div>
  );
};

export default AllClasses;
