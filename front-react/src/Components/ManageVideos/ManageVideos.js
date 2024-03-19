import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./ManageVideos.scss";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";

const AddOrUpdateVideo = ({ handleClose, type }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, url } = e.target;

    console.log("Form values:", {
      name: name.value,
      url: url.value,
    });

    if (type === "add") {
      //Implementar Add
    } else {
      //Implementar Update
    }
  };

  return (
    <div className="add-or-update-video">
      <div >
        <h1>{type === "add" ? "Agregar" : "Actualizar"} video</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Nombre del video"
          required
        />
        <input name="url" type="text" placeholder="Url del video" required />

        <div className="buttons">
          <button onClick={handleClose}>Cancelar</button>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

const ManageVideos = () => {
  const [modalType, setModalType] = useState("");
  const [videos, setVideos] = useState([
    {
      name: "Video 1",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Video 2",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Video 3",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ]);


  const handleDelete = () => {
    //Implementar Delete
  };

  return (
    <div className="manage-videos-container">
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
        data={videos}
        headers={["Nombre", "Url"]}
        onEditClick={() => setModalType("edit")}
        onDeleteClick={handleDelete}
      />
      <button onClick={() => setModalType("add")}>Agregar video</button>
      
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

export default ManageVideos;
