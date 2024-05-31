import React, { useState } from 'react';
import Ver from './components/Ver';
import Editar from './components/Editar';

import './App.css';


const App = () => {
  const initialUserInfo = { name: 'Luis', lastName: 'Gutierrez', role: 'teacher' };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [editing, setEditing] = useState(false);

  return (
    <div className="App">
      {editing ? (
        <Editar userInfo={userInfo} setUserInfo={setUserInfo} setEditing={setEditing} />
      ) : (
        <Ver userInfo={userInfo} setEditing={setEditing} />
      )}
    </div>
  );
};

export default App;

