import React, { useState, useContext } from 'react';
import { DataContext } from '../App';

const Contact = () => {
  const { userProfile, setUserProfile } = useContext(DataContext);
  const isLoggedIn = userProfile?.username; 

  const [formData, setFormData] = useState({
    name: userProfile?.name || '',
    email: userProfile?.email || '',
    phone: userProfile?.phone || '',
    linkedin: userProfile?.linkedin || '',
    github: userProfile?.github || '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setSubmitted] = useState(false);
  const [isError, setError] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const inputSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setSubmitted(false);
      return;
    }

    
    setSubmitted(true);
    setError(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      subject: '',
      message: '',
    });
  };

  const saveUserInfo = () => {
    if (isLoggedIn) {
      setUserProfile(prev => ({
        ...prev,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin,
        github: formData.github,
      }));
    }
  };

  return (
    <div className="p-6 max-w-auto mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">CONTACT US</h2>

      {/* Contact INFO */}
      <div className="mb-8 text-black-50">
        <p>If you have any questions or would like to get in touch, feel free to send me a message using the form below.</p>
        <p className="mt-4">
          Alternatively, you can reach me at:
        </p>
        <ul className="list-none mt-2">
          {isLoggedIn ? (
            <>
              <li className="mb-4">
  <strong className="block text-lg font-semibold text-black-50">Email:</strong>
  <input
    type="text"
    name="email"
    value={formData.email}
    onChange={inputChange}
    className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</li>

<li className="mb-4">
  <strong className="block text-lg font-semibold text-black-50">Phone:</strong>
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={inputChange}
    className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</li>

<li className="mb-4">
  <strong className="block text-lg font-semibold text-black-50">LinkedIn:</strong>
  <input
    type="text"
    name="linkedin"
    value={formData.linkedin}
    onChange={inputChange}
    className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</li>

<li className="mb-4">
  <strong className="block text-lg font-semibold text-black-50">GitHub:</strong>
  <input
    type="text"
    name="github"
    value={formData.github}
    onChange={inputChange}
    className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</li>

<button
  onClick={saveUserInfo}
  className="bg-teal-500 text-white hover:bg-teal-400 font-bold rounded py-2 px-6 text-center mt-4"
>
  Save Contact Info
</button>

            </>
          ) : (
            <>
              <li><strong>Email:</strong> {formData.email}</li>
              <li><strong>Phone:</strong> {formData.phone}</li>
              <li><strong>LinkedIn:</strong> <a href={formData.linkedin} className="text-teal-500 hover:text-teal-400">{formData.linkedin}</a></li>
              <li><strong>GitHub:</strong> <a href={formData.github} className="block text-lg font-bold text-black-50 mb-2 mt-2">{formData.github}</a></li>
            </>
          )}
        </ul>
      </div>

      {/* Contact FORM */}
      <form onSubmit={inputSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={inputChange}
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={inputChange}
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject of Your Message"
            value={formData.subject}
            onChange={inputChange}
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={inputChange}
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white hover:bg-teal-400 font-bold rounded py-2 px-6 text-center"
        >
          Send Message
        </button>

        {isError && (
          <div className="text-red-500 text-sm mb-4">
            <p>Please fill out all required fields.</p>
          </div>
        )}

        {isSubmitted && !isError && (
          <div className="text-green-500 text-lg mt-4">
            <p>Your message has been sent successfully! Thank you for reaching out.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
