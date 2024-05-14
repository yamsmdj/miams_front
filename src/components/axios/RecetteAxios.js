// Composant RecetteDetail.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Panel from "../../pages/Admin/Dashboard";
import { useParams } from "react-router-dom";
import Accueil from "../../pages/Home/Accueil";

const RecetteAxios = () => {
  const [recette, setRecette] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/recette/`)
      .then((res) => {
        setRecette(res.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération de la recette : ",
          error
        );
      });
  }, []);

  return (
    <div>
      {recette && (
        <>
          <Panel recettes={recette} />
        </>
      )}
    </div>
  );
};

export default RecetteAxios;
