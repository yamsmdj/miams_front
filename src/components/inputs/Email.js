const Email = ( {setEmail} ) => {

    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // const [emailFocus, setEmailFocus] =useState(false);


    // useEffect(() => {
    //     setValidEmail(emailRegex.test(setemail))
    // }, [setemail, setValidEmail]);
 
  return (
    <div>
      <label htmlFor="email" className="p-2 w-full">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          className="p-1 border-2"
        />
    </div>
  );
};

export default Email;
