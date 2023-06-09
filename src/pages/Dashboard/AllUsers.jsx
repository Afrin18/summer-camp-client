import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
// import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllUsers = () => {
    // const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        // const res = await axiosSecure.get('/users')
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Manage Users</title>
            </Helmet>
            {users.length}
        </div>
    );
};

export default AllUsers;