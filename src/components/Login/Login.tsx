import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../../data";

type LoginProps = {
  setLoggedIn: (loggedIn: boolean) => void;
  setUser: (user: User | null) => void;
  setCart: (cart: CartItem[] | null) => void;
};

export function Login({ setLoggedIn, setUser, setCart }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function login() {
    const user = users.find((user) => user.username === username);

    if (user === undefined) {
      setError("No account exists with that username!");
      return;
    }

    setLoggedIn(true);
    setUser({ id: user.id, username: user.username, cart: [] });
    setCart([]);
    navigate("/");
  }

  return (
    <div className="container w-25 text-center">
      <form className="mt-5 p-2">
        <div className="my-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="username"
            value={username}
            onChange={(user) => setUsername(user.target.value)}
          ></input>
        </div>
        <div className="my-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
          ></input>
        </div>
        <button type="button" className="btn btn-primary" onClick={login}>
          Login
        </button>
        <div className="my-3">
          No account? Register <Link to="/register">here</Link>.
        </div>
        {error !== "" && <div className="alert alert-danger">{error}</div>}
      </form>
    </div>
  );
}
