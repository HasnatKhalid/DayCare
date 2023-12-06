// src/admin/pages/AdminProgress/AdminProgress.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminSidebar from "../../components/AdminSideBar/AdminSidebar";

const AdminProgress = () => {
  const { id } = useParams();
  const [progressData, setProgressData] = useState({
    happiness: 75,
    food: "Ate well",
    exercise: "Played in the morning",
    sleep: "Napped in the afternoon",
  });

  useEffect(() => {
    // Fetch progress data from the backend based on the pet's ID
    // You need to implement a backend route to fetch progress details by id
    // For simplicity, I'm using a placeholder endpoint here
    fetch(`/api/progress/${id}`)
      .then((response) => response.json())
      .then((data) => setProgressData(data))
      .catch((error) => console.error("Error fetching progress data:", error));
  }, [id]);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Admin Progress
            </h1>
            <div className="mt-8">
              <div className="mb-4">
                <label
                  htmlFor="happiness"
                  className="block text-sm font-bold mb-2"
                >
                  Happiness
                </label>
                <input
                  type="text"
                  id="happiness"
                  name="happiness"
                  value={`${progressData.happiness}%`}
                  className="w-full border rounded-md p-2"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label htmlFor="food" className="block text-sm font-bold mb-2">
                  Food
                </label>
                <input
                  type="text"
                  id="food"
                  name="food"
                  value={progressData.food}
                  className="w-full border rounded-md p-2"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exercise"
                  className="block text-sm font-bold mb-2"
                >
                  Exercise
                </label>
                <input
                  type="text"
                  id="exercise"
                  name="exercise"
                  value={progressData.exercise}
                  className="w-full border rounded-md p-2"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sleep" className="block text-sm font-bold mb-2">
                  Sleep
                </label>
                <input
                  type="text"
                  id="sleep"
                  name="sleep"
                  value={progressData.sleep}
                  className="w-full border rounded-md p-2"
                  readOnly
                />
              </div>
              <Link to={`/admin/update-progress/${id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Update Progress
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProgress;
