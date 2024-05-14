import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

const RecetteByIngredient = () => {
  const [recette, setRecette] = useState([]);
  const { ingredientName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/recette/ingredient/${ingredientName}`)
      .then((res) => {
        setRecette(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.error("Erreur lors de la recuperations des recettes", e);
      });
  }, [ingredientName]);

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-around items-center w-1/2 mx-auto">
        {recette.length > 0 ? (
          recette.map((recipe) => (
            <NavLink to={`/recette/title/${recipe.title}`}>

            
            <div className="flex flex-col">
              {console.log(recipe)}

              <img
                src={`/assets/recettes/${recipe.title.replace(
                  /\s+/g,
                  "_"
                )}.jpg`}
                alt={recipe.title}
                className="min-w-64"
              />
              <p>
                Recette :<strong> {recipe.title}</strong>
              </p>
              <p>
                Temp de recette :<strong> {recipe.time}</strong>
              </p>
            </div>
            </NavLink>
          ))
        ) : (
          <p>Aucune recette avec cette ingredient n'a été trouvé ! </p>
        )}
      </div>
    </section>
  );
};

export default RecetteByIngredient;
