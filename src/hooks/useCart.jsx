import { useQuery } from '@tanstack/react-query';
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const useCart = () => {
    const { user } = useContext(AuthContext);
    
    const { refetch, data : cart = [] } = useQuery({
        queryKey: ['courses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectcls?email=${user?.email}`)
            return res.json();
        },
    })
    return [cart, refetch]
}
export default useCart;