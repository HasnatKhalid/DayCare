import React, { useState } from "react";
import axios from "axios";

function Lost() {
  const [imageFile, setImageFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleChangeImage = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response from server:", response.data);

      setPrediction(response.data.predicted_class);
    } catch (error) {
      console.error("Error in POST request:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl mb-5">Image Classifier</h1>
      <div className="mb-5">
        <input
          type="file"
          className="border py-2 px-3 text-gray-700 rounded"
          onChange={handleChangeImage}
        />
      </div>
      {imageFile && (
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Selected"
          className="mb-5 w-full rounded"
        />
      )}
      <button
        className="bg-blue-500 text-white py-2 px-3 rounded disabled:opacity-50"
        onClick={handleSubmit}
        disabled={!imageFile}
      >
        Predict
      </button>
      {prediction && (
        <p className="mt-5 text-gray-700">Predicted class: {prediction}</p>
      )}
    </div>
  );
}

export default Lost;
