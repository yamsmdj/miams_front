import axios from "axios";
import  { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Moncompte = () => {
  const [user, setUser] = useState([]);
  const [pwd, setPwd] = useState("");

  const token = localStorage.getItem('token')
  const decodeToken = jwtDecode(token)
  console.log(decodeToken.id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${decodeToken.id}`)
      .then((res) => {
        setUser(res.data);

      })
      .catch((error) => {
        console.error("Erreur lors de la recuperation de l'user", error);
      });
  }, []);

  const handleValidation = (e) => {
    e.preventDefault(); 
    axios 
      .patch(`http://localhost:8000/api/user/${decodeToken.id}`, 
      {
        password: pwd
      })
      .then((res) => {
        console.log("Modification reussi");
      })
      .catch((err) => {
        console.error("Erreur lors de la modificaiton de l'utilisateur");
      });
  };
  console.log(decodeToken);
  return (
    <section>
      <h1 className="text-center uppercase font-bold text-2xl py-5">
        Votre compte
      </h1>
      <p className="text-center">Bonjour <strong>{decodeToken.username.split('@')[0]}</strong>, voici vos identifiant.</p>
      <div className="flex justify-center">
      <form onSubmit={handleValidation}>
        <div className="mx-auto ">
          <label>Votre adresse mail </label>
          <div>
            <input
              type="text"
              className="border border-black"
              value={user.email}
            />
          </div>
          <label>Modifier votre mot de passe </label>
          <div>
            <input
            type="password"
            className="border border-black"
            onChange={(e) => setPwd(e.target.value)}
             />
          </div>
          <label>Confirmez le mot de passe </label>
          <div>
            <input type="password" className="border border-black" />
          </div>
        </div>
        <button type="submit">Modifier</button>
      </form>
      </div>
    </section>
  );
};

export default Moncompte;
