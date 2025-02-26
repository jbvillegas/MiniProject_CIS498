import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const inputSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setIsError(true);
      setIsSubmitted(false);
      return;
    }

    // Simulate a successful form submission
    setIsSubmitted(true);
    setIsError(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="p-6 max-w-auto mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">Contact</h2>
      
      {/* Contact INFO */} 
      <div className="mb-8 text-black-50">
        <p>If you have any questions or would like to get in touch, feel free to send me a message using the form below.</p>
        <p className="mt-4">
          Alternatively, you can reach me at:
        </p>
        <ul className="list-none mt-2">
          <li><strong>Email:</strong> Guest.dev@example.com</li>
          <li><strong>Phone:</strong> +1 (123) 456-7890</li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/Guest" className="text-teal-500 hover:text-teal-400">linkedin.com/in/Guest</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Guest" className="text-teal-500 hover:text-teal-400">github.com/Guest</a></li>
        </ul>
      </div>

    
      { /* Contact FORM */ }
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
