import React, { useEffect, useState } from "react";

const Password = ({setPassword}) => {
  const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;




  const [pwdFocus, setPwdFocus] = useState(false);

  // useEffect(() => {
  //     setPwdValid(pwdRegex.test(pwd))
  // }, [pwd, setPwdValid])

  return (
    <div>
      <label htmlFor="mdp" className="p-2">
        Mots de passe
      </label>
      <input
        type="password"
        name="mdp"
        id="mdp"
        onChange={(e) => setPassword(e.target.value)}
        className={`p-1 border-2`}
      />
    </div>
  );
};

export default Password;
