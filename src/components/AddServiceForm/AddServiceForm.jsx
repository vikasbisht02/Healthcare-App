/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AddServiceForm.css"

const AddServiceForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) return;
    onAdd({ name, description, price });
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="add-service">
      <h2 className="service-name">Add Service</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="name"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="description"
          maxLength={200}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="price"
        />
        <button className="add-btn" type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddServiceForm;
