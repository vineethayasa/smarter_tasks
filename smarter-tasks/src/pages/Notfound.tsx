import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-3xl text-gray-600">404 Page Not Found</p>
      <br />
      <a
        href="/home"
        className="ml-6 text-lg hover:text-gray-300 bg-black rounded-lg px-4 py-2 text-white"
      >
        Home
      </a>
    </div>
  );
};
export default NotFound;
