const SingleBlog = ({ blog }) => {
  const { title, description, image, publish_date, writer_name } =
    blog;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover object-center"
        />
      </div>
      <div className="py-4 px-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm">Published on: {publish_date}</p>
        <p className="text-sm">Writer: {writer_name}</p>
        <p className="text-base mt-2">{description.slice(0, 120)}</p>
        
      </div>
    </div>
  );
};

export default SingleBlog;
