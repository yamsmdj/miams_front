import React, { useState } from "react";
import Connexion from "../Login/Connexion";
import Register from "../Register";
import UserLogo from "../../assets/Icons/user.svg";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const currentUrl = window.location.pathname;

  const storeToken = (token) => {
    localStorage.setItem("token", token);
  };

  const login = async (email, password) => {
    try{
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          username: email,
          password: password
        }
      );
      if (response.data && response.data.token){
        storeToken(response.data.token);
        window.location.href= "/";
      } else {
        console.log('Identifiants de connexion invalides.')
      }
    }catch (error) {
      console.log("Échec de l'authentification. Veuillez vérifier vos identifiants." , error );
      setError('Email ou mot de passe incorrect')
    }
  }
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="grow">
      <div className="flex flex-col items-center justify text-center w-8/12 md:w-4/12 m-auto my-3 py-5 bg-gray-300">
        <div>
          <img src={UserLogo} alt="logo login" />
        </div>
        <div>

          {currentUrl === "/connexion" ?(
         <Connexion 
         email={email}
         setEmail={setEmail}
         password={password}
         setPassword={setPassword}
         handleLoginSubmit={handleLoginSubmit}
         /> 
        ): (
        <Register />
        )}</div>
      </div>
    </section>
  );
};

export default Login;
