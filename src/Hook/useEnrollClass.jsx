import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useEnrollClass = () => {
    const {user,loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['enroll', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure(`history/${user?.email}`)
            return res.data;
        },
      })
      return [enroll, refetch]
};

export default useEnrollClass;