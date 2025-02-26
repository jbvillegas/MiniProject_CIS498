import React from 'react';

const AboutMe = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">About Me</h2>
      
      {/*Similar to a Lorem Ipsum, I generated this text to prevent using Dani's or my personal information
       Feel free to replace it with your own content */} 
      
      <p className="text-lg text-black-50 mb-6">
        Hello! My name is <strong>Amari</strong>, and I’m a passionate and driven full-stack web developer with a deep love for problem-solving and building user-centric applications. I specialize in JavaScript technologies, with expertise in React, Node.js, and modern front-end frameworks. I have a strong foundation in creating dynamic, interactive web applications that provide seamless user experiences.
      </p>

      
      <p className="text-lg text-black-50 mb-6">
        I’ve always been fascinated by technology and its ability to change the way we live and work. My journey into web development began in <strong>2018</strong>, when I decided to learn coding in my spare time. What started as a hobby soon turned into a full-blown passion, and I began to dive deeper into the world of web development.
      </p>

      <p className="text-lg text-black-50 mb-6">
        My path hasn’t been a traditional one. After pursuing my studies, I decided to enter the world of technology, where I realized my love for both design and functionality. I quickly fell in love with creating websites that not only look good but also provide intuitive user experiences. Since then, I’ve been constantly honing my skills by building projects, learning new technologies, and collaborating with other developers.
      </p>

      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">Technical Skills</h3>
        <ul className="list-disc pl-5 text-lg text-black-50">
          <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, TailwindCSS, Bootstrap</li>
          <li><strong>Back-End:</strong> Node.js, Express.js, MongoDB, RESTful APIs</li>
          <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
          <li><strong>Tools & Technologies:</strong> Webpack, NPM, Yarn, Axios, Firebase, JWT</li>
        </ul>
      </div>

      
      <p className="text-lg text-black-50 mb-6">
        Over the years, I have had the privilege of working on some exciting projects that showcase my skills and passion. Some of my notable projects include:
      </p>
      
      <ul className="list-disc pl-5 text-lg text-black-50 mb-6">
        <li><strong>Interactive Resume Website:</strong> A dynamic, interactive resume that highlights my experience, skills, and projects.</li>
        <li><strong>Weather App:</strong> A real-time weather forecasting app that pulls data from the OpenWeatherMap API to show weather conditions based on the user’s location.</li>
        <li><strong>Expense Tracker:</strong> A simple web application that helps users track their expenses, categorize their spending, and visualize their financial habits.</li>
      </ul>

      
      <p className="text-lg text-black-50 mb-6">
        I have had the opportunity to work with talented teams and clients, which has given me invaluable insights into real-world development workflows. My internship at <strong>Morgan Stanley</strong> in <strong>2025</strong> allowed me to apply my development skills to real-world projects, improve my understanding of collaboration tools like GitHub and Microsoft Teams, and work with industry-standard development practices.
      </p>

      <p className="text-lg text-black-50 mb-6">
        As a developer, I’m constantly learning and adapting to the latest technologies and trends in the field. Whether it's exploring the latest features of React, experimenting with back-end technologies like Node.js, or diving into new tools that improve my workflow, I strive to keep growing as a developer.
      </p>

      
      <p className="text-lg text-black-50 mb-6">
        Outside of my technical work, I am passionate about <strong>mentorship</strong> and helping others achieve their goals in tech. I believe in building inclusive, diverse communities where everyone can learn and grow. My long-term goal is to continue expanding my knowledge and contribute to meaningful projects that make a positive impact on the world.
      </p>

      <p className="text-lg text-black-50 mb-6">
        In the future, I aim to delve deeper into <strong>full-stack development</strong>, explore advanced topics in <strong>machine learning</strong> and <strong>artificial intelligence</strong>, and continue contributing to open-source projects. I also plan to collaborate with innovative teams that focus on solving real-world problems through technology.
      </p>

      
      <p className="text-lg text-black-50 mb-6">
        Thank you for taking the time to explore my portfolio. I am excited about the opportunities ahead and am always open to discussing potential collaborations, projects, or simply connecting with like-minded individuals in the tech community.
      </p>

      <p className="text-lg text-black-50 mb-6">
        If you would like to learn more about my work, feel free to check out my <a href="/projects" className="text-teal-500 hover:text-teal-400">projects</a> or contact me directly through the <a href="/contact" className="text-teal-500 hover:text-teal-400">contact</a> page. Let’s build something amazing together!
      </p>
    </div>
  );
};

export default AboutMe;
