import axios from "axios";

const URL = "https://www.google.com";
const INTERVAL = 60; // in seconds

const request = async () => {
  const dateObj = new Date().toISOString();

  try {
    const response = await axios.get(URL);
    console.log(`${dateObj}: ${response.status}`);
  } catch (err) {
    console.log(`${dateObj}: ERROR: ${err.message}`);
  } finally {
    setTimeout(request, INTERVAL * 1000);
  }
};

request();
