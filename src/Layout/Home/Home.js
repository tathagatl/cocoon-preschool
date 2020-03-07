import React from 'react';

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Carousel from './Carousel/Carousel';
import Programmes from './Programmes/Programmes'

const Home = props => {
    return (
        <React.Fragment>
            <Header />
            <Carousel />
            <Programmes />
            <Footer />
        </React.Fragment>
    );
}

export default Home;