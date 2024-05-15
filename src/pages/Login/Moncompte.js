import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Moncompte = () => {

    const [user, setUser] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/1`)
        .then((res) => {
            setUser(res.data);
            console.log(res.data);
        }).catch((error) => {
            console.error("Erreur lors de la recuperation de l'user" , error)
        })
    }, [])
    return (
        <section>
            <h1 className='text-center uppercase font-bold text-2xl py-5'>Votre compte</h1>
            <p>Bonjour XXXX, voici vos identifiant.</p>

            <div className="mx-auto ">
            <label>Votre adresse mail </label>
            <div>
            <input type="text" className='border border-black' value={user.email} />
            </div>
            <label>Modifier votre mot de passe </label>
            <div>
            <input type="text" className='border border-black' />
            </div>
            <label>Confirmez le mot de passe </label>
            <div>
            <input type="text" className='border border-black' />
            </div>
            </div>

        </section>
    );
};

export default Moncompte;