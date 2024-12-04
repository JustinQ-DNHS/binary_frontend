// Import fetchOptions from config.js
import { pythonURI, fetchOptions } from "../../js/api/config.js";
// Import functions from config.js
import {
  putUpdate,
  postUpdate,
  deleteData,
  logoutUser,
} from "../../js/api/profile.js";
const redirectLoginLink = `${window.location.origin}/flocker_frontend/login`;

async function fetchUserProfilePicture() {
  const URL = pythonURI + "/api/id/pfp"; // Endpoint to fetch user profile data

  try {
    // 1. Fetch the data from the endpoint
    const response = await fetch(URL, fetchOptions);

    // 2. Make sure the response is ok
    if (!response.ok) {
      if (response.status == 401) {
        window.location.replace(redirectLoginLink);
        return null;
      }
      throw new Error(`Failed to fetch user profile: ${response.status}`);
    }

    // 3. Return the data
    return response.json();
    // 4. If we had an error anywhere in the try (stuff above), we will log an error.
  } catch (error) {
    console.error("Error fetching user profile photo:", error.message);
    return null;
    // Handle error display or fallback mechanism
  }
}

async function fetchUserProfileData() {
  const URL = pythonURI + "/api/user";

  try {
    const response = await fetch(URL, fetchOptions);
    if (!response.ok) {
      if (response.status == 401) {
        window.location.replace(redirectLoginLink);
        return null;
      }
      throw new Error(`Failed to fetch Name: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Name:", error.message);
    return null;
  }
}

async function fetchUserCar() {
  const URL = pythonURI + "/api/id/car";

  try {
    const response = await fetch(URL, fetchOptions);
    if (!response.ok) {
      if (response.status == 404) {
        return response.json();
      }
      throw new Error(`Failed to fetch photo: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car photo:", error.message);
    return null;
  }
}

window.saveCarPhoto = async function () {
  const fileInput = document.getElementById("carPicture");
  const file = fileInput.files[0];

  if (!file) return;

  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const carImage = document.getElementById("car");
      carImage.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  try {
    const base64String = await convertToBase64(file);
    await sendCarPicture(base64String);
    console.log("Profile picture uploaded successfully!");
  } catch (error) {
    console.error("Error uploading profile picture:", error.message);
    // Handle error display or fallback mechanism
  }
};

async function sendCarPicture(base64String) {
  const URL = pythonURI + "/api/id/car";

  // Create options object for PUT request
  const options = {
    URL,
    body: { car: base64String },
    message: "car-message", // Adjust the message area as needed
    callback: () => {
      console.log("Car picture uploaded successfully!");
      // Handle success response as needed
    },
  };

  try {
    putUpdate(options);
  } catch (error) {
    console.error("Error uploading car picture:", error.message);
    document.getElementById("car-message").textContent =
      "Error uploading car picture: " + error.message;
  }
}

async function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]); // Remove the prefix part of the result
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

const profilePictureData = await fetchUserProfilePicture();
const profileData = await fetchUserProfileData();
const userCarData = await fetchUserCar();

const pfp = document.getElementById("pfp");
const nameDisplay = document.getElementById("name");
const userCarDisplay = document.getElementById("car");

if (profileData?.name) {
  nameDisplay.innerHTML = profileData.name;
}

if (userCarData?.car) {
  userCarDisplay.src = `data:image/jpeg;base64,${userCarData.car}`;
}

if (profilePictureData?.pfp) {
  pfp.src = `data:image/jpeg;base64,${profilePictureData.pfp}`;
  pfp.hidden = false;
}
