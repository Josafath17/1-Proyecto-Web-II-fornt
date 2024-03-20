import React, { useState } from "react";
import "./Home.scss";
import User from "../User/User";
import PinDisplay from "../PinDisplay/PinDisplay";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showManageUsersPin, setShowManageUsersPin] = useState(false);
  const [showManageVideosPin, setShowManageVideosPin] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([
    {
      name: "Jorgito",
      avatar: "/Accets/1.avif",
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
  //Reemplazar datos de prueba por [] y traer data en useEffect

  const validateAdminPin = (pin) => {
    const userData = JSON.parse(localStorage.getItem("DataUser") || "{}");

    if (userData) {
      return userData.pin === Number(pin);
    } else return false;
  };

  const validateUserPin = (pin) => {
    if (selectedUser?.pin) {
      return selectedUser.pin === Number(pin);
    } else return false;
  };

  console.log("Selected", selectedUser)

  
  return (
    <div className="boddys">
      <PinDisplay
        show={showManageUsersPin}
        setShow={setShowManageUsersPin}
        onSuccess={() => navigate("/manage-users")}
        validatePin={validateAdminPin}
      />

      <PinDisplay
        show={showManageVideosPin}
        setShow={setShowManageVideosPin}
        onSuccess={() => navigate("/manage-videos")}
        validatePin={validateAdminPin}
      />

      <PinDisplay
        show={Boolean(selectedUser?.pin)}
        setShow={setSelectedUser}
        onSuccess={() => navigate("/playlist")}
        validatePin={validateUserPin}
      />


      <div className="user">
        <User />
      </div>
      <div className="Titulo">
        <p>¿Quién está viendo ahora?</p>
      </div>

      <div className="users-container">
        {users.map((user, index) => (
          <div className="user-card" key={index} onClick={() => setSelectedUser(user)}>
            <img src={user.avatar} alt="Avatar" />
            <div className="user-info">
              <p>{user.name}</p>
            </div>
          </div>
        ))}
        
        <button className="icon-botton add-botton ">
          <div class="add-icon"></div>
          <div class="botton-txt" onClick={() => setShowManageUsersPin(true)}>
            Agregar perfil{" "}
          </div>

        </button>
      </div>

      <button className="btn" onClick={() => setShowManageVideosPin(true)}>
        Administrar videos
      </button>
    </div>
  );
};

export default Home;
