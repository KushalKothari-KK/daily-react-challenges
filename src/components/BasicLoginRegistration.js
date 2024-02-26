import React, { useState } from "react";

const BasicLoginRegistration = () => {
  const localUserData = JSON.parse(localStorage.getItem("users")) || [];
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [users, setUsers] = useState(localUserData);
  const handleAuthentication = () => {
    if (isRegistered) {
      //login
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setIsLogedIn(true);
      } else {
        alert("Login failed, Please check your credentials");
      }
    } else {
      //register
      const newUser = { name, email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLogedIn(true);
    }
  };
  const handleLogout = () => {
    setIsLogedIn(false);
    setEmail("");
    setName("");
    setPassword("");
  };
  return (
    <div>
      {isLogedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>{isRegistered ? "Login Page" : "Register Page"}</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {!isRegistered ? (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : null}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Dont have a account? register now"
              : "Already have an account? Login In!"}
            <button onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Register" : "Login"}
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default BasicLoginRegistration;
