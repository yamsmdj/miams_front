const Email = ( {setEmail} ) => {


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
