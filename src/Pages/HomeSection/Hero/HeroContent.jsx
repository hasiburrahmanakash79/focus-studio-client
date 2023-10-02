import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="items-center grid-cols-2 gap-10 md:grid container pt-14 mx-auto">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1582994254571-52c62d96ebab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="rounded-xl"
          alt=""
        />
      </div>
      <div className="text-center md:text-left">
        <p>Welcome To </p>
        <h1 className="my-3 text-6xl font-bold uppercase">Studio Focus (:</h1>
        <p className="backdrop-blur-md">
          "Studio Focus, the preeminent online photography institute, is
          dedicated to elevating your photography skills to new heights. Our
          comprehensive curriculum, meticulously crafted by industry-leading
          professionals, provides a solid foundation in photography techniques,
          equipment mastery, and artistic vision."
        </p>
        <div>
          <Link>
            <button className="btn btn-secondary mt-9">Explore Our Courses</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
