import { Link } from "react-router-dom";
import "./Cart.css";

type CartProps = {
  cart: CartItem[] | null;
  removeItemFromCart: (product: Product) => void;
};

export function Cart({ cart, removeItemFromCart }: CartProps) {
  return (
    <div className="container">
      <h3 className="text-center my-5">
        <span className="text-decoration-underline rounded-pill py-1 px-2 d-inline-block mx-auto">
          Your Shopping Cart
        </span>
      </h3>
      <ul className="list-group">
        {cart === null || cart.length === 0 ? (
          <h5 className="alert alert-danger text-center mw-25">
            Your cart is empty.
          </h5>
        ) : (
          cart?.map((p) => (
            <li className="list-group-item" key={p.id}>
              <div className="row">
                <div className="col-2">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="img-fluid img-thumbnail"
                    style={{ maxHeight: "10vh" }}
                  />
                </div>
                <div className="col-5 my-auto fs-4">{p.name}</div>
                <div className="col-1 my-auto">
                  <div className="badge text-bg-secondary">
                    <span className="fs-4">{p.quantity}</span>
                  </div>
                </div>
                <div className="col-4 g-col-3 d-flex flex-column align-items-end">
                  <div className="col-1 my-auto fs-4 me-5">${p.price}</div>
                  <div className="col-1 my-auto fs-4 me-5">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeItemFromCart(p)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="row mt-3">
        <div className="d-flex justify-content-center gap-5">
          <Link to="/" type="button" className="btn btn-secondary">
            Continue Shopping
          </Link>
          {cart?.length === 0 ? (
            <Link to="/checkout" className="btn btn-success disabled">
              Checkout
            </Link>
          ) : (
            <Link to="/checkout" className="btn btn-success">
              Checkout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
