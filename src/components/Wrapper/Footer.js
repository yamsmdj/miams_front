import React from 'react';
import Facebook from "../../assets/Icons/facebook.svg";
import Insta from "../../assets/Icons/instagram.svg";
import Ytb from "../../assets/Icons/youtube.svg";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='bg-gray-300'>
            <div className="flex justify-around items-center w-1/2 m-auto py-3">
               <NavLink to="https://www.facebook.com/lemiamsvitrolles"> <img src={Facebook} alt="facebook" /></NavLink>
               <NavLink to="https://www.instagram.com/miamsamiens/"> <img src={Insta} alt="instagram" /></NavLink>
               <NavLink to="http://www.youtube.com"> <img src={Ytb} alt="youtube" /></NavLink>
            </div>
            <div className="flex justify-evenly py-3">
                <NavLink><p>Condition d'utilisation</p></NavLink>
                <NavLink><p>Condition generales</p></NavLink>
                <NavLink><p>Politique confidentialité</p></NavLink>
                <NavLink><p>Politique de cookies</p></NavLink>
            </div>
        </footer>
    );
};

export default Footer;