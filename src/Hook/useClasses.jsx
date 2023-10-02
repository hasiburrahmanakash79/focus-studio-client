import { useQuery } from "react-query";

const useClasses = () => {
  const { data: classes = [], refetch } = useQuery(["Courses"], async () => {
    const res = await fetch("https://focus-studio-server.vercel.app/classes");
    return res.json();
  });
  return [classes, refetch];
};

export default useClasses;
