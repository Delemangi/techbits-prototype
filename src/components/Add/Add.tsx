import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, products } from "../../data";
import "./Add.css";

type AddProps = {
  user: User | null;
};

export function Add({ user }: AddProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  function addProduct() {
    const p: Product = {
      id: Math.random().toString().replace("0.", ""),
      name,
      price,
      description,
      image,
      category,
    };

    products.push(p);
    navigate("/", { state: { status: "Product added successfully." } });
  }

  if (user === null) {
    return (
      <div className="container">
        <h3 className="text-center my-5">
          <span className="text-decoration-underline rounded-pill py-1 px-2 d-inline-block mx-auto">
            Add Product
          </span>
        </h3>
        <h5 className="alert alert-danger text-center mw-25">
          You are not logged in.
        </h5>
      </div>
    );
  }

  return (
    <div className="container w-25">
      <form className="mt-5 p-2">
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(name) => setName(name.target.value)}
          ></input>
        </div>
        <div className="my-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(price) => setPrice(Number(price.target.value))}
          ></input>
        </div>
        <div className="my-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(description) => setDescription(description.target.value)}
          ></input>
        </div>
        <div className="my-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(image) => setImage(image.target.value)}
          ></input>
        </div>
        <div className="my-3">
          <select
            className="form-select"
            aria-label="Category"
            value={category}
            onChange={(category) => setCategory(category.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={addProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
}
