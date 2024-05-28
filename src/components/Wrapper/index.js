import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const index = ({children}) => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default index;