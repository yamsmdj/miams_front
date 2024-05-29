import { useEffect, useState } from "react";
import eye from "../../assets/Icons/eye.svg";
import { NavLink } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [confirmpwd, setConfirmPwd] = useState("");
  const [validConfirmPwd, setValidConfirmPwd] = useState(false);
  const [eyes, setEyes] = useState(false);

  const regexEmail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
  const regexPwd =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/user/", {
        email: email,
        password: pwd,
      })
      .then((res) => {
        console.log("Produit créé avec succès !");
        window.location.href = "/connexion";
      })
      .catch((err) => {
        console.error("Erreur lors de l'enregistrement d'un utilisateur", err);
      });
  };
  const showPwd = () => {
    setEyes(!eyes);
  };

  useEffect(() => {
    if (email === "") {
      setValidEmail(null);
    } else {
      setValidEmail(regexEmail.test(email));
    }
  }, [regexEmail]);
  useEffect(() => {
    if (pwd === "") {
      setValidPwd(null);
    } else {
      setValidPwd(regexPwd.test(pwd));
    }
  }, [regexPwd]);

  useEffect(() => {
    if (confirmpwd === "") {
      setValidConfirmPwd(null);
    } else {
      setValidConfirmPwd(pwd === confirmpwd);
    }
  }, [pwd, confirmpwd]);
  return (
    <section>
      <form autoComplete="off" onSubmit={handleSubmit} className="my-4">
        <div className="flex flex-col ">
          <label htmlFor="email">Adresse mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`border-2  m-auto ${
              validEmail !== null
                ? validEmail
                  ? "border-green-500"
                  : "border-red-500"
                : ""
            }`}
          />
          <span
            className={`text-sm mb-2 ${
              validEmail ? "text-green-600" : "text-red-500"
            }`}
          >
            {validEmail !== null
              ? validEmail
                ? "Email valide "
                : "Email non valide"
              : ""}
          </span>

          <label htmlFor="pwd">Mot de passe</label>
          <div className="relative m-auto">
            <input
              type={eyes ? "text" : "password"}
              name="pwd"
              id="pwd"
              onChange={(e) => setPwd(e.target.value)}
              className={` border-2  m-auto  ${
                validPwd !== null
                  ? validPwd
                    ? "border-green-500"
                    : "border-red-500"
                  : ""
              }`}
            />
            <img
              src={eye}
              alt="show password"
              id="eye"
              className="w-5 absolute right-2 top-1"
              onClick={showPwd}
            />
          </div>

          <span
            className={`text-sm mb-2 w-1/2 m-auto ${
              validPwd !== null
                ? validPwd
                  ? "text-green-600"
                  : "text-red-500"
                : ""
            }`}
          >
            {validPwd !== null
              ? validPwd
                ? "Mot de passe valide"
                : "Mot de passe non valide, minimum 6 caractère, 1 majuscule, 1 minuscule, 1 chiffre, un caractère special : #?!@$ %^&*-"
              : ""}
          </span>
          <label htmlFor="confirmPwd">Confirmez le mot de passe</label>

          <input
            type="password"
            name="confirmPwd"
            id="confirmPwd"
            onChange={(e) => setConfirmPwd(e.target.value)}
            className={`border-2 m-auto ${
              validConfirmPwd !== null
                ? validConfirmPwd
                  ? "border-green-500"
                  : "border-red-500"
                : ""
            }`}
          />
          <span
            className={`text-sm mb-2 ${
              validConfirmPwd !== null
                ? validConfirmPwd
                  ? "text-green-600"
                  : "text-red-500"
                : ""
            }`}
          >
            {validConfirmPwd !== null
              ? validConfirmPwd
                ? "Les mots de passe correspondent"
                : "Les mots de passe ne correspondent pas"
              : ""}
          </span>
        </div>
        <button type="submit" className=" bg-orange-500 rounded-xl p-2 mt-2">
          Je m'inscrit
        </button>
      </form>
      <NavLink to="/connexion">
        <button className="my-4">Déja un compte ?</button>{" "}
      </NavLink>
    </section>
  );
};

export default Register;
