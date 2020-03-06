import React from 'react';

import Header from '../../Components/Header/Header'
import Carousel from './Carousel/Carousel'

const Home = props => {
    return (
        <React.Fragment>
            <Header />
            <Carousel />
        </React.Fragment>
    );
}

export default Home;