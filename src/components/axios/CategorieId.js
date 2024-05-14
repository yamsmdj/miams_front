// ObjetDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ObjetId = ({ apiUrl }) => {
  const [objet, setObjet] = useState(null);

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setObjet(res.data);

      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la récupération de la objet : ", error);
      });
  }, [apiUrl]);

  return (
    <section>
      {console.log(objet)}
      {objet && (
        <div>
          <ul>
            {objet.Recette.map((obj, index) => (
              <li key={index}>{obj.title}
              <img src={`/assets/recettes/${obj.title.replace(/\s+/g, "_")}.jpg`} alt={objet.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ObjetId;
