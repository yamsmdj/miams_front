import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Cookie = () => {
  const [userConsent, setUserConsent] = useState(Cookies.get("user-consent"));
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    Cookies.set("user-consent", userConsent, { expires: 7 });
  }, [userConsent]);

  const acceptCookie = () => {
    setUserConsent("Accepté");
  };

  const declineCookie = () => {
    setUserConsent("Refusé");
  };

  const handleHidden = () => {
    setIsHidden(true);
  };
// console.log(isHidden);
  return (
    <>
    {!isHidden &&  
      <div className="py-16 bg-orange-100 ">
        {userConsent === "Accepté" ? (
          <div>
            <p>Merci d'avoir accepté nos cookies ! </p>
            <button onClick={handleHidden} >
              ❌
            </button>
          </div>
        ) : (
          <p>
            Nous utilisons des cookies pour améliorer votre expérience
            utilisateur. En utilisant notre site Web, vous acceptez notre
            utilisation des cookies.
          </p>
        )}
        {userConsent !== "Accepté" && (
          <div>
            <button
              className=" border-2 border-black p-3 hover:bg-black hover:text-white m-2 "
              onClick={acceptCookie}
            >
              Accepter
            </button>
            <button
              className=" border-2 border-black p-3 hover:bg-black hover:text-white m-3 "
              onClick={declineCookie}
            >
              Refuser
            </button>
          </div>
        )}
      </div>
      }
    </>
  );
};

export default Cookie;
