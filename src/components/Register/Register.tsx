import { useState } from "react";
import "./Register.css";
import { users } from "../../data";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function register() {
    const user: User = {
      id: Math.random().toString().replace(".", ""),
      username,
      cart: [],
    };
    users.push(user);
    navigate("/login");
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
        <button type="button" className="btn btn-primary" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
}
