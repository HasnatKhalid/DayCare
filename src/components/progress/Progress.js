import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

// Dummy progress data for illustration
const progressData = {
  happiness: 75,
  food: "Ate well",
  exercise: "Played in the morning",
  sleep: "Napped in the afternoon",
};

const DailyProgress = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChat([...chat, { sender: "Pet Owner", message }]);
      setMessage("");
    }
  };

  // Animation for the progress bar
  const progressAnimation = useSpring({
    from: { width: "0%" },
    to: { width: `${progressData.happiness}%` },
  });

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://bloximages.newyork1.vip.townnews.com/dailyprogress.com/content/tncms/assets/v3/editorial/9/5b/95be4894-5beb-5bdf-ad14-1c5d3ae7aac6/652578a01e220.preview.png?crop=1280%2C672%2C0%2C23&resize=1200%2C630&order=crop%2Cresize")',
        minHeight: "100vh",
      }}
    >
      <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 opacity-75 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Daily Progress
        </h2>
        {/* Display previous progress data with fade-in animation */}
        <animated.div
          style={{ ...progressAnimation, overflow: "hidden" }}
          className="mb-4 text-white"
        >
          <h3 className="text-xl font-bold mb-2">Previous Progress:</h3>
          <p>Happiness: {progressData.happiness}%</p>
          <p>Food: {progressData.food}</p>
          <p>Exercise: {progressData.exercise}</p>
          <p>Sleep: {progressData.sleep}</p>
        </animated.div>
        {/* Pet Photo */}
        <img
          src="https://image.petmd.com/files/styles/978x550/public/2023-09/how-smart-are-cats.jpg"
          alt="Pet Photo"
          className="rounded-full w-20 h-20 mb-3 mx-auto border-4 border-white"
        />
        {/* Progress Bar */}
        <div className="relative h-8 mb-4 bg-white rounded-full overflow-hidden">
          <animated.div
            className="h-full bg-green-500"
            style={{
              width: progressAnimation.width,
            }}
          />
        </div>
        {/* Chat button */}
        <div className="text-center mb-4">
          <button
            className="bg-white text-blue-500 p-4 rounded-full"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <FontAwesomeIcon icon={faComments} />
          </button>
        </div>
        {/* Chat pop-up window */}
        {isChatOpen && (
          <div className="mb-4 text-white">
            {chat.map((entry, index) => (
              <div key={index} className="mb-2">
                <p
                  className={`text-${
                    entry.sender === "Pet Owner" ? "blue" : "green"
                  }-700 font-bold`}
                >
                  {entry.sender}:
                </p>
                <p>{entry.message}</p>
              </div>
            ))}
            <div className="mb-2">
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Send a Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-md p-2"
              ></textarea>
            </div>
            <button
              className="w-full bg-white text-blue-500 px-4 py-2 rounded-full"
              onClick={handleSendMessage}
            >
              Send Message
            </button>
          </div>
        )}
        {/* Book Now button */}
        <Link to="/booking" className="block w-full text-center mt-4">
          <button className="w-full bg-white text-blue-500 px-4 py-2 rounded-full">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DailyProgress;
