import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./pagesstyles.css";

function CheckOut() {
  const navigate = useNavigate();

  const handleVolverAInicio = () => {
    // Lógica adicional antes de volver a inicio si es necesario
    navigate('/');
  };

  return (
    <div>
      <p className='finally'>Gracias por tu compra!</p>
      <div>
        <button onClick={handleVolverAInicio}>Volver a inicio</button>
      </div>
    </div>
  );
}

export default CheckOut;
