const PopularClassCart = ({ popular }) => {
  const { image, name, instructor_name, available_seat, category } = popular;
  return (
    <div className="border p-3  hover:shadow-xl hover:border-2 shadow rounded-md mb-5">
      <div className="avatar">
        <div className="w-full rounded">
          <img src={image} />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-md font-semibold">Instructor name: {instructor_name} </p>
        <p>Available seats: {available_seat} </p>
        <p>Category: {category} </p>
      </div>
    </div>
  );
};

export default PopularClassCart;
