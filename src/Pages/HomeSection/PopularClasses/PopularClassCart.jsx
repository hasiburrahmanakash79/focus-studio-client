const PopularClassCart = ({ popular }) => {
  const { image, name, instructor_name, available_seat } = popular;
  return (
    <div className="border p-3 rounded-md">
      <div className="avatar">
        <div className="w-full rounded">
          <img src={image} />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-md font-semibold">Instructor name: {instructor_name} </p>
        <p>Available seats: {available_seat} </p>
      </div>
    </div>
  );
};

export default PopularClassCart;
