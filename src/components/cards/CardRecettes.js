import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CardRecettes = ({recettes}) => {

  return (
    <>
      {recettes.map((recette, index) => (
        <div  key={index} className="flex flex-col justify-around w-full px-6 pb-6 rounded-xl hover:bg-orange-500 hover:text-white ">
          <p>
            <strong>{recette.title}</strong>
          </p>
          <div>
            <NavLink
              to={`/recette/title/${recette.title?.replace(/\s+/g, "_")}`}
            >
              {recette.title ? (
                <img
                  src={`http://localhost:8000/api/assets/recettes/${recette.picture}`}
                  alt={recette.title}
                  className="h-52 object-cover mx-auto rounded-xl"
                />
              ) : (
                <p>Pas d'image disponible</p>
              )}
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardRecettes;
