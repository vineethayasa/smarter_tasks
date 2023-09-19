import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "");
  const name = userData.name;
  const email = userData.email;

  const navigate = useNavigate();
  const ButtonClick = () => {
    localStorage.removeItem("userData");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="mb-4">
        <div className="mb-2">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Dashboard
          </h1>
        </div>
        <div className="mb-2">
          <p className="text-lg text-gray-800">Name: {name}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg text-gray-800">Email: {email}</p>
        </div>
      </div>

      <button
        id="logout-link"
        onClick={ButtonClick}
        className="bg-black text-white p-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
