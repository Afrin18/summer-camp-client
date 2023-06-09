import { Outlet, NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaUsers } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Summer Camp | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
                        {/* Sidebar content here */}
                        <h2 className='text-2xl mt-4 font-semibold'>Admin Dashboard</h2>
                        <div className="divider"></div>
                        <li><NavLink to='/dashboard/mngCls'><FaBook></FaBook>Manage Classes</NavLink></li>
                        <li><NavLink to='/dashboard/mngUser'><FaUsers></FaUsers>Manage Users</NavLink></li>
                        <li><NavLink to='/dashboard/myCourse'><FaUsers></FaUsers>Selected Classes</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/instructor'><FaUsers></FaUsers>Instructors</NavLink></li>
                        <li><NavLink to='/classes'><FaBook></FaBook>Classes</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;