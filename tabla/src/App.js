import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((response) => response.json())
      .then((data) => setPersonas(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Tabla de Personas</h1>
      <table>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Foto</th>
            <th>Nombre completo</th>
            <th>Correo</th>
            <th>Género</th>
            <th>Celular</th>
            <th>País</th>
            <th>Ciudad</th>
            <th>Calle</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={persona.picture.thumbnail} alt="Foto" />
              </td>
              <td>
                {persona.name.first} {persona.name.last}
              </td>
              <td>{persona.email}</td>
              <td>{persona.gender}</td>
              <td>{persona.cell}</td>
              <td>{persona.location.country}</td>
              <td>{persona.location.city}</td>
              <td>
                {persona.location.street.name} {persona.location.street.number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
