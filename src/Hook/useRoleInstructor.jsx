import { useContext } from 'react';
import { useQuery } from "react-query";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useRoleInstructor = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log(res);
            return res.data.instructor;
            
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useRoleInstructor;