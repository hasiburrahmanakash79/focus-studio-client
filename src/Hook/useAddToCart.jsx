import { useContext } from 'react';
import { useQuery } from 'react-query'
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';

const useAddToCart = () => {
    const {user,loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
      })
      return [classes, refetch]
};

export default useAddToCart;