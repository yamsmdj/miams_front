import React from 'react';

const Error404 = () => {
    return (
        <div  className="grow">
            <h1 className='font-bold text-7xl text-center'>Page Introuvable ou inexistante</h1>
            <img src="/assets/recettes/404.jpg" alt="404" className='mx-auto' />
        </div>
    );
};

export default Error404;