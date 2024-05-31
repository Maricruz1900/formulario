import React from 'react';

const Ver = ({ userInfo: { name, lastName, role }, setEditing }) => {
  return (
    <div>
      <h2>Información del Usuario</h2>
      <p>Nombre: {name}</p>
      <p>Apellido: {lastName}</p>
      <p>Rol: {role}</p>
      <button onClick={() => setEditing(true)}>Editar</button>
    </div>
  );
};

export default Ver;