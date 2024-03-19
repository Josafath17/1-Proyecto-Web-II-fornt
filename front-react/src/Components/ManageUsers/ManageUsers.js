import React, { useState } from "react";
import "./ManageUsers.scss";
import { Link } from "react-router-dom";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";

const AddOrUpdateVideo = ({ handleClose, type }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, avatar, age, pin } = e.target;

    console.log("Form values:", {
      name: name.value,
      avatar: avatar.value,
      age: age.value,
      pin: pin.value
    })

    if (type === "add") {
      //Implementar Add
    } else {
      //Implementar Update
    }
  };

  return (
    <div className="add-or-update-user">
      <h1>{type === "add" ? "Agregar" : "Actualizar"} usuario</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Nombre del usuario" required />
        <select name="avatar">
          <option value="" selected disabled>
            Seleccione el avatar del usuario
          </option>
          <option value="/images/avatar1.png">Avatar1</option>
          <option value="/images/avatar2.png">Avatar2</option>
        </select>
        <input name="age" type="number" placeholder="Edad del usuario" required />
        <input name="pin" type="number" placeholder="Pin del usuario" required />

        <div className="buttons">
          <button onClick={handleClose}>Cancelar</button>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

const ManageUsers = () => {
  const [modalType, setModalType] = useState("");
  const [users, setUsers] = useState([
    {
      name: "Jorgito",
      avatar: "/avatars/1.jpg",
      age: 6,
      pin: 1234
    },
    {
      name: "Luis",
      avatar: "/avatars/2.jpg",
      age: 4,
      pin: 1235
    },
    {
      name: "Pepe",
      avatar: "/avatars/3.jpg",
      age: 7,
      pin: 1236
    },
  ]);

  const handleDelete = () => {
    //Implementar Delete
  };

  return (
    <div className="manage-users-container">
      <Modal show={modalType} handleClose={() => setModalType("")}>
        <AddOrUpdateVideo
          type={modalType}
          handleClose={() => setModalType("")}
        />
      </Modal>

      <div className="titulo">
        <h1>Playlist general</h1>
      </div>
      <Table
        data={users}
        headers={["Nombre", "Avatar", "Edad", "Pin"]}
        onEditClick={() => setModalType("edit")}
        onDeleteClick={handleDelete}
      />
      <button onClick={() => setModalType("add")}>Agregar usuario</button>
      <div className="button-container">
        <Link to="/">
          <button className="button">
            <div className="button-box">
              <span className="button-elem">
                <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                  ></path>
                </svg>
              </span>
              <span className="button-elem">
                <svg viewBox="0 0 46 40">
                  <path
                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                  ></path>
                </svg>
              </span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageUsers;
