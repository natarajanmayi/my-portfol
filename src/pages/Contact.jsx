import React, { useState, useContext } from 'react';
import 'boxicons/css/boxicons.min.css';
import emailjs from 'emailjs-com'; // Import EmailJS
import { ThemeContext } from '../components/ThemeContext'; // Import ThemeContext

const Contact = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  // State for form inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    phone: '',
    message: '',
  });

  // State for form feedback message
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
    // console.log(form);
  };

  // Handle form submission and email sending
 // Handle form submission and email sending
const sendEmail = (e) => {
  e.preventDefault();

  // Validate form fields
  if (form.name === '' || form.email === '' || form.project === ''  || form.phone === '' || form.message === '') {
    setFeedbackMessage('Please fill all the input fields 📩');
    return;
  }

  // EmailJS send form
  emailjs.sendForm(
    'service_k9j93p9',  // Replace with your service ID
    'template_sko54u2', // Replace with your template ID
    e.target,           // Form element
    'R6u3cJ45HreKmsr0B' // Replace with your public key
  )
  .then(() => {
    // Success: Show message and clear form
    setFeedbackMessage('Message sent ✅');
    setForm({
      name: '',
      email: '',
      project: '',
      phone: '',
      message: '',
    });

    // Clear the message after 5 seconds
    setTimeout(() => {
      setFeedbackMessage('');
    });
  })
  .catch((error) => {
    // Failure: Show error message
    setFeedbackMessage('Oops! Something went wrong...');
    console.error('Error:', error);
  });
};


  return (
    <div>
      <section className={`contact section py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`} id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <span className={`block text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-center mb-4`}>For Projects</span>
          <h2 className={`text-3xl font-bold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-12`}>Contact Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <i className="bx bx-home text-3xl text-blue-600"></i>
                <div>
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Location</h3>
                  <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Pudukkottai</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="bx bx-phone text-3xl text-green-600"></i>
                <div>
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Phone</h3>
                  <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>6379227945</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="bx bx-envelope text-3xl text-red-600"></i>
                <div>
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Gmail</h3>
                  <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>natarajanmayi@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <form className="space-y-6" id="contact-form" onSubmit={sendEmail}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      required
      placeholder="Name"
      className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
    />
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      required
      placeholder="Email"
      className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
    />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      name="project"
      value={form.project}
      onChange={handleChange}
      required
      placeholder="Project"
      className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
    />
    <input
      type="number"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="Phone"
      className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
    />
  </div>

  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Message"
    className={`w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
  ></textarea>

  <button
    type="submit"
    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
  >
    Submit <i className="ri-arrow-right-up-line ml-2"></i>
  </button>

  {/* Display Feedback Message */}
  {feedbackMessage && (
    <p className={`text-center mt-4 ${feedbackMessage.includes('✅') ? 'text-blue-600' : 'text-red-600'}`}>
      {feedbackMessage}
    </p>
  )}
</form>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
