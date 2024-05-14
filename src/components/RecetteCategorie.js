import React from 'react';
import { NavLink } from 'react-router-dom';

const RecetteCategorie = ({title, items, isFirstCategory}) => {
    return (
        <div className= {`${isFirstCategory ? '' : "border-l-2"} border-black pl-12`} >
        <h2 className=" font-bold pb-5">{title}</h2>
        <ul>
            {items.map((item , index) =>(
          <NavLink key={index} to={item.link}>
            <div className="flex items-center">
            <img src={`../../assets/categories/entree.webp`} alt="categories" className='h-8' />
            <li className=" hover:bg-orange-300 hover:py-3 hover:px-4 my-2 hover:rounded-full">{item.label}</li>
            </div>
          </NavLink>
            ))}
        </ul>
      </div>
    );
};

export default RecetteCategorie;