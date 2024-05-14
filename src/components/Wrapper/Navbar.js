import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Icons/Logo.svg";
import Connexion from "../../assets/Icons/user.svg";
import Shop from "../../assets/Icons/shop.svg";
import Logout from "../../assets/Icons/logout.svg";
import setting from "../../assets/Icons/setting.svg";
import MenuBurger from "../MenuBurger";
import { jwtDecode } from "jwt-decode";
import React from "react";


const Navbar = () => {
  
  const token = localStorage.getItem("token");
  let roles = [];
  let email = '';


  if (token) {
    const decodedToken = jwtDecode(token);
    roles = decodedToken.roles;
    email = decodedToken.username;
  }
let username = email.split('@')[0];

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  let location = useLocation();




  return (
    <>
      {location.pathname !== "/admin" && (
        <nav className="relative bg-gray-300 py-3">
          <div className="flex justify-between items-center text-center mx-5  ">
            <div>
              <MenuBurger />
            </div>
            {token &&
            <p>Bienvenu <strong>{username}</strong> </p>
            }
            <div className="hidden lg:block">
              <NavLink to="/">
                <img src={Logo} alt="logo" />
                <h1>Miam's</h1>
              </NavLink>
            </div>
            {/* <SearchBar onSearch={onSearch} /> */}
            <div className="flex items-center justify-evenly md:w-3/12 ">
              {roles.includes("ROLE_ADMIN") && (
                <NavLink to="/admin/dashboard">
                  <img src={setting} alt="dashboard" className="mx-auto" />
                  <p>Dashboard</p>
                </NavLink>
              )}
              <div className="hidden lg:block">
                <NavLink to="/admin/dashboard">
                  <img src={Shop} alt="Boutique" className="mx-auto" />
                  <p>Boutique</p>
                </NavLink>
              </div>
              <div className="w-1/2">
                {token ? (
                  <div className="flex">
                    <div className="hidden lg:flex w-1/2 items-center ">
                      <NavLink to="/moncompte">
                        <img src={Connexion} alt="Logo de connexion" className="mx-auto" />
                        <p>Mon Compte</p>
                      </NavLink>
                    </div>
                    <div>
                    <NavLink to="/logout" onClick={logout}>
                      <img src={Logout} alt="Logo de deconnexion" className="mx-auto" />
                      <p>déconnection</p>
                    </NavLink>
                    </div>
                  </div>
                ) : (
                  <NavLink to="connexion">
                    <img
                      src={Connexion}
                      alt="Logo de connexion"
                      className="mx-auto"
                    />
                    <p>Connexion</p>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
