import React from 'react';
import Banner from '../Home/Banner';
import Classes from '../Home/Classes';
import Instructors from '../Home/Instructors';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Summer Camp | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;