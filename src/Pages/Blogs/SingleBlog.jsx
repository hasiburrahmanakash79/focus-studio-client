const SingleBlog = ({ blog }) => {
  const { Writer_email, title, description, image, publish_date, writer_name } =
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
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">Published on {publish_date}</p>
        <p className="text-gray-700 text-base mt-4">{description}</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-blue-600 hover:underline hover:text-blue-700 text-sm font-semibold"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
