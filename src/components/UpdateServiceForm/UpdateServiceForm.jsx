/* eslint-disable react/prop-types */

import { useState } from 'react';
import "./UpdateServiceForm.css"

const UpdateServiceForm = ({ service, onUpdate, onCancel }) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ name, description, price });
  };

  return (
    <div className='update-form'>
      <h2>Edit Form</h2>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Update Service</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
    </div>
  );
};

export default UpdateServiceForm;
