import React, { useState } from 'react';
import Email from '../../components/inputs/Email';
import Password from '../../components/inputs/Password';
import ConfirmPassword from '../../components/inputs/ConfirmPassword';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [isValidEmail, setIsValidEmail] = useState(null);
    const [isValidPwd, setIsPwdValid] = useState(null);

    const [pwd, setPwd] = useState('');

    const handlePasswordChange = (e) => {
        setPwd(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section>
            <form onSubmit={handleSubmit} action="">
            <Email isValid={isValidEmail} setValidEmail={setIsValidEmail} />
            <Password isValid={isValidPwd} setPwdValid={setIsPwdValid}/>
            <ConfirmPassword valuePwd={pwd} onChange={handlePasswordChange}  />
            <button type="submit" className=' bg-orange-500 rounded-xl p-2'>Je m'inscrit</button>
            </form>
            <NavLink to="/connexion"><button className='my-4'>Déja un compte ?</button> </NavLink>

        </section>
    );
};

export default Register;