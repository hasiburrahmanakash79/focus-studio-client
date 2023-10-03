import { FaMedal, FaPassport, FaUserGraduate, FaUserTie } from "react-icons/fa";

const Information = () => {
  return (
    <div className="md:grid grid-cols-4 text-center text-white">
      <div className="p-24 bg-orange-600 space-y-4 flex flex-col items-center justify-center">
        <FaUserTie className="text-5xl" />
        <h1 className="text-2xl font-semibold">Our Certified instructors</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
      </div>
      <div className="p-24 bg-blue-950 space-y-4 flex flex-col items-center justify-center">
        <FaUserGraduate className="text-5xl" />
        <h1 className="text-2xl font-semibold">Our Graduate</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
      </div>
      <div className="p-24 bg-orange-600 space-y-4 flex flex-col items-center justify-center">
        <FaMedal className="text-5xl" />
        <h1 className="text-2xl font-semibold">Give Award</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
      </div>
      <div className="p-24 bg-blue-950 space-y-4 flex flex-col items-center justify-center">
        <FaPassport className="text-5xl" />
        <h1 className="text-2xl font-semibold">Provide Certificate</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
      </div>
    </div>
  );
};

export default Information;
