import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Icons/Logo.svg";
import axios from "axios";

const Dashboard = () => {

  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showChefDropdown, setShowChefDropdown] = useState(false);
  const [categorie, setCategorie] = useState([]);
  const [recette, setRecette] = useState([]);
  const [flashMessage, setFlashMessage] = useState(""); // Nouvelle propriété d'état pour le message flash
  const location = useLocation();


  useEffect(() => {
    // Récupérer les produits
    axios
      .get(`http://localhost:8000/api/categorie`)
      .then((res) => {
        setCategorie(res.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des produits : ",
          error
        );
      });

    // Récupérer les categorie
    axios
      .get(`http://localhost:8000/api/recette`)
      .then((res) => {
        setRecette(res.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des categorie : ",
          error
        );
      });  
       if (location.state && location.state.flashMessage) {
        setFlashMessage(location.state.flashMessage);
        const timeout = setTimeout(() => {
          setFlashMessage("");
        }, 5000);
        return () => clearTimeout(timeout);
      }
    }, []);

    const filteredProducts = (() => {
        if (recette) {
          return recette.filter(
            (product) => product.oeuvres?.id === recette.id
          );
        }
      })();

  return (
    <div className="w-full flex flex-row bg-bleuDark">

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-96 bg-bgAdmin bg-no-repeat bg-cover bg-center">
          <h1 className="flex h-full justify-center items-center text-white">
            Produits
          </h1>
        </div>
        <div className="flex justify-between w-10/12">
          <div className="bg-white h-fit bg-opacity-10 w-1/5 flex flex-col my-20  items-center">
            <div className="bg-nav opacity-100 w-10/12 mt-10 mb-1 py-1 text-white flex items-center justify-around text-center">
              Nouvelle categorie <img src="" alt="" />
            </div>
            <div className="w-full flex flex-col items-center mb-10">
              {categorie ? (
                categorie.map((oeuvre, index) => (
                  <div
                    key={index}
                    className="cursor-pointer w-10/12"
                  >
                    {/* <OeuvresAdmin oeuvre={oeuvre} /> */}
                  </div>
                ))
              ) : (
                <p>Chargement en cours...</p>
              )}
            </div>
          </div>

          <div className="bg-white bg-opacity-10 w-3/4 flex flex-col justify-start items-center my-20 text-white">
            {flashMessage && (
              <div className="bg-green-500 text-white px-4 py-2 mt-4">
                {flashMessage}
              </div>
            )}
            <div className="opacity-100 w-10/12 mt-10 mb-1 py-1">
              <div className="flex justify-between items-center w-full mb-2 px-3 bg-nav">
                <h3>Liste de produits</h3>
                <NavLink to="/dashboard/create">
                  <div className="flex flex-row-reverse pr-7 gap-1 items-center rounded-md">
                    <img src="{createV}" alt="logo_create" />
                  </div>
                </NavLink>
              </div>
              <ul className="bg-nav grid grid-cols-8 text-center p-2">
                <li>Categorie</li>
                <li>Oeuvre</li>
                <li>Nom</li>
                <li>Type</li>
                <li>Note</li>
                <li>Prix</li>
                <li>Update</li>
                <li>Delete</li>
              </ul>
            </div>
            {recette ? (
              filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                //   <PanelAdmin
                //     product={product}
                //     key={index}
                //     onDelete={() => handleDelete(product.id)}
                //   />
                "yoy"
                ))
              ) : (
                <p>Aucun produit trouvé pour cette oeuvre.</p>
              )
            ) : (
              <p>Sélectionnez une oeuvre pour filtrer les produits.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
