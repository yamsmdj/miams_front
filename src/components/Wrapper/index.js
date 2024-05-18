import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const index = ({children}) => {
    return (
        <div className='flex flex-col min-vh-100'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default index;