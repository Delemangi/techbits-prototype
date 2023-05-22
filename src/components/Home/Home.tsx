import { useState } from "react";
import { products } from "../../data";
import "./Home.css";

type HomeProps = {
  addItemToCart: (product: Product) => void;
  loggedIn: boolean;
  status: string;
};

type ProductProps = {
  product: Product;
};

export function Home({ loggedIn, addItemToCart, status }: HomeProps) {
  function getProducts(rows = 1) {
    const row = 4;
    const output = [];

    for (let i = 0; i < rows; i++) {
      output.push(
        <div key={i} className="row my-3">
          {products.slice(row * i, row * (i + 1)).map((product, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Product
                key={product.id}
                product={product}
                addItemToCart={addItemToCart}
                loggedIn={loggedIn}
              />
            </div>
          ))}
        </div>
      );
    }

    return output;
  }

  return (
    <>
      <h3 className="text-center my-5">
        <span className="text-decoration-underline rounded-pill py-1 px-2 d-inline-block mx-auto">
          Top Sellers
        </span>
      </h3>
      {status !== "" && (
        <div className="container">
          <div className="alert alert-success" role="alert">
            {status}
          </div>
        </div>
      )}
      <div className="container text-center">{getProducts()}</div>
    </>
  );
}

function Product({
  product,
  loggedIn,
  addItemToCart,
}: Omit<ProductProps & HomeProps, "status">) {
  const [status, setStatus] = useState<string>("");

  function addToCart(p: Product) {
    if (!loggedIn) {
      setStatus("You must be logged in to add to cart!");
      return;
    }

    addItemToCart(p);
  }

  return (
    <div className="card" style={{ height: "65vh" }}>
      <img
        className="img-fluid img-thumbnail h-50"
        src={product.image}
        alt={product.name}
      />
      <div className="card-body">
        <div className="d-flex flex-column justify-content-begin h-75">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-subtitle text-body-secondary mb-2">
            {product.category}
          </p>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="d-flex flex-column justify-content-end h-25">
          {status.includes("You must be") ? (
            <div className="alert alert-danger" role="alert">
              {status}
            </div>
          ) : status.includes("Added") ? (
            <div className="alert alert-success" role="alert">
              {status}
            </div>
          ) : (
            <></>
          )}
          <p className="card-text bg-primary rounded-pill w-50 mx-auto text-white">
            Price: ${product.price}
          </p>
          <button
            className="btn btn-secondary rounded"
            type="button"
            onClick={() => {
              addToCart(product);
              setStatus("Added to cart!");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
