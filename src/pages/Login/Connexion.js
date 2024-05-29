import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Email from "../../components/inputs/Email";
import Password from "../../components/inputs/Password";
import ReCAPTCHA from "react-google-recaptcha";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [capVal, setCapVal] = useState(null);
  // const currentUrl = window.location.pathname;

  const storeToken = (token) => {
    localStorage.setItem("token", token);
  };


  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          username: email,
          password: password,
        }
      );
      if (response.data && response.data.token) {
        storeToken(response.data.token);

        window.location.href = "/";
      } else {
        setError("Identifiants de connexion invalides.",error);
      }
    } catch (error) {
      setError(
        "Échec de l'authentification. Email ou mot de passe incorrect",error
      );
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="grow">
      <form onSubmit={handleLoginSubmit} className=" text-orange-500">
        <Email setEmail={setEmail} />
        <Password setPassword={setPassword} />
        <div className="flex flex-col">
          <NavLink to="/register">Mot de passe oublié ?</NavLink>
          {error && <span className="text-red-500">{error}</span>}
          <button type="submit" className="text-white bg-orange-400 my-3">
            Connexion
          </button>
        </div>
      </form>
      {/* <ReCAPTCHA
      sitekey= "6Lfi0d4pAAAAAJ5J7KO-blo0I1g9TTLZ3tCX2xu0c"
      onChange={val => setCapVal(val)}
      /> */}
      <strong className=" text-orange-500">OU</strong>
      <NavLink to="/register">
        <p className="text-white bg-orange-400">Crée un compte</p>
      </NavLink>
    </section>
  );
};

export default Connexion;
