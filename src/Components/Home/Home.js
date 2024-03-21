import React, { useState,useEffect } from "react";
import "./Home.scss";
import User from "../User/User";
import PinDisplay from "../PinDisplay/PinDisplay";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showManageUsersPin, setShowManageUsersPin] = useState(false);
  const [showManageVideosPin, setShowManageVideosPin] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const urllogin = "http://localhost:3000/api/accounts";
      try {
        const response = await fetch(urllogin, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.log(errorData.error);
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        console.log(data);
        setUsers(data);
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  







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
              <p>{user.firstName}</p>
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