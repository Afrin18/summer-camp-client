import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li><Link><b>Home</b></Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Classes</Link></li>
    </>

    return (
            <div className="navbar max-w-screen-lg fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navItems}
                        </ul>
                    </div>
                    <p className="normal-case text-2xl font-semibold">Summer Camp<br/><small>photography</small></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
    );
};

export default Navbar;