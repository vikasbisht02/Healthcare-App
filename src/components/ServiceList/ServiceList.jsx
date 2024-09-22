/* eslint-disable react/prop-types */
import "./ServiceList.css";

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div className="service-list">
      <h2>Available Healthcare Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <b>
              <p className="service-name">{service.name}</p>
            </b>
            <p className="service-description">{service.description}</p>
            <b>
              {" "}
              <p className="service-price">{service.price}</p>
            </b>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
