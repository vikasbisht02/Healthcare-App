import { useState } from 'react';
import ServiceList from './components/ServiceList/ServiceList';
import AddServiceForm from './components/AddServiceForm/AddServiceForm';
import UpdateServiceForm from './components/UpdateServiceForm/UpdateServiceForm';
import "./App.css"

function App() {
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === editingIndex ? updatedService : service
    );
    setServices(updatedServices);
    setEditingIndex(null);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      {editingIndex === null ? (
        <>
          <AddServiceForm onAdd={addService} />
          <ServiceList
            services={services}
            onEdit={setEditingIndex}
            onDelete={deleteService}
          />
        </>
      ) : (
        <UpdateServiceForm
          service={services[editingIndex]}
          onUpdate={updateService}
          onCancel={() => setEditingIndex(null)}
        />
      )}
    </div>
  );
}

export default App;
