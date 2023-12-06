// src/admin/pages/ChatAdmin/ChatAdmin.js
import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminSidebar from "../../components/AdminSideBar/AdminSidebar";

const ChatAdmin = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChat([...chat, { sender: "Admin", message }]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Chat with User
            </h1>
            <div className="mt-8">
              {/* Display chat messages */}
              {chat.map((entry, index) => (
                <div key={index} className="mb-2">
                  <p
                    className={`text-${
                      entry.sender === "Admin" ? "green" : "blue"
                    }-700 font-bold`}
                  >
                    {entry.sender}:
                  </p>
                  <p className="text-gray-700">{entry.message}</p>
                </div>
              ))}
              {/* Input for new message */}
              <div className="mb-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold mb-2"
                >
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
              {/* Button to send message */}
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-full"
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatAdmin;
