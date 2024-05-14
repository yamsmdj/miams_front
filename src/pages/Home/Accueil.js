import React from "react";
import CardCategorie from "../../components/cards/CardCategorie";
import CardIngredient from "../../components/cards/CardIngredient";

import SearchResults from "../../components/SearchResults";



const Accueil = () => {
  return (
    <section className=" h-full bg-orange-400 w-10/12 m-auto">
        <div className="w-10/12 m-auto ">
          <CardCategorie />
        </div>

        <h2 className="text-center">Découvrez nos ingrédients de saison</h2>
        <div className="w-10/12 m-auto">
        <CardIngredient />
        </div>


        <div className="w-10/12 m-auto">
        <SearchResults />
        </div>


    </section>
  );
};

export default Accueil;
