import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Categorie = () => {
  const [categorie, setCategorie] = useState([]);
  const { categorieId } = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/categorie/${categorieId}`)
      .then((res) => {
        setCategorie(res.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération de la categorie : ",
          error
        );
      });
  }, [categorieId]);
  return (
    <div>
      <section>
        {console.log(categorie)}
        {/* <h1 className=" w-8/12 mx-auto text-3xl bg-orange-500 text-center">{categorie.name}</h1> */}
        {categorie && (
          <div className="grid grid-cols-1 md:grid-cols-4 mx-auto w-8/12 text-white font-bold text-center bg-orange-500">
            {categorie.recette?.map((recette, index) => (
              <div key={recette.id}>
                <p className="mt-4" >{recette.title}</p>
                <NavLink to={`/recette/title/${recette.title.toLowerCase().replace(/\s+/g,"_")}`}>
                  <img
                    src={`/assets/recettes/${recette.title.replace(/\s+/g,"_")}.jpg`}
                    alt={categorie.title}
                    className=" max-w-40 mx-auto rounded-lg m-4"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Categorie;
