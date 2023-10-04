import useBlog from "../../components/useBlog/useBlog";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  const [blogs] = useBlog()
  console.log(blogs);
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
      <div className="grid grid-cols-3 container mx-auto my-7">
        {
          blogs.map(blog => <SingleBlog key={blog?._id} blog={blog}></SingleBlog>)
        }
      </div>

    </div>
  );
};

export default Blogs;
