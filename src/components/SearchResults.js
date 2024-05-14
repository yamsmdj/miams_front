import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchResults = () => {
  const [getRecette, setGetRecette] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtreCategorie, setFiltreCategorie] = useState(null); // État pour stocker la catégorie de filtre
  const [ingredients, setIngredients] = useState("");
  const homeLocation = window.location.pathname === "/";
  const [recettesAffichees, setRecettesAffichees] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/recette")
      .then((res) => {
        setGetRecette(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Erreur lors de la recuperations des recettes", e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (ingredients.length > 0) {
      axios
        .get(`http://localhost:8000/api/recette/ingredient/${ingredients}`)
        .then((res) => {
          setGetRecette(res.data);
        })
        .catch((err) => console.error("Erreur", err));
    }
  }, [ingredients]);

  const filtrerParCategorie = (categorie) => {
    const recettesFiltrees = getRecette.filter(
      (recette) => recette.categorie?.name === categorie
    );
    return recettesFiltrees;
  };

  const handleFiltreCategorie = (categorie) => {
    setFiltreCategorie(categorie);
  };
  const getRecipesByIngredient = (value) => {
    setIngredients(value);
    // console.log("ingredient", ingredients);
    // console.log("recette", getRecette);
  };
  useEffect(() => {
    let recettesAffichees = getRecette;

    if (filtreCategorie) {
      recettesAffichees = filtrerParCategorie(filtreCategorie);
    } else if (homeLocation) {
      recettesAffichees = getRecette.slice(0, 3);
    }

    setRecettesAffichees(recettesAffichees); // Mettre à jour les recettes affichées
  }, [getRecette, filtreCategorie, homeLocation]);

  return (
    <section>
      <div className="text-center m-4">
        <h2
          className="text-center hover:underline"
          onClick={() => handleFiltreCategorie("")}
        >
          TOUTES NOS RECETTES :
        </h2>
        {!homeLocation && (
          <div className="flex justify-center gap-3 m-3">
            <button
              onClick={() => handleFiltreCategorie("Entrée")}
              className=" rounded-lg p-3 bg-orange-600 hover:text-white"
            >
              Entrée
            </button>
            <button
              onClick={() => handleFiltreCategorie("Plats")}
              className="mx-2 rounded-lg p-3  bg-orange-600 hover:text-white"
            >
              Plats
            </button>
            <button
              onClick={() => handleFiltreCategorie("Dessert")}
              className=" rounded-lg p-3 bg-orange-600 hover:text-white"
            >
              Dessert
            </button>
          </div>
        )}
        <div className="">
          <input
            type="search"
            className="p-3 w-3/12 border border-black rounded-xl"
            placeholder="Une recette ? un ingredient ?"
            onChange={(e) => {
              e.target.value.length > 0 &&
                getRecipesByIngredient(e.target.value);
            }}
          />
        </div>
      </div>
      {loading ? (
        <p>Chargement ... </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 text-center w-1/2 mx-auto">
          {recettesAffichees.length > 0 ? (
            recettesAffichees.map((recette, index) => (
              <div
                key={index}
                className="flex flex-col justify-around w-full px-6 pb-6 rounded-xl hover:bg-orange-500 hover:text-white "
              >
                <p>
                  <strong>{recette.title}</strong>
                </p>
                <div className="">
                  <NavLink
                    to={`/recette/title/${recette.title.replace(/\s+/g, "_")}`}
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
            ))
          ) : (
            <p>Aucune recette trouvée.</p>
          )}
        </div>
      )}
      <NavLink to="/search">
        <h4 className="p-4 my-8 text-center font-bold hover:underline hover:text-white bg-blue-600 rounded-xl w-2/12 mx-auto">
          Voir toutes les recettes{" "}
        </h4>
      </NavLink>
    </section>
  );
};

export default SearchResults;
