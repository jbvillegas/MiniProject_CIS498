import { useState, useContext } from "react";
import { DataContext } from "../App";

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { userProfile } = useContext(DataContext);

  const items = [
    {
      id: 1,
      title: "User-Friendly Navigation",
      description: "Expect easy-to-use navigation that allows you to smoothly explore the various sections of the portfolio, from projects to contact information."
    },
    {
      id: 2,
      title: "Interactive Experience",
      description: "The portfolio is designed to be interactive, providing engaging elements that highlight skills, projects, and achievements in an exciting way."
    },
    {
      id: 3,
      title: "Clear Project Showcases",
      description: "Expect detailed project descriptions and demos that effectively demonstrate technical skills and problem-solving abilities."
    },
    {
      id: 4,
      title: "Responsive Design",
      description: "The portfolio is fully responsive, ensuring a seamless experience whether you're viewing it on a desktop, tablet, or mobile device."
    },
    {
      id: 5,
      title: "Professional Collaboration",
      description: "Working with 'Guest' means you can expect professionalism, clear communication, and a collaborative approach to solving problems and delivering results."
    }
  ];  
  
  return (
    <div className="flex flex-col items-center">
  
      <h1 className="text-8xl pt-6 font-bold mb-6 text-center text-teal-500">
        I'm {userProfile?.username || "Guest"}, <br /> and this is my portfolio!
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <h2 className="text-4xl pt-6 mb-6 font-bold text-center text-black">
          Portfolio Highlights and Collaboration Expectations
        </h2>

        <div className="flex w-full mt-8">
          <div className="w-1/2 border-r border-gray-300 p-4">
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="w-1/2 p-4">
            {hoveredItem ? (
              <div>
                <h3 className="text-xl font-semibold">{hoveredItem.title}</h3>
                <p>{hoveredItem.description}</p>
              </div>
            ) : (
              <p className="text-gray-500">Hover over an item to see details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
