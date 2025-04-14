import React, { useContext, useState } from 'react';
import { DataContext } from '../App';

const AboutMe = () => {
  const { userProfile, setUserProfile } = useContext(DataContext);
  const isLoggedIn = userProfile?.username; 

  /****************SAMPLE TEXT FOR USER GUIDANCE*********************/ 
  const defaultText = `
Hello! My name is Guest, and I’m a **passionate and driven full-stack web developer** with a deep love for problem-solving and building user-centric applications.

I specialize in **JavaScript technologies**, with expertise in **React, Node.js**, and modern front-end frameworks. I have a strong foundation in creating **dynamic, interactive web applications** that provide seamless user experiences.

---

### My Journey into Web Development
I’ve always been fascinated by technology and its ability to change the way we live and work. My journey into web development began in **2018**, when I decided to learn coding in my spare time. What started as a hobby soon turned into a full-blown passion, and I began to dive deeper into the world of web development.

My path hasn’t been a traditional one. After pursuing my studies, I decided to enter the world of technology, where I realized my love for both **design and functionality**. I quickly fell in love with creating websites that **not only look good but also provide intuitive user experiences**. Since then, I’ve been constantly honing my skills by building projects, learning new technologies, and collaborating with other developers.

---

### Technical Skills
- **Front-End:** HTML5, CSS3, JavaScript (ES6+), React.js, TailwindCSS, Bootstrap
- **Back-End:** Node.js, Express.js, MongoDB, RESTful APIs
- **Version Control:** Git, GitHub, GitLab
- **Tools & Technologies:** Webpack, NPM, Yarn, Axios, Firebase, JWT

### Notable Projects
Over the years, I have had the privilege of working on some exciting projects that showcase my skills and passion:

- **Interactive Resume Website:** A dynamic, interactive resume that highlights my experience, skills, and projects.
- **Weather App:** A real-time weather forecasting app that pulls data from the OpenWeatherMap API to show weather conditions based on the user’s location.
- **Expense Tracker:** A simple web application that helps users track their expenses, categorize their spending, and visualize their financial habits.

### Industry Experience
I have had the opportunity to work with talented teams and clients, which has given me invaluable insights into **real-world development workflows**. 

My **internship at Morgan Stanley in 2025** allowed me to apply my development skills to real-world projects, improve my understanding of collaboration tools like **GitHub and Microsoft Teams**, and work with **industry-standard development practices**.

### Continuous Learning & Future Goals
As a developer, I’m **constantly learning and adapting** to the latest technologies and trends in the field. Whether it's:

✅ Exploring the latest features of **React**  
✅ Experimenting with **back-end technologies** like Node.js  
✅ Diving into **new tools** that improve my workflow  

I strive to keep growing as a developer.

Outside of my technical work, I am passionate about **mentorship** and helping others achieve their goals in tech. I believe in **building inclusive, diverse communities** where everyone can learn and grow.

In the future, I aim to:  
🚀 Delve deeper into **full-stack development**  
🤖 Explore advanced topics in **machine learning** and **artificial intelligence**  
🌍 Continue **contributing to open-source projects**  
🤝 Collaborate with **innovative teams** that focus on solving real-world problems through technology  

`;


  const [isEditing, setIsEditing] = useState(false);
  const [aboutMeText, setAboutMeText] = useState(userProfile?.aboutMe || defaultText);

  const handleSave = () => {
    if (isLoggedIn) {
      setUserProfile(prev => ({ ...prev, aboutMe: aboutMeText })); 
      setIsEditing(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">ABOUT ME</h2>

      {isEditing ? (
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md text-lg"
          rows="10"
          value={aboutMeText}
          onChange={(e) => setAboutMeText(e.target.value)}
        />
      ) : (
        <p className="text-lg text-black-50 mb-6 whitespace-pre-line">
          {isLoggedIn ? aboutMeText : defaultText}
        </p>
      )}

      {isLoggedIn && (
        <div className="flex justify-end space-x-4">
          {isEditing ? (
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="bg-teal-500 text-white hover:bg-teal-400 font-bold rounded py-2 px-6" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AboutMe;
