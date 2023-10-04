import { useParams } from "react-router-dom";
import useBlog from "../../components/useBlog/useBlog";

const BlogDetails = () => {
  const [blogs] = useBlog();
  const { id } = useParams();
  const BlogDetails = blogs.find((blog) => blog._id === id);
  console.log(BlogDetails);
  //   const { title, description, image, publish_date, writer_name } = BlogDetails;
  return (
    <div className="pt-12">
      <div className="bg-[url('https://i.ibb.co/DY9pPK8/titlebg.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/40 text-center mt-5 text-yellow-600">
          <p>Gain more knowledge</p>
          <h2 className="text-3xl md:text-6xl font-semibold uppercase py-2">
            Blogs
          </h2>
        </div>
      </div>
      <div className="container mx-auto p-5 md:p-16">
        <div className="overflow-hidden">
          <h2 className="text-5xl mb-10 text-center font-semibold">{BlogDetails?.title}</h2>
          <div className="relative">
            <img
              src={BlogDetails?.image}
              alt={BlogDetails?.title}
              className="w-1/2 mx-auto object-cover object-center"
            />
          </div>
          <div className="py-4 text-center px-6">
            <p className="text-sm">Published on: {BlogDetails?.publish_date}</p>
            <p className="text-sm">Writer: {BlogDetails?.writer_name}</p>
          </div>
          <p className="text-lg mt-2">{BlogDetails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
