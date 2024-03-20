import React, { useState, useEffect } from "react";
import "./ManageUsers.scss";
import { Link } from "react-router-dom";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";




const AddOrUpdateVideo = ({ handleClose, type }) => {

  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    age: "",
    pin: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form values:", formData);

    if (type === "add") {
      // Implementar Add
    } else {
      // Implementar Update
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const [firstName, setFirstName] = useState();
  const [avatar, setAvatar] = useState();
  const [age, setAge] = useState();
  const [pin, setPin] = useState();
  const accountres = {

    firstName: firstName,
    avatar: avatar,
    age: age,
    pin: pin

  };
  const urlaccount = "http://localhost:3000/api/accounts";


  fetch(urlaccount, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(accountres),
  })
    .then((response) => {
      console.log(2);
      if (!response.ok) {

        response.json().then((errorData) => {
          console.log(errorData.error);
        });

        throw new Error("Network response was not ok");
      }
      console.log(4);
      return response.json();

    })



  return (
    <div className="add-or-update-user">
      <h1>{type === "add" ? "Agregar" : "Actualizar"} usuario</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Nombre del usuario" value={formData.name} onChange={handleInputChange} required />
        <select name="avatar" value={formData.avatar} onChange={handleInputChange}>
          <option value="" disabled>Seleccione el avatar del usuario</option>
          <option value="/images/avatar1.png">Avatar1</option>
          <option value="/images/avatar2.png">Avatar2</option>
        </select>
        <input name="age" type="number" placeholder="Edad del usuario" value={formData.age} onChange={handleInputChange} required />
        <input name="pin" type="number" placeholder="Pin del usuario" value={formData.pin} onChange={handleInputChange} required />

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
  const [users, setUsers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    // Lógica para obtener la lista de usuarios al cargar el componente
    fetch("http://localhost:3000/api/accounts")
      .then(response => {

        if (!response.ok) {
          throw new Error('Error fetching users');
        }
        return response.json();
      })

      .then(data => {
        const accountfilter = []
        data.forEach(account => {
          // Utilizar la función Confirm y setDatauser
          accountfilter.push({
            firstName: account.firstName,
            avatar: account.avatar,
            age: account.age,
            pin: account.pin,

          })


        });
        setUsers(data);
        setAccounts(accountfilter);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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
        users={users}
        data={accounts}
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
