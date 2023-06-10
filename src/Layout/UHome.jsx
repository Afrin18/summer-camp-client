import { Helmet } from 'react-helmet-async';

const UHome = () => {
    return (
        <div>
            <Helmet>
                <title>Summer Camp | Dashboard</title>
            </Helmet>
            {/* <h1 className='text-4xl font-bold'>***Welcome To Your DASHBOARD***</h1> */}
            <img src="https://blog.bonus.ly/hubfs/welcome.png" alt=""/>
        </div>
    );
};

export default UHome;