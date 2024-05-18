import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CardCategorie = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://miams-food.netlify.app/api/categorie")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des categories : ",
          error
        );
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h1 className="mt-8 text-3xl font-bold text-center uppercase ">Entrée, Plat ou Dessert: Quel Festin Pour Vos Papilles?</h1>
      {loading ? (
        <p>chargement ... </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center my-7">
          {categories ? (
            categories.map((categorie, index) => (
              <div
                key={index}
                className="flex flex-col justify-around w-full transform hover:scale-110 duration-500 "
              >
                {/* {console.log(categorie)} */}
                <p>
                  <strong>{categorie.name}</strong>
                </p>
                <div className="">
                  <NavLink to={`/${categorie.name}/${categorie.id}`}>
                    {categorie.name ? (
                      <img
                        src={`assets/categories/${categorie.name.replace(
                          /\s+/g,
                          "_"
                        )}.jpg`}
                        alt={categorie.name}
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
            <p>Loading...</p>
          )}
        </div>
      )}
    </section>
  );
};

export default CardCategorie;
