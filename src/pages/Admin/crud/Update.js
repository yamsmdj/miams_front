import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const [recettes, setRecettes] = useState([]);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  const [categorie, setCategorie] = useState("");

  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [etapes] = useState([]);

  const { recetteId } = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/recette/${recetteId}`)
      .then((res) => {
        setRecettes(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la recupéaration de la recette", error);
      });
    axios
      .get(`http://localhost:8000/api/categorie/`)
      .then((res) => {
        setCategorie(res.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la recupéaration des categories", error);
      });
  }, [recetteId]);
  // console.log('id' , recetteId);
  const converToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
  };
  // const handleEtapeChange = (index, value) => {
  //   const updatedEtapes = [...etapes];
  //   updatedEtapes[index] = value;
  //   setEtapes(updatedEtapes);
  //   console.log("etape update",updatedEtapes);
  // };
  const handleValidation = () => {


    // Utilise les valeur actuelle de recettes.x si x est vide
    const titleToSend = title || recettes.title;
    const descriptionToSend = description || recettes.description;
    const timeToSend = time || recettes.time;
    const categorieToSend = categorie || recettes.categorie.name;

    let formData = new FormData();
    if (selectedImage) {
      formData.append("image", selectedImage.split(",")[1]);
    } else {
      formData.append("image", recettes.picture);
    }

    axios
      .post("http://localhost:8000/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Image uploaded successfully");
          const imagePath = response.data;
          // console.log(imagePath);

          axios
            .patch(`http://localhost:8000/api/recette/${recetteId}`, {
              title: titleToSend,
              description: descriptionToSend,
              time: timeToSend,
              categorie: categorieToSend,
              etapes: etapes,
              picture: imagePath,
            })
            .then((res) => {
              console.log("Mise à jour réussie !");
              window.location.href = "/admin/dashboard";
            })
            .catch((error) => {
              console.error("Erreur lors de la mise à jour : ", error);
            });
        } else {
          console.error("Failed to upload image");
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });

  };

 

  const handleCancel = () => {
    window.location.href = "/admin/dashboard";
  };

  return (
    <section>
      {/* {console.log("return", recettes)} */}
      <div className="w-1/2 mx-auto text-center py-16">
        <form>
          {recettes && (
            <div>
              <div className="font-bold text-4xl py-9">
                <h1>{recettes.title}</h1>
                <img
                  src={`http://localhost:8000/api/assets/recettes/${recettes.picture}`}
                  alt={recettes.title}
                  className="mx-auto pt-9 w-52"
                />
              </div>
              <label className="font-bold " htmlFor="title">
                Nom de la recette :
              </label>
              <div>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  defaultValue={recettes.title}
                  className="border-2"
                />
              </div>
              <label className="font-bold " htmlFor="title">
                Temp de la recette :
              </label>
              <div>
                <input
                  type="number"
                  onChange={(e) => setTime(parseInt(e.target.value))}
                  name="time"
                  defaultValue={recettes.time}
                  className="border-2"
                />
              </div>
              <label htmlFor="">Choisir une nouvelle image</label>
              <div className="">
                <input
                  type="file"
                  name="myImage"
                  className="border-2"
                  onChange={converToBase64}
                />
              </div>
                {selectedImage && (
                  <img width={100} height={100} src={selectedImage} alt='particule' className="mx-auto my-2" />
                )}
              <label className="font-bold " htmlFor="title">
                description :
              </label>
              <div>
                <textarea
                  type="text"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  defaultValue={recettes.description}
                  className="border-2 "
                />
              </div>
              
              {/* <label htmlFor="">Categorie </label>
              <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option value="">Selectionnez une catégorie</option>
          {categorie.map((cat, index) => (
            <option key={index} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select> */}
              {/* {recettes.etapes &&
                recettes.etapes.map((etape, index) => (
                  <div key={index} className="my-2 w-1/2 mx-auto">
                    <div className="flex flex-col text-center">
                      <label>Étape {index + 1}</label>
                      <textarea
                        type="text"
                        defaultValue={etape.description}
                        onChange={(e) =>
                          handleEtapeChange(index, e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))} */}
            </div>
          )}
          <div className="mt-3 ">
            <button
              type="button"
              className="  p-2 rounded-xl bg-red-600 "
              onClick={handleCancel}
            >
              Annuler
            </button>
            <button
              type="button"
              className="p-2 ml-4 rounded-xl bg-green-600 "
              onClick={handleValidation}
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Update;
