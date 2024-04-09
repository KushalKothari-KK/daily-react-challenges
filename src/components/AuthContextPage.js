import { useAuth } from "../context/AuthContext";

export const AuthContextPage = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <h1>User Authentication Example</h1>
      <div>
        {user ? (
          <div>
            <h4>Welcome, {user.userName}</h4>
            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <div>
            <h4>Welcome, Please Login</h4>
            <button onClick={() => login({ userName: "Kushal Kothari" })}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
