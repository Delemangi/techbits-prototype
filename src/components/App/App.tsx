import { Suspense, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Add } from "../Add/Add";
import { Cart } from "../Cart/Cart";
import { Checkout } from "../Checkout/Checkout";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Products } from "../Products/Products";
import { Register } from "../Register/Register";
import "./App.css";

function App() {
  const { state } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[] | null>(null);

  function addItemToCart(product: Product) {
    if (user === null) {
      return;
    }

    if (cart === null) {
      setCart([{ ...product, quantity: 1 }]);
      return;
    }

    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct !== undefined) {
      const newCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    }
  }

  function removeItemFromCart(product: Product) {
    if (user === null) {
      return;
    }

    if (cart === null) {
      setCart([]);
      return;
    }

    const newCart = cart.filter((p) => p.id !== product.id);
    setCart(newCart);
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          user={user}
          setUser={setUser}
          cart={cart}
          setCart={setCart}
        />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  addItemToCart={addItemToCart}
                  loggedIn={loggedIn}
                  status={state?.status ?? ""}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setLoggedIn={setLoggedIn}
                  setUser={setUser}
                  setCart={setCart}
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/cart"
              element={
                <Cart cart={cart} removeItemFromCart={removeItemFromCart} />
              }
            />
            <Route path="/checkout" element={<Checkout setCart={setCart} />} />
            <Route path="/new" element={<Add user={user} />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
