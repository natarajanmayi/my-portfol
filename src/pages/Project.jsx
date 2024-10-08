import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import fetch from "../assets/images.jpeg";
import blog from "../assets/blog site.jpeg";
import random from "../assets/randomcolor.jpg";
import bg from "../assets/rgb.jpg";
import sw from "../assets/switch.jpg";
import game from "../assets/quize.jpg";

const Project = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center p-10 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Project-1 */}
      <div id='slide1' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src = {fetch}
              alt="fetch"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Photo fetch</h2>
            <p>Web Development</p>
            <div className="card-actions justify-end">
              <a href='https://fetchimage.netlify.app/'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-2 */}
      <div id='slide2' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src = {blog}
              alt="Elephant Article"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blogsite</h2>
            <p>Website</p>
            <div className="card-actions justify-end">
              <a href='https://blogpagesite.netlify.app/'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat for other projects with the same conditional classes */}

      {/* Project-3 */}
      <div id='slide3' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src="./src/assets/randomcolor.jpg"
              alt="Random Color"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">css lots of fun</h2>
            <p>Using html css</p>
            <div className="card-actions justify-end">
              <a href='https://csslotsfun.netlify.app/'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-4 */}
      <div id='slide4' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src = {bg}
              alt="Stone Paper Scissor Game"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">bg colour change</h2>
            <p>Background Colour Change using JavaScript</p>
            <div className="card-actions justify-end">
              <a href='https://bgclrchange.netlify.app/'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-5 */}
      <div id='slide5' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src = {sw}
              alt="Set Timeout"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">switch class</h2>
            <p>using switc case</p>
            <div className="card-actions justify-end">
              <a href='https://switcclass.netlify.app'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-6 */}
      <div id='slide6' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src="./src/assets/quize.jpg"
              alt="Add List Using Use State"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">gamquize</h2>
            <p>Using htmljs</p>
            <div className="card-actions justify-end">
              <a href='https://gamequize.netlify.app'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
