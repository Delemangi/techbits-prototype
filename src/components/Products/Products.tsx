import { products } from "../../data";
import "./Products.css";

export function Products() {
  return (
    <div className="container">
      <h3 className="text-center my-5">
        <span className="text-decoration-underline rounded-pill py-1 px-2 d-inline-block mx-auto">
          Products
        </span>
      </h3>
      <div className="row">
        <ul className="list-group">
          {products.map((p) => (
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
                <div className="col-5 g-col-3 d-flex flex-column align-items-end">
                  <div className="col-1 my-auto fs-4 me-5">${p.price}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
