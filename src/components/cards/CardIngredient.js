import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CardIngredient = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:8000/api/ingredient")
        .then((res) => {
          setIngredients(res.data);

        })
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la récupération des ingredients : ",
            error
          );
        });
    }, []);
    return (
      <section>
        <h1 className="mt-8 text-3xl font-bold text-center uppercase">Découvrez nos recettes par leurs ingrédients</h1>
        <div className="grid grid-cols-3 md:grid-cols-5  lg:grid-cols-8 w-10/12 m-auto my-7 ">
          {ingredients ? (
            ingredients.slice(0,8).map((ingredient, index) => (
              <div key={index} className="flex flex-col items-center transform hover:scale-150 duration-500 py-3 hover:bg-orange-500">
                <NavLink to={`/recette/ingredient/${ingredient.name}`}>
                  {ingredient.name ? (
                    <img
                      src={`assets/ingredients/fruitslegumes/${ingredient.name.replace(/\s+/g, "_")}.jpg`}
                      alt={ingredient.name}
                      className="h-12 object-cover rounded-xl"
                    />
                  ) : (
                    <p>Pas d'image disponible</p>
                  )}
                </NavLink>
                <p className="mt-2 text-center">
                  <strong>{ingredient.name}</strong>
                </p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    );

};

export default CardIngredient;