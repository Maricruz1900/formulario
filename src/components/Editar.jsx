import React, { useState } from 'react';

const Editar = ({ userInfo, setUserInfo, setEditing }) => {
  const [formData, setFormData] = useState(userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(formData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div>
      <h2>Editar Información del Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Rol:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Editar;
