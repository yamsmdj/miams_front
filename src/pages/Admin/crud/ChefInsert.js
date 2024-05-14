import axios from 'axios';
import React, { useState } from 'react';

const ChefInsert = () => {

    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = () => {
        // console.log("description", description);
        axios
          .post("http://localhost:8000/api/chef/", {
            name: name,
            description: description,
          })
          .then((res) => {
            console.log("Recette ajouté avec succès !");
          })
          .catch((error) => {
            console.error("Erreur lors de la création de la recette", error);
          });
      };
    return (
        <section className="bg-orange-500 w-10/12 mx-auto">
      <h1 className="text-center text-white font-semibold text-3xl pt-5">
        Ajouter une recette
      </h1>
      <form
        action=""
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col items-center py-10 font-semibold "
      >
        <label htmlFor="">Nom de la recette </label>
        <div className="">
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <label htmlFor="">Description </label>
        <div className="">
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className=" bg-green-600 rounded-xl p-2 mt-6">
          Ajouter la recette
        </button>
      </form>
    </section>
    );
};

export default ChefInsert;