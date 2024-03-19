import { useState } from "react";
import Modal from "../Modal/Modal";
import "./PinDisplay.scss";

const PinDisplay = ({ show, setShow, validatePin, onSuccess }) => {
  //Componente reutilizable para ingresar el pin, pasandole una funcion verificadora 
  //y una funcion que se ejecuta cuando el pin es correcto

  const handleSubmit = (e) => {
    e.preventDefault();

    const pin = e.target[0].value;

    if (validatePin(pin)) {
      onSuccess();
    }
  };

  return (
    <Modal show={show}>
      <div className="pin-container">
        <button className="close-btn" onClick={() => setShow(false)}>
          X
        </button>
        <div className="titulo">
        <h1>Ingrese su pin</h1>
        </div>
       
        <form className="pin-form" onSubmit={handleSubmit}>
          <input
            name="pin"
            type="number"
            placeholder="Enter your pin"
            required
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </Modal>
  );
};

export default PinDisplay;
