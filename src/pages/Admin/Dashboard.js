import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Icons/Logo.svg'

const Dashboard = () => {

    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showChefDropdown, setShowChefDropdown] = useState(false);

    
    
    const toggleCategoryDropdown = () => {
        setShowCategoryDropdown(!showCategoryDropdown);
    };
    const toggleChefDropdown = () => {
        setShowChefDropdown(!showChefDropdown);
    };

    return (
        
        <div className='flex justify-center w-1/6 py-12 bg-purple-200'>
            <div className="flex flex-col">
                <div>
                    <img src={Logo} alt="" className='mx-auto'/>
                </div>
                <h2 className='font-bold my-2 text-center'>Dashboard</h2>

                {/* <div onClick={toggleCategoryDropdown} className="flex items-center flex-col  cursor-pointer relative">

                    <div className='flex flex-row'>
                        <NavLink className="flex items-center flex-row  text-2xl">
                            <h2>Categories</h2>
                            <span className={`ml-1 transform ${showCategoryDropdown ? '0' : 'rotate-90'} transition duration-300 ease-in-out`}>&#9660;</span>
                        </NavLink>
                    </div>
                    {showCategoryDropdown && (
                        <ul className="text-sm">
                            <li className='hover:underline'>
                                <NavLink className="flex items-center flex-col">
                                    <p>Entrée</p>
                                </NavLink>
                            </li>
                            <li className='hover:underline'>
                                <NavLink  className="flex items-center flex-col ">
                                    <p>Plats</p>
                                </NavLink>
                            </li>
                            <li className='hover:underline'>
                                <NavLink  className="flex items-center flex-col ">
                                    <p>Dessert</p>
                                </NavLink>
                            </li>
                            <li className='hover:underline'>
                                <NavLink  className="flex items-center flex-col ">
                                    <p>Boisson</p>
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div> */}

            </div>
            </div>
           
    );
};

export default Dashboard;