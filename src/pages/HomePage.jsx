import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext'; // Import the ThemeContext
import "./HomePage.css";

const HomePage = () => {
  const { theme } = useContext(ThemeContext); // Get theme from context

  return (
    <div className={`flex justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="card card-side bg-white text-gray-800 shadow-2xl rounded-lg overflow-hidden max-w-4xl animate-slide-in">
        <figure className="flex-shrink-0">
          <img
            src="./src/assets/mayi.jpg.png"
            
            alt="Boopathi M"
            className="w-78 h-full object-cover bg-gray-800"
          />
        </figure>
        <div className="card-body p-8 flex flex-col justify-center bg-gray-800">
          <h2 className="text-xl text-white font-bold">Hello, I'm</h2>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
            Natarajan M
          </h1>
          <h2 className="text-2xl font-semibold">Web Developer</h2>
          <p className="text-lg text-white mt-4">Ardent and enthusiastic about building valuable, eye-catching websites.</p>
          <div className="home__social flex mt-4">
            {/* Social media links */}
          </div>
          <div className="card-actions mt-6">
            <button className="btn btn-primary">
              <Link to="/about"> Get Started</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
