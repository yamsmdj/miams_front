import React, { useEffect, useState } from 'react';

const ConfirmPassword = ({valuePwd, handlePasswordChange}) => {

    const [confirmPwd, setConfirmPwd] = useState('');
    const [PwdFocus ,setPwdFocus] = useState(false);


    return (
        <div>
            <label htmlFor="mdp" className='p-2'>Confirmation du mots de passe</label>
            <input
            type="password" 
            name="mdp" 
            id="mdp" 
            onChange={(e) => setConfirmPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            className={`p-1 border-2 `} />
        </div>
    );
};

export default ConfirmPassword;