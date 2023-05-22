import { Link, useNavigate } from "react-router-dom";
import { categories } from "../../data";
import "./Header.css";

type HeaderProps = {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  cart: Product[] | null;
  setCart: (cart: CartItem[] | null) => void;
};

export function Header({
  loggedIn,
  setLoggedIn,
  user,
  setUser,
  cart,
  setCart,
}: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="text-decoration-none">
            <span className="navbar-brand">TechBits</span>
          </Link>
          <Categories />
        </div>
        <div className="d-flex align-items-center gap-3">
          <Account
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            user={user}
            setUser={setUser}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
    </nav>
  );
}

function Categories() {
  return (
    <div className="dropdown">
      <a
        className="nav-link dropdown-toggle text-white"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        Categories
      </a>
      <ul className="dropdown-menu">
        {categories.map((category) => (
          <li key={category}>
            <a href="#" className="dropdown-item">
              {category}
            </a>
            <hr className="dropdown-divider" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Account({
  loggedIn,
  setLoggedIn,
  user,
  setUser,
  cart,
  setCart,
}: HeaderProps) {
  const navigate = useNavigate();

  return (
    <span className="navbar-text">
      {loggedIn ? (
        <>
          <span className="me-3">Welcome, {user?.username}!</span>
          <Link className="text-decoration-none" to="/cart">
            <button type="button" className="btn btn-secondary">
              Cart ({cart?.length ?? 0})
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setLoggedIn(false);
              setUser(null);
              setCart(null);
              navigate("/");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
    </span>
  );
}
