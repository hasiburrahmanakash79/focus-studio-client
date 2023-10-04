import { useQuery } from "react-query";

const useBlog = () => {
  const { data: blogs = [], refetch } = useQuery(["blogs"], async () => {
    const res = await fetch("https://focus-studio-server.vercel.app/blogs");
    return res.json();
  });
  return [blogs, refetch];
};

export default useBlog;