import { useQuery } from "react-query";

const useBlog = () => {
  const { data: classes = [], refetch } = useQuery(["Courses"], async () => {
    const res = await fetch("https://focus-studio-server.vercel.app/blogs");
    return res.json();
  });
  return [classes, refetch];
};

export default useBlog;