import { useNavigate } from "react-router-dom";
import "./Checkout.css";

type CheckoutProps = {
  setCart: (cart: CartItem[] | null) => void;
};

export function Checkout({ setCart }: CheckoutProps) {
  const navigate = useNavigate();

  function proceed() {
    setCart([]);
    navigate("/", { state: { status: "Thank you for your purchase!" } });
  }

  return (
    <div className="container">
      <h3 className="text-center my-5">
        <span className="text-decoration-underline rounded-pill py-1 px-2 d-inline-block mx-auto">
          Checkout
        </span>
      </h3>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <label className="fw-bold" htmlFor="name-on-card">
            Name on Card
          </label>
          <input className="form-control mt-1" type="text" id="name-on-card" />

          <label className="fw-bold mt-3" htmlFor="card-number">
            Card Number
          </label>
          <input className="form-control mt-1" type="text" id="card-number" />

          <label className="fw-bold mt-3" htmlFor="billing-address">
            Billing Address
          </label>
          <input
            className="form-control mt-1"
            type="text"
            id="billing-address"
          />

          <label className="fw-bold mt-3" htmlFor="cvc">
            CVC
          </label>
          <input className="form-control mt-1" type="text" id="cvc" />

          <label className="fw-bold mt-3" htmlFor="expiration">
            Expiration Date
          </label>
          <input className="form-control mt-1" type="text" id="expiration" />

          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => proceed()}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
