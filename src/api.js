const axios = require("axios");

//TODO: add it to .env
const URL = "http://localhost:9000/images";

async function getAllImages(urlString) {
  const response = await axios(URL);
  // first data is axios api
  // second data is from server's endpint
  return response.data.data;
}

module.exports = {
  getAllImages,
};
