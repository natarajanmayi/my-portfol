import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext'; // Import ThemeContext
import "./About.css";

const About = () => {
  const { theme } = useContext(ThemeContext); // Get the theme from context

  return (
    <div className={`m-auto ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* About Section */}
      <section className="about section container mx-auto py-12 px-4" id="about">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="about__data space-y-4 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-2xl">Hello, I am <br /> </span>
              Web developer passionate and meticulous, with a strong background in HTML, CSS, and JavaScript, and practical knowledge of libraries and frameworks like Bootstrap and React. Adept in both front-end and back-end programming, knowledgeable with SQL databases like MongoDB and MySQL, Node.js, Java, and PHP. Competent with Spring Boot to create scalable, reliable applications. Eager to use technical expertise and a love of solving problems to effectively contribute to a dynamic development team. 
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="./src/assets/mayi.jpg.png"
              alt="Portrait of Boopathi, a web developer"
              className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="qualification container mx-auto py-12 px-4">
        <span className="font-bold text-lg block text-center mb-4">Experience and Education</span>
        <h2 className="text-4xl font-bold mb-8 text-center">Qualification</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div className="qualification__content">
            <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center md:justify-start">
              <i className='bx bx-book-bookmark mr-2'></i> Education
            </h2>

            <div className="space-y-6">
              {/* Qualification Data */}
              <div className="qualification__data">
                <h3 className="text-xl font-medium">MERN Stack Development</h3>
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <i className='bx bx-book-alt mr-2'></i> KG Micro College
                  </span>
                  <span className="flex items-center">
                    <i className='bx bx-calendar-alt mr-2'></i> May 2024 - Dec 2024
                  </span>
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="text-xl font-medium">MSc Bioinformatics</h3>
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <i className='bx bx-book-alt mr-2'></i> Bharathidasan University - Trichy
                  </span>
                  <span className="flex items-center">
                    <i className='bx bx-calendar-alt mr-2'></i> Jun 2018 - Jun 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
