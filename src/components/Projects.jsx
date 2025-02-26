import React from 'react';

const Projects = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">Projects</h2>
      
      {/* P1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">Interactive Resume Website</h3>
        <p className="text-lg text-black-50 mb-4">
          A dynamic, interactive resume website built using React, where users can explore various sections about my skills, experience, and projects. Features include a name input, dark/light mode toggle, and navigation to different sections of the portfolio.
        </p>
        <p className="text-md text-black-50 mb-4"><strong>Technologies Used:</strong> React, JavaScript, TailwindCSS</p>
        <a 
          href="https://github.com/your-username/interactive-resume" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-400"
        >
          View on GitHub
        </a>
      </div>

      {/* P2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">Weather App</h3>
        <p className="text-lg text-black-50 mb-4">
          A simple weather application that uses a public API to fetch real-time weather data based on the user's location or entered city. It displays temperature, weather condition, humidity, and more.
        </p>
        <p className="text-md text-black-50 mb-4"><strong>Technologies Used:</strong> React, JavaScript, OpenWeatherMap API</p>
        <a 
          href="https://github.com/your-username/weather-app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-400"
        >
          View on GitHub
        </a>
      </div>

      {/* P3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">Expense Tracker</h3>
        <p className="text-lg text-black-50 mb-4">
          A web application that helps users track their income and expenses. The app allows users to add, edit, and delete transactions, providing a summary of their spending habits over time.
        </p>
        <p className="text-md text-black-50 mb-4"><strong>Technologies Used:</strong> React, JavaScript, Local Storage</p>
        <a 
          href="https://github.com/your-username/expense-tracker" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-400"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
